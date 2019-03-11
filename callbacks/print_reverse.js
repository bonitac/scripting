var getHTML = require('../https-functions');
//print_reverse.js : Reverses the html string and then prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  var htmlArray = html.split('');
  console.log( htmlArray.reverse().join(''));
}

getHTML(requestOptions, printReverse);