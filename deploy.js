const { Client } = require('ssh2');
const fs = require('fs');

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
      
      const cmd = "unzip -o deploy-uat-package.zip && docker load -i dhc-frontend.tar && docker compose -f docker-compose.uat.yml --env-file .env.uat up -d && docker cp wordpress-exports/. dhc_uat_wordpress:/var/www/html/wp-content/ai1wm-backups/";
      
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
  host: '10.4.0.30',
  port: 22,
  username: 'rholmes',
  password: 'R!sc1969'
});
