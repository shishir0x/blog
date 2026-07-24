import sharp from 'sharp';
import fs from 'fs';

async function processImage() {
  try {
    const inputBuffer = fs.readFileSync('./public/favicon.ico');
    
    // Invert the colors (black becomes white) without affecting transparency
    await sharp(inputBuffer)
      .negate({ alpha: false }) 
      .toFile('./public/favicon-white.png');
      
    console.log("Image processed successfully");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

processImage();
