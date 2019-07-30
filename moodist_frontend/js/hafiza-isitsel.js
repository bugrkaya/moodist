 /*jshint esversion: 6 */
let start = 0;
let sTime = 0;
let eTime = 0;
let pTime = 0;
let currentStep = 0;
let step = 0;
let fs = 0;
let inputNums = [];
let hata = 0;
let randomArray = [];
let lastLit = 0;
let images = [];
let pointAct = [];
let pointNot = 2;

function isitselTest() {
  step = start + 2;
  images = document.querySelectorAll("#clickcheck");
  pointAct = document.querySelectorAll("#cCheckPoint");
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    // letter.classList.remove("hidden");

  }
  randomArrayGenerator();
  showDigits();
}

function endTest() {
  const pad = document.querySelector(".pad");
  const outro = document.querySelector("#outro");
  pad.classList.add("hidden");
  outro.classList.remove("hidden");
  console.log(start + 1);
  const did = localStorage.getItem("doctorid");
  const pid = localStorage.getItem("patientid");
  const fres = start + 1;
  const credentials = {result: fres, tur: 'isitsel'};

  //console.log(email, pass);
   fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/hafiza`, {
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

function showDigits() {

if (start < 8) {
  step = start + 2;
  if (currentStep < step) {
    setTimeout(() => {
      const sound = document.querySelector(
        `#sound${randomArray[currentStep]}`
      );
      sound.play();
      currentStep = currentStep + 1;
      showDigits();
    }, 1500);
  } else {
    setTimeout(() => {
      currentStep = 0;
      sTime = new Date();
      showPad();
    }, 1000);
  }
} else {
  endTest();
}

}

function inputDigit(e) {


  const pad = document.querySelector(".pad");
  const letter = document.querySelector(".testLetter");
  const errorMsg = document.querySelector(".errorMsg");
  const clickedPad = document.querySelector(`.p${e}`);
  clickedPad.classList.replace("padnumber", "padnumberactive");
  setTimeout(() => {
    clickedPad.classList.replace("padnumberactive", "padnumber");
  }, 100);
  inputNums.push(e);
  litCheck();

  setTimeout(() => {
  if (start === 8) {
    //test bitti
    litClear();
    endTest();
  } else {
    if (inputNums.length < start + 2) {
      //take more input
    } else {
      if (JSON.stringify(inputNums) != JSON.stringify(randomArray)) {
        //hatali
        if (hata == 1) {
          //2 kere hatali girdi, testi bitir
          litClear();
          endTest();
        } else {
          pad.classList.add("hidden");
          litClear();
          errorMsg.classList.remove("hidden");
          hata = hata + 1;
          setTimeout(() => {
            errorMsg.classList.add("hidden");
            inputNums = [];
            randomArrayGenerator();
            //show next series of numbers
            showDigits();
          }, 2000);
        }
      } else {
        //butun input dogru
          litClear();
          start = start + 1;
          pointUp();
          hata = 0;

          console.log("Time taken in this step: " + (new Date().getTime() - sTime - 1100));

        inputNums = [];
        randomArrayGenerator();
        // show next series of numbers
        pad.classList.add("hidden");
        // letter.classList.remove("hidden");
        showDigits();
      }
    }
  }},100);
}

function showPad() {
  setTimeout(() => {
    const letter = document.querySelector(".testLetter");
    letter.classList.add("hidden");
    const pad = document.querySelector(".pad");
    pad.classList.remove("hidden");
    letter.innerHTML = "";
  }, 1000);
}

function randomArrayGenerator(){
	if (start < 8) {
		randomArray = [];
		while (randomArray.length < start + 2) {
			let rakam = Math.floor(Math.random() * 9)+1;
			if (rakam != randomArray[randomArray.length - 1]) {
				randomArray.push(rakam);
			}
		}
		console.log(randomArray);
	} else {
		endTest();
	}
}

function litCheck(){
  images[lastLit].style.fill = "green";
  lastLit++;
}
function litClear(){
  for(let i = 0; i < lastLit;i++){
    images[i].style.fill = "white";
  }
  lastLit = 0;
}
function pointUp(){
  pointAct[pointNot].classList.remove("hidden");
  pointNot++;
}
