import {requestToken} from "./animeApi.js"

function getToken() {
  console.log(requestToken());
}


window.getToken = getToken;