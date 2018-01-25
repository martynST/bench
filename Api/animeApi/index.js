import {requestToken} from "./testing.js"

function getToken() {
  console.log(requestToken());
}


window.getToken = getToken;