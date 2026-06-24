const { Client } = require('ssh2');
const fs = require('fs');

// Load SSH credentials from .env.uat — never hardcode credentials in source
fs.readFileSync('.env.uat', 'utf8').split('\n').forEach(line => {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) return;
  const eq = trimmed.indexOf('=');
  if (eq === -1) return;
  process.env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
});

const conn = new Client();

console.log('Connecting to UAT server...');
conn.on('ready', () => {
  console.log('Connected! Uploading package...');
  conn.sftp((err, sftp) => {
    if (err) throw err;
    const localFile = 'deploy-uat-package.zip';
    const remoteFile = 'deploy-uat-package.zip';
    
    sftp.fastPut(localFile, remoteFile, (err) => {
      if (err) throw err;
      console.log('Upload complete! Executing deployment commands...');
      
      const cmd = "python3 -m zipfile -e deploy-uat-package.zip . && docker load -i dhc-frontend.tar && docker compose -f docker-compose.uat.yml --env-file .env.uat up -d";
      
      conn.exec(cmd, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
          console.log('Deployment commands completed with code: ' + code);
          conn.end();
        }).on('data', (data) => {
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
      });
    });
  });
}).connect({
  host: process.env.UAT_SSH_HOST,
  port: 22,
  username: process.env.UAT_SSH_USER,
  password: process.env.UAT_SSH_PASS,
});
