//used in solution where custom libraries are separated from with third party libraries
console.log('file online: [root] -> entry-libraries.js');

/****************************************************
 * Add Third-Party style libraries Here
 * **************************************************/
//can use require here, but not in entry.js bc the the CSS libraries will render b4 custom code in combined file.
require('../node_modules/font-awesome/scss/font-awesome.scss');

/****************************************************
 * Add Third-Party JS libraries Here
 * **************************************************/
require('../node_modules/jquery/src/jquery.js');





