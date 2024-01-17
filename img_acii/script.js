document.addEventListener('DOMContentLoaded', function () {
  const imageInput = document.getElementById('image-input');
  const asciiOutput = document.getElementById('ascii-output');
  const copyBtn = document.getElementById('copy-btn');

  const asciiChars = [' ', '.', ':', '-', '=', '+', '*', '#', '%', '@'];

  const convertImageToAscii = (imageData, width, height) => {
    const fontHeight = 8;
    const fontWidth = 4;
    const maxLines = Math.floor(height / fontHeight);
    const maxCharsPerLine = Math.floor(width / fontWidth);
    const asciiString = [];

    for (let y = 0; y < maxLines; y++) {
      const line = [];
      for (let x = 0; x < maxCharsPerLine; x++) {
        const pixel = imageData[((y * fontHeight) * width + (x * fontWidth)) * 4];
        const asciiIndex = Math.round(pixel / 25.5);
        const asciiChar = asciiChars[asciiIndex];
        line.push(asciiChar);
      }
      asciiString.push(line.join(''));
    }

    return asciiString.join('\n');
  };

  const handleImageInputChange = () => {
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          const context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          const imageData = context.getImageData(0, 0, image.width, image.height).data;
          const asciiString = convertImageToAscii(imageData, image.width, image.height);
          const fontHeight = 8;
          const fontWidth = 4;
          const maxLines = Math.floor(image.height / fontHeight);
          const fontSize = Math.floor(400 / maxLines);
          const lineHeight = fontSize * (fontHeight / fontWidth);
          asciiOutput.style.fontSize = `${fontSize}px`;
          asciiOutput.style.lineHeight = `${lineHeight}px`;
          asciiOutput.textContent = asciiString;
        };
        image.src = event.target.result;
      };
      reader.readAsDataURL(imageInput.files[0]);
    }
  };

  const copyAsciiToClipboard = () => {
    const textArea = document.createElement('textarea');
    textArea.value = asciiOutput.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('ASCII art copied to clipboard!');
  };

  imageInput.addEventListener('change', handleImageInputChange);
  copyBtn.addEventListener('click', copyAsciiToClipboard);
});
