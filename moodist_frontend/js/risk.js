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

// ne kadar süreceği burdan değiştirilebilir
const step1 = 30; //Rastgele balon kısmı
const step2 = 50; //Mavi balon kısmı
const step3 = 70; //Sarı balon kısmı
const step4 = 90; //Kırmızı balon kısmı



function changeImage() {
  setTimeout(()=>{
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
    document.getElementById("gorselBalon").width= 50+"";
  },400);
}

const td = document.querySelector(".testDigit");
const lb = document.querySelector(".lastBalon");
const intro = document.querySelector("#intro");
const balon = document.querySelector("#balon");
const outro = document.querySelector("#outro");

function startTest() {
  const sound = document.querySelector("sound");
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
  const credentials = {results: results};

  //console.log(email, pass);
  fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/risk`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
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
      document.getElementById("gorselBalon").src="images/bluePop.jpg";
    } else if (allColors[colori] == "yellow"){
      document.getElementById("gorselBalon").src="images/yellowPop.jpg";
    } else{
      document.getElementById("gorselBalon").src="images/redPop.jpg";
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
  if (start > step4) {
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

  if (start < step1) {
    colori = Math.floor(Math.random() * 3);
    pickedColor = allColors[colori];
    changeImage(pickedColor);
  } else if(start < step2){
    colori = 2;
    changeImage(pickedColor);
  }else if(start < step3){
    pickedColor ="yellow";
    colori = 1;
    changeImage(pickedColor);
  }else if(start < step4){
    colori = 0;
    pickedColor ="red";
    changeImage(pickedColor);
  }

  td.innerHTML = total;
  clicks = 0;
  document.getElementById("pumpBtn").classList.remove("hidden");
}
