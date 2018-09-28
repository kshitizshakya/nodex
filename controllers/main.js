/*import controller */
var controllerPath = {

	//controllername :controllerPathName
	'user':'UserController'
};

module.exports.init = function(){

	let dirPath = app.get('controllers');

	for(let val in controllerPath ){
  		vm.runInThisContext(fs.readFileSync(dirPath+'/'+controllerPath[val]+'.js'));
	}
	
	//TODO : must return response of status  
};

