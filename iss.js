var fs = require('fs'); 
var request = require('request'); 
var iss_url = "http://api.open-notify.org/iss-now.json" ;

request(iss_url, function(err, location, body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        
        var parseBody = JSON.parse(body) ;
        console.log("The latitutude of ISS is currentyly: " + parseBody.iss_position.latitude.toFixed(2));
        console.log("The longitude of ISS is currently: " + parseBody.iss_position.longitude.toFixed(2))
    }
});