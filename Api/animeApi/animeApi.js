const apiUrl = "";

let onSuccess = (response) => {
  return response.json();
};
let onError = (error) => {
  console.log(error);
};

async function getToken() {
  let request = fetch("https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=martynt-sfop8&client_secret=LJd4O13TQZeBZi79Gb05", {
    method: "POST",
    qs:
      {

      },
    headers:
      {

      }
  });

  let result = await request;
  let promise = result.json();
  let data = await promise;
  console.log(data);
  return data;
}

export function requestToken() {
  console.log(getToken());
}