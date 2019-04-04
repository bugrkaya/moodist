/*jshint esversion: 6 */
let start = 0;
let raund = 0;
let clicks = 0;
let total = 0;
let results = [];
let colori = Math.floor(Math.random() * 3);
let maxClick = Math.floor(Math.random() * 128) + 15;
let isBlowed = false;
const allColors = ["red", "yellow", "blue"];
let pickedColor = allColors[colori];
let radius = 0;
let sound = 0;

function changeImage() {
  setTimeout(()=>{
    document.getElementById("gorselBalon").width= 50+"";
    if (allColors[colori] == "blue") {
      document.getElementById("gorselBalon").src="images/blue.jpg";
      maxClick = Math.floor(Math.random() * 128) + 15;
    } else if (allColors[colori] == "yellow"){
      document.getElementById("gorselBalon").src="images/yellow.jpg";
      maxClick = Math.floor(Math.random() * 64) + 15;
    } else{
      document.getElementById("gorselBalon").src="images/red.jpg";
      maxClick = Math.floor(Math.random() * 16) + 15;
    }
  },400);
}

const td = document.querySelector(".testDigit");
const lb = document.querySelector(".lastBalon");
const intro = document.querySelector("#intro");
const balon = document.querySelector("#balon");
const outro = document.querySelector("#outro");

function startTest() {
  sound = document.querySelector("sound");
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

  radius = radius + 1;
  raund = raund + 5;
  document.getElementById("gorselBalon").width= 50+radius+"";
}

function collect() {
  if (isBlowed) {
    const sound = document.getElementById("sound");
    sound.play();
    if (colori == 2) {
      document.getElementById("gorselBalon").src="images/bluePop.jpg";
    } else if (colori == 1){
      document.getElementById("gorselBalon").src="images/yellowPop.jpg";
    } else{
      document.getElementById("gorselBalon").src="images/redPop.jpg";
    }
  }
  start = start + 1;
  if (start > 14) {
    endTest();
  }
  radius = 0;
  total = total + raund;
  results.push({
    clicks: clicks,
    color: allColors[colori],
    limit: maxClick,
    blowed: isBlowed,
    earning: raund
  });

  colori = Math.floor(Math.random() * 3);
  pickedColor = allColors[colori];
  isBlowed = false;
  lb.innerHTML = raund;
  raund = 0;


  changeImage(pickedColor);
  td.innerHTML = total;
  clicks = 0;
}
