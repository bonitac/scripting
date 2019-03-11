var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
  var ret = ''
  https.get(options, function (response) {
    response.setEncoding('utf8'); // set encoding of received data to UTF-8
    response.on('data', function (data) { // the callback is invoked when a `data` chunk is received
      ret += callback(data);
    });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
      return ret;
    });
  });  
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions,printHTML);