//set the routes for the web page

//get parameter 
app.get('/', function(req,res){

	res.write('Hello test /');
	res.end();

});

app.get('/test',function(req,res){
	res.write('Hello test');
	res.end();
});

