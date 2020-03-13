require('webpack-jquery-ui');
var test = require('webpack-jquery-ui/css');  //ommit, if you don't want to load basic css theme
require('../css/index.css');

$( "#projects" ).accordion();
