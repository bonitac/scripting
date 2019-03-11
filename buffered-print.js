var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  
  var printedHTML = ''
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8'); // set encoding of received data to UTF-8
    response.on('data', function (data) { // the callback is invoked when a `data` chunk is received
      printedHTML += data;
    });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
      console.log(printedHTML);
    });
  });

}
getAndPrintHTML () 