'use strict'

var express 	= require("express");
var bodyParser 	= require('body-parser');
var nodemailer 	= require('nodemailer');
var pug 		= require('pug');


var config 	= require('./../config/app.js');
var path  	= require('./../config/path.js');

global.vm 	= require("vm");
global.fs 	= require("fs");
global.log 	= require('./logger');

//initialize app variable
global.app 	= express();

exports.init = function(){
	//set Path for all
	path.init();

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({"extended":false}));


	//set the view engine 
	app.set('view engine', config.VIEW_ENGINE);


	//set the models
	require(app.get('models')+'/main').init();

	//set the controller
	require(app.get('controllers')+'/main').init();
	
	//set the router
	require(app.get('routes_root')+'/main').init();
	

	//set static
	app.use(express.static(app.get('public')));

	

	app.listen( config.PORT,config.APP_URL, function(){

		log.e("server","Server is running at port " + config.PORT,function(callback_msg){
			console.log(callback_msg);
		});
	});

	return app;
};


