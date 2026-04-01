const fs = require('fs');
const https = require('https');
const path = require('path');

const data = [
  {
    "name": "John Fairman",
    "title": "CEO",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/09/John_Fairman_CEO_Southwest_Region_Executive_Team_Photo_Box.png"
  },
  {
    "name": "Neuaviska Braugher",
    "title": "Executive Deputy CEO",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/NStidhum1a.png"
  },
  {
    "name": "Dr. Marketta Blue",
    "title": "Chief Medical Officer",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Marketta_Blue_MD_Chief_Medical_Officer_Executive_Team_Photo_Box-1.png"
  },
  {
    "name": "Myrtis Small",
    "title": "Director of Human Resources & Credentialing",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Myrtis_Small_Human_Resources_and_Credentialing_Director_Officer_Team_Photo_Box.png"
  },
  {
    "name": "L. Don Cole, CPA, CIA",
    "title": "Interim Chief Financial Officer",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/CFO_DonCole1a-1.png"
  },
  {
    "name": "Robin Boyles",
    "title": "Chief Program Planning & Development Officer",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Robin_Boyles_Chief_Program_Planning_and_Development_Officer_Team_Photo_Box.png"
  },
  {
    "name": "Alyssa Simmons",
    "title": "Associate Deputy CEO, FNP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/05/asimmons.png"
  },
  {
    "name": "Amanda LACAZE",
    "title": "Chief Of Policy and Strategy",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/Amanda-1a.png"
  },
  {
    "name": "Dr. Inge FORD",
    "title": "DMD Doctor of Medicine in Dentistry",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/DrFord1-1.png"
  },
  {
    "name": "Stephanie Goss",
    "title": "Director of Nursing",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2024/12/Stephanie_goss_566x525.png"
  },
  {
    "name": "Davis Hayes, Jr.",
    "title": "IT Director",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2024/12/Dhayes_566x525.png"
  },
  {
    "name": "Heather M. Miles",
    "title": "Chief Financial Officer - Revenue Cycle Services",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2024/12/Heather-Miles3.png"
  },
  {
    "name": "Cajanique OLLIE",
    "title": "Director Of Registration",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/CHodges1a-1.png"
  }
];

const targetDir = path.join(__dirname, 'public', 'images', 'executives');

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
  console.log(`Downloading ${data.length} executive images...`);
  
  for (const exec of data) {
    const fileName = path.basename(new URL(exec.imageUrl).pathname);
    const localPath = path.join(targetDir, fileName);
    const relativeUrl = `/images/executives/${fileName}`;
    
    console.log(`Downloading: ${fileName}`);
    try {
      await downloadImage(exec.imageUrl, localPath);
      console.log(`Successfully downloaded: ${fileName}`);
      
      updatedData.push({
        name: exec.name,
        title: exec.title,
        image: relativeUrl
      });
    } catch (e) {
      console.error(`Error downloading ${fileName}: ${e.message}`);
    }
  }

  const jsonPath = path.join(targetDir, 'executives.json');
  fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2));
  console.log('Finished downloading all executive images and saved executives.json');
}

run();
