/* Set the config for the application. 
*
*/
var config = {};


//Specify the Application environment 
let app_env = 'dev';

config = {

	'production':{
		'APP_NAME':" Live web",
		'APP_URL':"localhost",
		'PORT':'8000',
		'VIEW_ENGINE' : 'pug'
	},
	'dev':{
		'APP_NAME':" dev web",
		'APP_URL':"localhost",
		'PORT':'3000',
		'VIEW_ENGINE' : 'pug'
	}

};

module.exports = config[app_env];

