("use strict");

function createRow(id, url) {
  const tr = document.createElement("tr");
  const td_id = document.createElement("td");
  td_id.appendChild(document.createTextNode(id));

  const td_url = document.createElement("td");
  td_url.appendChild(document.createTextNode(url));

  const td_img = document.createElement("td");

  const img = document.createElement("img");
  img.src = url;
  td_img.appendChild(img);

  tr.appendChild(td_id);
  tr.appendChild(td_url);
  tr.appendChild(td_img);
  tableBody.appendChild(tr);
}

const app = document.getElementById("app");
const tableBody = document.querySelector("tbody");

// Fetch and process dog data function
function fetchAndProcessDogData() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then((response) => response.json())
    .then(processDogData)
    .catch((error) => console.error("Error fetching dog data:", error));
}
createRow(1, "https://images.dog.ceo/breeds/maltese/n02085936_3391.jpg");

// Process dog data and create row function
function processDogData(data) {
  createRow(data.id, data.message);
}

// Fetch and process dog data every 5 seconds
setInterval(fetchAndProcessDogData, 5000);
