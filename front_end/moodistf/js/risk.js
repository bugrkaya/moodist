let start = 0;
let radius = 10;
let raund = 0;
let clicks = 0;
let total = 0;
let results = [];
let colori = Math.floor(Math.random() * 3);
let maxClick = Math.floor(Math.random() * 16 * Math.pow(2, colori + 1));
let isBlowed = false;
const allColors = ["red", "yellow", "blue"];
let pickedColor = allColors[colori];
let circle = `<svg class="image" height="600" width="600">
  <circle
  cx="300"
  cy="300"
  r="${radius}"
  stroke="black"
  stroke-width="2"
  fill="${pickedColor}"
  />
  </svg>`;

const cp = document.querySelector(".cp");
const td = document.querySelector(".testDigit");
const lb = document.querySelector(".lastBalon");
const intro = document.querySelector("#intro");
const balon = document.querySelector("#balon");
const outro = document.querySelector("#outro");
cp.innerHTML = circle;

function startTest() {
  intro.classList.add("hidden");
  balon.classList.remove("hidden");
}

function endTest() {
  balon.classList.add("hidden");
  outro.classList.remove("hidden");
  console.log(results);
  const did = localStorage.getItem("doctorid");
  const pid = localStorage.getItem("patientid");
  const fres = JSON.stringify(results);
  const credentials = `results=${fres}`;

  //console.log(email, pass);
  fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/risk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: credentials
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
    })
    .catch(error => console.error("Error:", error));
}

function increaseSize() {
  clicks = clicks + 1;
  if (clicks > maxClick) {
    isBlowed = true;
    console.log(raund);
    raund = 0;
    collect();
  }
  radius = radius + 2;
  raund = raund + 5;
  circle = `<svg class="image" height="600" width="600">
  <circle
  cx="300"
  cy="300"
  r="${radius}"
  stroke="black"
  stroke-width="2"
  fill="${pickedColor}"
  />
  </svg>`;
  cp.innerHTML = circle;
}

function collect() {
  start = start + 1;
  if (start > 99) {
    endTest();
  }
  radius = 10;
  total = total + raund;
  results.push({
    clicks: clicks,
    color: pickedColor,
    limit: maxClick,
    blowed: isBlowed,
    earning: raund
  });

  colori = Math.floor(Math.random() * 3);
  maxClick = Math.floor(Math.random() * 16 * Math.pow(2, colori + 1));
  pickedColor = allColors[colori];
  isBlowed = false;
  lb.innerHTML = raund;
  raund = 0;
  circle = `<svg class="image" height="600" width="600">
  <circle
  cx="300"
  cy="300"
  r="${radius}"
  stroke="black"
  stroke-width="2"
  fill="${pickedColor}"
  />
  </svg>`;
  cp.innerHTML = circle;
  td.innerHTML = total;
  clicks = 0;
}
