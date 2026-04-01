const fs = require('fs');
const https = require('https');
const path = require('path');

const data = [
  {
    "name": "Jack King",
    "title": "Chairman",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Jack_King_Vice_Chairman_Board_of_Directors_Delta_Health_Center-3.png"
  },
  {
    "name": "Mitchell Williams",
    "title": "Vice Chairman",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Mitchell_Williams_Finance_Chairman_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "William Cummings",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/William_Cummings_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "Carmere Scott",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Carmere_Scott_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "Shannon Brown",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Shannon_Brown_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "Dorothy Walls",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Dorothy_Walls_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "Shawneequa Beal",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/05/Shaqueena-Beal1.png"
  },
  {
    "name": "James Hodges",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/James_Hodges_Chairman_Board_of_Directors_Delta_Health_Center.png"
  },
  {
    "name": "Joyce Myers-Dixon",
    "title": "Board Member",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/02/Photo_Coming_Soon_Board_of_Directors_Photo_Box-Joyce-Myersa.png"
  }
];

const targetDir = path.join(__dirname, 'public', 'images', 'board');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
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
  const updatedData = [];
  console.log(`Downloading ${data.length} board member images...`);
  
  for (const member of data) {
    const fileName = path.basename(new URL(member.imageUrl).pathname);
    const localPath = path.join(targetDir, fileName);
    const relativeUrl = `/images/board/${fileName}`;
    
    console.log(`Downloading: ${fileName}`);
    try {
      await downloadImage(member.imageUrl, localPath);
      console.log(`Successfully downloaded: ${fileName}`);
      
      updatedData.push({
        name: member.name,
        title: member.title,
        image: relativeUrl
      });
    } catch (e) {
      console.error(`Error downloading ${fileName}: ${e.message}`);
    }
  }

  const jsonPath = path.join(targetDir, 'board.json');
  fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2));
  console.log('Finished downloading all board member images and saved board.json');
}

run();
