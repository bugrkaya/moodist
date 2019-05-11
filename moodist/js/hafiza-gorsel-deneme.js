/*jshint esversion: 6 */
let start = 0;
let sTime = 0;
let currentStep = 0;
let step = 0;
let fs = 0;
let inputNums = [];
let hata = 0;
let randomArray = [];
let lastLit = 0;
let images = [];

function gorselTest() {
  const letter = document.querySelector(".testLetter");
  images = document.querySelectorAll("#clickcheck");
  step = start + 2;
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    letter.classList.remove("hidden");
    sTime = new Date();
  }
  randomArrayGenerator();
  showDigits(letter);
}

function endTest() {
  const pad = document.querySelector(".pad");
  const outro = document.querySelector("#outro");
  pad.classList.add("hidden");
  outro.classList.remove("hidden");
}

function showDigits(letter) {
  if(start != 2){
  	if (currentStep < 3) {
    setTimeout(() => {
      letter.innerHTML = randomArray[currentStep];
      currentStep = currentStep + 1;
      showDigits(letter);
    }, 1000);
  } else {
    setTimeout(() => {
      currentStep = 0;
      showPad();
    }, 1000);
  }
}else {
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
  if (start == 2) {
    //test bitti
    litClear();
    endTest();
  } else {
    if (inputNums.length < 3) {
      //take more input
    } else {
      if (JSON.stringify(inputNums) !=  JSON.stringify(randomArray)) {
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
            letter.classList.remove("hidden");
            showDigits(letter);
          }, 2000);
        }
      } else {
        //butun input dogru
          litClear();
          start = start + 1;
          fs = 0;
          hata = 0;

        inputNums = [];
        randomArrayGenerator();
        //show next series of numbers
        pad.classList.add("hidden");
        letter.classList.remove("hidden");
        showDigits(letter);
      }
    }
  }},100);
}

function showPad() {
  const letter = document.querySelector(".testLetter");
  letter.classList.add("hidden");
  const pad = document.querySelector(".pad");
  pad.classList.remove("hidden");
  letter.innerHTML = "";
}
function randomArrayGenerator(){
  if(start != 2){
		randomArray = [];
		while (randomArray.length < 3) {
			let rakam = Math.floor(Math.random() * 9)+1;
			if (rakam != randomArray[randomArray.length - 1]) {
				randomArray.push(rakam);
			}
		}
		console.log(randomArray);
  }else{
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
