import { getShowDetails } from "./animeApi.js";

function addShow()
{
    let showName = document.getElementById("animeName").value;
    getShowDetails(showName);
}

window.addShow = addShow;