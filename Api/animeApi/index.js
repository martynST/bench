import { requestToken, getAnimeSearch, getAnime } from "./animeApi.js"

let shows;

async function startFunction() {
  await requestToken();
  await readAnimeFile();

  addShowsToTable();
  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement.id === "animeName") {
      search();
    }
  });
}

async function readAnimeFile() {
  let promise = fetch("http://localhost:3000/file/read", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  });

  let result = await promise;

  let promise2 = result.json();
  let result2 = await promise2;

  shows = result2.split(",").map((n) => parseInt(n));
}

function writeAnimeFile() {
  const request = new Request("http://localhost:3000/file/write", {
    method: "POST",
    url: 'http://localhost:3000/file/write',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shows)
  })

  fetch(request)
}

async function search() {
  let animeName = document.getElementById('animeName').value;
  document.getElementById('animeName').value = "";
  let searchResults = await getAnimeSearch(animeName);

  let searchTable = "<table><tr><th>Title</th><th>Status</th><th>Episodes</th></tr>";
  for (let i = 0; i < searchResults.length; i++) {
    searchTable += `<tr id='${searchResults[i].id}' onclick='addToList(${searchResults[i].id})'><td>${searchResults[i].title_english}</td><td>${searchResults[i].airing_status}</td><td>${searchResults[i].duration}</td></tr>`;
  }
  searchTable += "</table>";

  let cancelBtn = "<input type='button' id = 'cancel' value = 'Cancel' onClick='cancel()'>";

  document.getElementById('searchResults').innerHTML = "<hr>" + searchTable + "<br>" + cancelBtn;
}

function cancel() {
  document.getElementById('searchResults').innerHTML = "";
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

window.startFunction = startFunction;
window.search = search;
window.addShowsToTable = addShowsToTable;
window.addToList = addToList;
window.cancel = cancel;
window.saveList = writeAnimeFile;
