// set the model path for

var modelPath = {
'user':'user'
};

module.exports.init = function(){

	let dirPath = app.get('models');

	for(let val in controllerPath ){
  		vm.runInThisContext(fs.readFileSync(dirPath+'/'+modelPath[val]+'.js'));
	}
	
	//TODO : must return response of status  
};


