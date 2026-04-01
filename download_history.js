const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filename);
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(filename, () => reject(err));
    });
  });
}

async function run() {
  const imageUrls = [
    'https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Dr_H_Jack_Geiger_and_Dr_Count-Gibson_in_Polaroid_Frame.png'
  ];

  for (const url of imageUrls) {
    const filename = path.basename(url);
    const localPath = path.join(targetDir, filename);
    try {
      console.log(`Downloading ${filename}...`);
      await downloadImage(url, localPath);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Error: ${e.message}`);
    }
  }
}

run();
