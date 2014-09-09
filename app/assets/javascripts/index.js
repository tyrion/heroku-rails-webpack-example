// local 'hello' CommonJS module
var hello = require('hello');

// jquery installed with bower
var $ = require('jquery');

// react installed with npm
var React = require('react');


console.log("Hello:", hello);
console.log("jQuery version:", $.fn.jquery);
console.log("React version:", React.version);
