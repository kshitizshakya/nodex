module.exports = {

	'd': function(tag,msg,callback){
		console.debug(tag + " : "  + msg);
		},
	'e': function(tag,msg,callback){
		console.error(tag + " : "  + msg);
		callback("callback msg");
		},

};