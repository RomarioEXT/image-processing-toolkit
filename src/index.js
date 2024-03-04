const sharp = require('sharp');

class ImageProcessingToolkit {
  constructor() {
    // Constructor can be used for any setup/configuration
  }

  async resizeImage(inputPath, outputPath, width, height) {
    try {
      await sharp(inputPath)
        .resize(width, height)
        .toFile(outputPath);
      console.log(`Image resized successfully to ${width}x${height}`);
    } catch (error) {
      console.error('Error resizing image:', error);
    }
  }

  async convertImage(inputPath, outputPath, format) {
    try {
      await sharp(inputPath)
        .toFormat(format)
        .toFile(outputPath);
      console.log(`Image converted successfully to ${format.toUpperCase()}`);
    } catch (error) {
      console.error('Error converting image:', error);
    }
  }
}

module.exports = ImageProcessingToolkit;

// Example usage:
// const ImageProcessingToolkit = require('./ImageProcessingToolkit');
// const imageToolkit = new ImageProcessingToolkit();
// imageToolkit.resizeImage('input.jpg', 'output.jpg', 300, 200);
// imageToolkit.convertImage('input.jpg', 'output.png', 'png');
