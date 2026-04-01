const fs = require('fs');
const https = require('https');
const path = require('path');

const data = [
  {
    "name": "Dr. Marketta Blue",
    "title": "Chief Medical Officer, Board Certified | Family Medicine",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Marketta_Blue_MD_Chief_Medical_Officer_Provider_Team_Photo_Box-1.png"
  },
  {
    "name": "Dr. Simone Moore",
    "title": "MD Pediatrics, Board Certified",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/09/Simone_Moore_MD_Pediatrics_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Dr. George Stevens",
    "title": "DO Family Medicine, Board Certified",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/Dr.Stevens2.png"
  },
  {
    "name": "Dr. Braveen Ragunanthan",
    "title": "M.D., MPH, & Fellow of the American Academy of Pediatrics (FAAP), Board Certified Pediatrician",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Braveen_Ragunanthan_M.D_Provider_Team_Photo_Box-1.png"
  },
  {
    "name": "Dr. Dominick Trinca",
    "title": "MD Family Medicine",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Dominic_Trinca_MD_Family_Medicine_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Dr. Frank Brown",
    "title": "MD Family Medicine",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/Frank_Brown_21s.png"
  },
  {
    "name": "Dr. Nadia Bethley",
    "title": "PhD Clinical Psychology",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2024/11/drbethely_base1.png"
  },
  {
    "name": "Dr. Inge Ford",
    "title": "DMD Doctor of Medicine in Dentistry",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/fotrd1.png"
  },
  {
    "name": "Dr. Lauren Adams",
    "title": "PhD.",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/05/LaurenAdams2.png"
  },
  {
    "name": "Alyssa Simmons",
    "title": "FNP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Alyssa_Simmons_FNP_Family_Nurse_Practitioner_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Felicia Norris White",
    "title": "NP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Felicia_White_FNP_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Sherrica Smith",
    "title": "PMHNP-BC, FNP-C",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Sherrica_Smith_DNP_FNP-C_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Barbara Williams",
    "title": "FNP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/05/Bwilliams_website_pic2.png"
  },
  {
    "name": "Jennifer Kurts",
    "title": "FNP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/Jennifer_Kurts_FNP_Family_Nurse_Practitioner_Provider_Team_Photo_Box.png"
  },
  {
    "name": "Valerie Antici",
    "title": "FNP-BC",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/Valeri-Antici-1.png"
  },
  {
    "name": "Queeneice Ganison",
    "title": "NP",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/05/QuieneseGannison1.png"
  },
  {
    "name": "Tara Davis",
    "title": "FNP-Pediatrics",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/TaraDavis-FNP1ab-2.png"
  },
  {
    "name": "Wyconda Thomas",
    "title": "PMHNP-C",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2026/03/Wyconda-Thomas1.png"
  },
  {
    "name": "Mary Bolden",
    "title": "FNP-BC",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2025/12/MaryBolden-FNP1ab-3aa.png"
  },
  {
    "name": "Megan Mccoy",
    "title": "PA",
    "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2024/11/provider_image1_base_MeganMccoy3.png"
  }
];

const targetDir = path.join(__dirname, 'public', 'images', 'providers');

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
      // If it fails with ECONNRESET, we might need a workaround, but let's try standard download first
      fs.unlink(filename, () => reject(err));
    });
  });
}

async function run() {
  const updatedData = [];
  console.log(`Downloading ${data.length} images...`);
  
  for (const provider of data) {
    const fileName = path.basename(new URL(provider.imageUrl).pathname);
    const localPath = path.join(targetDir, fileName);
    const relativeUrl = `/images/providers/${fileName}`;
    
    console.log(`Downloading: ${fileName}`);
    try {
      await downloadImage(provider.imageUrl, localPath);
      console.log(`Successfully downloaded ${fileName}`);
      
      updatedData.push({
        name: provider.name,
        title: provider.title,
        image: relativeUrl
      });
    } catch (e) {
      console.error(`Error downloading ${fileName}: ${e.message}`);
    }
  }

  const jsonPath = path.join(targetDir, 'providers.json');
  fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2));
  console.log('Finished downloading all images and saved providers.json');
}

run();
