var mysql = require('./mysql');

exports.trafficupdate = function() {	
	var updatetraffic = "update traffic count set count = count + 1";
	console.log("Query is:" + updatetraffic);

	// Calling the fetch method using mysql module
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error while updating traffic logs");
		} else {
			console.log("success");
		}
	}, updatetraffic);

};