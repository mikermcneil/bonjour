// Get actual sails constructor
var Sails = require('sails/lib/app');
var request = require('request');


var ourSails = new Sails();

// for unit tests
// ourSails.load(function (err) {
// 	ourSails.emit('request',  {

// 	});
// });

// for integration tests
ourSails.lift({
	port: 1338
}, function(err) {
	ourSails.log('OK we made it this far', err);

	request('/test/login?username=mike&password=bonjour', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			return allDone(error);
		}

		// TODO: actually test that the body is what we expect
		console.log(body);

		return allDone();
	});
	
	function allDone(err) {
		ourSails.lower(function(err) {
			ourSails.log('killed sails');
		});
		
	}


});



// before(function () {

// })

// it ('should work for the /test/login route', function () {
// 	request('/test/login', function(error, response, body) {
// 		if (!error && response.statusCode == 200) {
			
// 		}
// 	});
// })