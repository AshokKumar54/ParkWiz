
/*
 * GET users listing.
 */
var mysql = require('../routes/mysql');
var password = require('password-hash-and-salt');
exports.list = function(req, res){
  res.send("respond with a resource");
};


exports.getuserinfo = function(userid, res) {
	
	var getUser = "select u.firstname, u.lastname, u.email,u.address, u.phoneno, u.counter from user u where u.userid='"
		+ userid + "'";
	console.log("Query is:" + getUser);
	
	//Calling the fetch method using mysql module
	mysql.fetchData(function(err, result) {
		if (err) {
			console.log("Error while fetching login results");
			throw err;
		} else {
			// userinfo
			var userinfo = result[0];
			// TODO: create userinfo from result
			res.send(JSON.stringify(userinfo));
		}
	}, getUser);
	
};

exports.updateuserinfo = function(user, res) {
	
	
			//hashedPwd = hash;
			//Creating the insert query to save signup data to DB
			var update = "update user set firstname = '" + user.firstname+"' , lastname = '" + user.lastname + "' , email = '"+ user.email
					+ "'  , address='"+user.address+"',phoneno='"+user.phoneno
					+ "' where userid =" + user.userid ;
			console.log("Query is:" + update);
			mysql.insertData(function(err,results) {
				if (err) {
					console.log("Error while updating db");
					res.send({"update":"Unable to save!!!Try again!!"});
				}
				else{
					res.send({"Update":"Success"});
				}
			}, update);
		
	
	
};