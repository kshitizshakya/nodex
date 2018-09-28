'use strict'
const path = require('path');

const paths = {

'views'  	  	: path.resolve(__dirname,'../views'),
'models' 	  	: path.resolve(__dirname,'../models'),
'controllers' 	: path.resolve(__dirname,'../controllers'),
'routes_root' 	: path.resolve(__dirname,'../routes'),
'lib' 			: path.resolve(__dirname,'../lib'),
'public' 		: path.resolve(__dirname,'../public'),

};

exports.init = function(){

	for(let val in paths){
		app.set(val,paths[val]);
	}	
};


