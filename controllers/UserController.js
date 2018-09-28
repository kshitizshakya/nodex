//UserController.js

var UserController= {

	'getlist' : function (req,res){
		res.write('inside UserController');
		res.end();
	},
	
	'getfriend':function(req,res){
		res.render('index');

	}


};

