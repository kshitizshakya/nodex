// set the model path for

var modelPath = {
'user':'UserModel'
};

module.exports.init = function(){

	let dirPath = app.get('models');

	for(let val in modelPath ){
  		vm.runInThisContext(fs.readFileSync(dirPath+'/'+modelPath[val]+'.js'));
	}
	
	//TODO : must return response of status  
};


