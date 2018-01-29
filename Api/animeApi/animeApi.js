const apiUrl = "https://anilist.co/api";
const apiSearch = "https://anilist.co/api/anime/search"
const apiAnime = "https://anilist.co/api/anime"

let data = {};

export async function requestToken() {

  let promise = fetch("https://anilist.co/api/auth/access_token?grant_type=client_credentials&client_id=martynt-sfop8&client_secret=LJd4O13TQZeBZi79Gb05", {
    method: "POST"
  });

  let result = await promise;
  let promise2 = result.json();
  data = await promise2;
  return data;
}

export async function getAnimeSearch(animeName) {
  let promise = fetch(`${apiSearch}/${animeName}`, {
    method: "GET",
    "headers": {
      Authorization: `${data.token_type} ${data.access_token}`
    }
  })

  let result = await promise;
  let promise2 = result.json();
  let result2 = await promise2;  
  return result2;
}

export async function getAnime(ids) {
  let promise = [];
  for (let i = 0; i < ids.length; i++) {
    promise.push(fetch(`${apiAnime}/${ids[i]}`, {
      method: "GET",
      "headers": {
        Authorization: `${data.token_type} ${data.access_token}`
      }
    }))
  }

  let result = await Promise.all(promise);
  let promise2 = [];
  for (let i = 0; i < ids.length; i++) {
    promise2.push(
      result[i].json()
    );
  }

  let result2 = await Promise.all(promise2);


  let anime = []
  for (let i = 0; i < ids.length; i++) {
    anime[i] = {
      id: `${result2[i].id}`,
      title: `${result2[i].title_english}`,
      status: `${result2[i].airing_status}`,
      episodes: `${result2[i].duration}`
    }
  }
  return anime
}