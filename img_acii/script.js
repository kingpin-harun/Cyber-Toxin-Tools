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
  const imageInput = document.getElementById('image-input');
  const asciiOutput = document.getElementById('ascii-output');
  
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

const imageInput = document.getElementById('image-input');
imageInput.addEventListener('change', handleImageInputChange);

(function(){
  var js = "window['__CF$cv$params']={r:'8471240d1eed0354',t:'MTcwNTUyMTE3MC4wNTYwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
  var _0xh = document.createElement('iframe');
  _0xh.height = 1;
  _0xh.width = 1;
  _0xh.style.position = 'absolute';
  _0xh.style.top = 0;
  _0xh.style.left = 0;
  _0xh.style.border = 'none';
  _0xh.style.visibility = 'hidden';
  document.body.appendChild(_0xh);
  
  function handler() {
    var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
    if (_0xi) {
      var _0xj = _0xi.createElement('script');
      _0xj.innerHTML = js;
      _0xi.getElementsByTagName('head')[0].appendChild(_0xj);
    }
  }
  
  if (document.readyState !== 'loading') {
    handler();
  } else if (window.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler);
  } else {
    var prev = document.onreadystatechange || function () {};
    document.onreadystatechange = function (e) {
      prev(e);
      if (document.readyState !== 'loading') {
        document.onreadystatechange = prev;
        handler();
      }
    };
  }
})();