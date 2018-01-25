
export function requestToken() {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
    });

    xhr.open("POST", "https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=martynt-sfop8&client_secret=LJd4O13TQZeBZi79Gb05");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "61204269-8fbc-eb57-5838-514fcb9da383");

    xhr.send(data);

    
}
