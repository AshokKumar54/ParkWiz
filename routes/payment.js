var mysql = require('./mysql');

exports.getpaymenthistory = function(req,res, userid) {		
	var getrecords = "select paymentid, name, billingaddress, creditcard from payment where userid = "+userid+";";
	console.log("Query is:" + getrecords);

	// Calling the fetch method using mysql module
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error while updating traffic logs");
		} else {
			if (results.length > 0) {
				res.json(results);
			}
		}
	}, getrecords);

};

exports.updatepaymenthistory = function(req,res, paymentid, name, address, card) {		
	var getrecords = "Update payment set name = '" + name + "', billingaddress = '" + address + "', creditcard = '" + card + "' where paymentid = "+paymentid+";";
	console.log("Query is:" + getrecords);

	// Calling the fetch method using mysql module
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error while updating traffic logs");
		} else {
			res.json("Payment updated successfully.");
		}
	}, getrecords);

};


exports.deletepaymenthistory = function(req,res, paymentid) {		
	var getrecords = "Delete from payment where paymentid = " + paymentid + ";";
	console.log("Query is:" + getrecords);

	// Calling the fetch method using mysql module
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error while updating traffic logs");
		} else {
			res.json(results);
		}
	}, getrecords);

};