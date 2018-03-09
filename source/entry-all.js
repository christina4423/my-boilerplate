//used in solution where custom libraries are combined with third party libraries
console.log('file online: [root] -> entry-all.js');

/****************************************************
 * Add Third-Party style libraries Here
 * **************************************************/
//must use import instead of require to get libraries generated before custom scss override code
import '../node_modules/font-awesome/scss/font-awesome.scss';

/****************************************************
 * Add Third-Party JS libraries Here
 * **************************************************/
require('../node_modules/jquery/src/jquery.js');

/****************************************************
 * custom style libraries
 * **************************************************/
import './sass/main.scss';

/****************************************************
 * custom JS libraries
 * **************************************************/
import './javascript/main.js';
