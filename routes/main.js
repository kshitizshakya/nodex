/*import route folder*/
var routes = {
	'web' : '/web.js',
	'api' : '/api.js'
};

module.exports.init = function(){

	let dirPath = app.get('routes_root');

	for(let val in routes ){
  		vm.runInThisContext(fs.readFileSync(dirPath+routes[val]));
	}
	
};



