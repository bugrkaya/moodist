/*jshint esversion: 6 */
let start = 0;
let raund = 0;
let clicks = 0;
let total = 0;
let results = [];
let colori = 2;
let maxClick = Math.floor(Math.random() * 128) + 15;
let isBlowed = false;
const allColors = ["red", "yellow", "blue"];
let pickedColor = 0;
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
  const sound = document.getElementById("sound");
  if (clicks > maxClick) {
    isBlowed = true;
    document.getElementById("pumpBtn").classList.add("hidden");
    sound.play();

    if (allColors[colori] == "blue") {
      document.getElementById("gorselBalon").src="images/bluePop.JPG";
    } else if (allColors[colori] == "yellow"){
      document.getElementById("gorselBalon").src="images/yellowPop.JPG";
    } else{
      document.getElementById("gorselBalon").src="images/redPop.JPG";
    }
    raund = 0;
    console.log(raund);
    lb.innerHTML = raund;
    setTimeout(()=>{
      collect();
    },1000);
  }

  radius = radius + 1;
  raund = raund + 5;
  lb.innerHTML = raund;
  document.getElementById("gorselBalon").width= 50+radius+"";
}

function collect() {
  start = start + 1;
  if (start > 14) {
    endTest();
  }
  radius = 0;
  if (isBlowed) {

  } else {
    total = total + raund;
  }

  pickedColor = allColors[colori];
  results.push({
    clicks: clicks,
    color: pickedColor,
    limit: maxClick,
    blowed: isBlowed,
    earning: raund
  });

  isBlowed = false;

  raund = 0;
  lb.innerHTML = raund;
  colori = Math.floor(Math.random() * 3);
  pickedColor = allColors[colori];
  changeImage(pickedColor);


  td.innerHTML = total;
  clicks = 0;
  document.getElementById("pumpBtn").classList.remove("hidden");
}
