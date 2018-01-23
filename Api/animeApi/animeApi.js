let request = require('request');
let apiUrl = "https://anilist.co/api/";

export function getShowDetails(showName) {        
    
    /*getDets(showName).then(function () {
            return null;
        }
    );*/
}

async function getDets(showName){
    let promise = new Promise((resolve, reject) => {
        fetch(`${pokemonURL}/${id}`);
    });

    let result = await promise;

    console.log("result");
}
/*
var http = require("https");

var options = {
  "method": "POST",
  "hostname": [
    "anilist",
    "co"
  ],
  "path": [
    "api",
    "auth",
    "access_token"
  ],
  "headers": {
    "Cache-Control": "no-cache",
    "Postman-Token": "7fe49e77-15b5-9487-ec87-56749aebf337"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();


var request = require("request");

var options = { method: 'POST',
  url: 'https://anilist.co/api/auth/access_token',
  qs: 
   { grant_type: 'client_credentials',
     client_id: 'martynt-sfop8',
     client_secret: 'LJd4O13TQZeBZi79Gb05' },
  headers: 
   { 'Postman-Token': '03535782-a934-4653-5bdb-7b55978505d2',
     'Cache-Control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
*/