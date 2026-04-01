const fs = require('fs');
const https = require('https');
const path = require('path');

const data = {
  "name": "John A. Fairman",
  "title": "Chief Executive Officer",
  "imageUrl": "https://www.deltahealthcenter.org/wp-content/uploads/2023/08/John_Fairman_CEO_Inside_Page_Body_Photo.png",
  "biography": "John A. Fairman, a native of Cleveland, Mississippi, was appointed Chief Executive Officer of Delta Health Center, Inc. in 2009. With over 44 years of solid managerial experience in community-based primary care delivery, managed care, integrated delivery systems, teaching hospitals and consulting, Mr. Fairman is committed to making quality healthcare accessible to all patients in need.\n\nDuring his fourteen (14) years tenure at Delta Health Center, Mr. Fairman has expanded healthcare services and created nine (9) additional sites in the impoverished Mississippi Delta. Delta Health Center now has facilities in Mound Bayou • Cleveland • Greenville • Hollandale • Moorhead • Indianola • Rolling Fork • and Mayersville, MS.\n\nDelta Health Center serves medically under-served counties of Bolivar • Sunflower • Washington, Issaquena & Sharkey. In 2013, Delta Health Center was awarded a five-million dollar grant from the U.S. Department of Health and Human Services to construct the new Dr. H. Jack Geiger Medical Center, a 26,000 square feet, state-of-the-art health care facility in Mound Bayou. Dental services have been expanded to Hollandale, located in lower Washington County, and also serving Sharkey and Issaquena counties.\n\nThe new facility is named in honor of Dr. H. Jack Geiger, a Principal Founder of Delta Health Center. Despite the declining population in the Mississippi Delta, the number of patients served by Delta Health Center continues to grow. These and other accomplishments can be attributed to his demonstrated ability in building and maintaining relationships within communities and other stakeholders, overseeing and improving finances, and his understanding and implementation of strategic operational procedures."
};

const targetDir = path.join(__dirname, 'public', 'images', 'ceo');

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
  console.log(`Downloading CEO image...`);
  
  const fileName = path.basename(new URL(data.imageUrl).pathname);
  const localPath = path.join(targetDir, fileName);
  const relativeUrl = `/images/ceo/${fileName}`;
  
  console.log(`Downloading: ${fileName}`);
  try {
    await downloadImage(data.imageUrl, localPath);
    console.log(`Successfully downloaded: ${fileName}`);
    
    // Update data with relative image URL
    data.image = relativeUrl;
    delete data.imageUrl;
    
    const jsonPath = path.join(targetDir, 'ceo.json');
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    console.log('Finished downloading CEO image and saved ceo.json');
  } catch (e) {
    console.error(`Error downloading ${fileName}: ${e.message}`);
  }
}

run();
