var getHTML = require('../https-functions');
//print_lowercase.js : The exact opposite of the former - transforms the html string into poetic lowercase and prints it to the console.

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  html = html.toLowerCase();
  console.log(html)

}

getHTML(requestOptions, printLowerCase);