//UserController.js

var UserController= {

	'getlist' : function (req,res){
		console.log("abc", UserModel.getUser());
		res.write(UserModel.getUser());
		res.end();
	},
	
	'getfriend':function(req,res){
		res.render('index');

	}


};

