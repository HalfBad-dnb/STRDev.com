const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'src/assets');

async function convertToWebP() {
  try {
    // Read all files in the assets directory
    const files = await fs.readdir(assetsDir);
    
    // Filter for image files
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });

    // Convert each image to WebP
    for (const file of imageFiles) {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(
        assetsDir,
        `${path.basename(file, path.extname(file))}.webp`
      );

      console.log(`Converting ${file} to WebP...`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`✅ Successfully converted ${file} to WebP`);
      } catch (error) {
        console.error(`❌ Error converting ${file}:`, error.message);
      }
    }
  } catch (error) {
    console.error('Error reading assets directory:', error);
  }
}

// Run the conversion
convertToWebP();
