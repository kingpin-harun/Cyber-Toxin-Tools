(function () {
  var js = "window['__CF$cv$params']={r:'84732c1148b00255',t:'MTcwNTU0MjQ3MC4yNTUwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";
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

function getBinInfo() {
  var binsInput = document.getElementById('binInput').value;
  var binsArray = binsInput.split(',');

  // Construct the API URL for each bin
  var promises = binsArray.map(bin => {
    var url = "bin-api.php?bin=" + bin.trim();
    return fetch(url).then(response => response.json());
  });

  // Handle all promises
  Promise.all(promises)
    .then(dataArray => {
      // Display each BIN's information in a separate box
      var outputHtml = dataArray.map((data, index) => {
        return '<div class="binOutput">' +
          '<div class="binTitle">BIN Information for ' + binsArray[index].trim() + '</div>' +
          '<div class="binInfo">Status: ' + data.Status + '</div>' +
          '<div class="binInfo">Scheme: ' + data.Scheme + '</div>' +
          '<div class="binInfo">Type: ' + data.Type + '</div>' +
          '<div class="binInfo">Issuer: ' + data.Issuer + '</div>' +
          '<div class="binInfo">CardTier: ' + data.CardTier + '</div>' +
          '<div class="binInfoCountry">Country: ' + data.Country.Name + '</div>' +
          '<div class="binInfoLuhn">Luhn: ' + (data.Luhn ? 'true' : 'false') + '</div>' +
          '<pre>' + JSON.stringify(data, null, 2) + '</pre></div>';

      }).join('');

      document.getElementById('output').innerHTML = outputHtml;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.getElementById('output').innerHTML = 'Error fetching data. Please check the console for details.';
    });
}