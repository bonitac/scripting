var getHTML = require('../https-functions');
//print_uppercase.js : Transforms the html string into ALL CAPS and prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  html = html.toUpperCase();
  console.log(html)
}

getHTML(requestOptions, printUpperCase);