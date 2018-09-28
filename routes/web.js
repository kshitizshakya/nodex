

//set the routes for the web page



app.get('/user', UserController.getlist);
app.get('/user/friend', UserController.getfriend);

