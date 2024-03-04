# Image Processing Toolkit

A simple JavaScript package for image processing tasks such as resizing and converting images.

## Installation

You can install the package via npm:

```bash
npm install image-processing-toolkit
```

## Usage

```javascript
const ImageProcessingToolkit = require('image-processing-toolkit');
const imageToolkit = new ImageProcessingToolkit();

// Resize image
imageToolkit.resizeImage('input.jpg', 'output.jpg', 300, 200);

// Convert image format
imageToolkit.convertImage('input.jpg', 'output.png', 'png');
```

## API

### `resizeImage(inputPath, outputPath, width, height)`

Resize the image located at `inputPath` to the specified `width` and `height` and save it to `outputPath`.

- `inputPath` (string): Path to the input image file.
- `outputPath` (string): Path to save the resized image.
- `width` (number): Width of the resized image.
- `height` (number): Height of the resized image.

### `convertImage(inputPath, outputPath, format)`

Convert the image located at `inputPath` to the specified `format` and save it to `outputPath`.

- `inputPath` (string): Path to the input image file.
- `outputPath` (string): Path to save the converted image.
- `format` (string): Desired output format (e.g., 'jpeg', 'png', 'webp').

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
