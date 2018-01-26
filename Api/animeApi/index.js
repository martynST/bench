import { requestToken, getAnimeSearch, getAnime } from "./animeApi.js"

const shows = [18679, 9253, 97986, 136];

async function getToken() {
  await requestToken();  
  addShowsToTable();
}

async function search() {
  let animeName = document.getElementById('animeName').value;
  let searchResults = await getAnimeSearch(animeName);

  let searchTable = "<table><tr><th>title</th><th>status</th><th>episodes</th></tr>";
  for (let i = 0; i < searchResults.length; i++) {
    searchTable += `<tr id='${searchResults[i].id}' onclick='addToList(${searchResults[i].id})'><td>${searchResults[i].title_english}</td><td>${searchResults[i].airing_status}</td><td>${searchResults[i].duration}</td></tr>`;
  }
  searchTable += "</table>";

  document.getElementById('searchResults').innerHTML = "<hr>" + searchTable;
}

async function addShowsToTable() {
  let showData = await getAnime(shows);


  for (let i = 0; i < shows.length; i++) {
    addOneToTable(showData[i]);
  }
}

async function addToList(id) {
  shows.push(id);  
  document.getElementById('searchResults').innerHTML = "";  
  let showDetails = await getAnime([id])
  addOneToTable(showDetails[0]);
}

function addOneToTable(animeShow) {

  let table = document.getElementById("showsTable");
  let row, cellTitle, cellStatus, cellEpisodes;
  row = table.insertRow(table.rows.length);

  cellTitle = row.insertCell(0);
  cellStatus = row.insertCell(1);
  cellEpisodes = row.insertCell(2);

  cellTitle.innerHTML = animeShow.title;
  cellStatus.innerHTML = animeShow.status;
  cellEpisodes.innerHTML = animeShow.episodes;

}

window.getToken = getToken;
window.search = search;
window.addShowsToTable = addShowsToTable;
window.addToList = addToList;