const apiUrl = "https://anilist.co/api/";
import {requestToken} from "./testing.js"

export function getToken() {
  return requestToken()
}

/*
function token() {
  const request = new Request(apiUrl+"/auth/authorize",{
    method: "POST",

  })
}

async function getDets(showName){
    let promise = new Promise((resolve, reject) => {
        fetch(`${pokemonURL}/${id}`);
    });

    let result = await promise;

    console.log("result");
}

var data = null;

var http = new XMLHttpRequest();
http.withCredentials = true;

http.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

http.open("POST", "https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=martynt-sfop8&client_secret=LJd4O13TQZeBZi79Gb05");
http.setRequestHeader("Cache-Control", "no-cache");
http.setRequestHeader("Postman-Token", "85e63f8f-cbff-7c4a-c26a-cd464dd4191c");

http.send(data);


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

/*
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

POST /api/auth/access_token?grant_type=client_credentials&amp;client_id=martynt-sfop8&amp;client_secret=LJd4O13TQZeBZi79Gb05 HTTP/1.1
Host: anilist.co
Cache-Control: no-cache
Postman-Token: e9d6b8f1-7f79-6898-937f-7b40b90812ca*/