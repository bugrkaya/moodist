uyaranlar = [
  [[9, 6], [4, 2]],
  [[1, 4, 6], [4, 3, 7]],
  [[5, 2, 1, 7], [9, 5, 6, 4]],
  [[1, 9, 7, 8, 5], [8, 3, 9, 1, 5]],
  [[3, 5, 6, 8, 9, 1], [5, 9, 3, 8, 7, 4]],
  [[2, 4, 1, 5, 3, 6, 4], [9, 5, 3, 1, 2, 8, 4]],
  [[7, 3, 5, 4, 2, 1, 8, 6], [2, 3, 6, 1, 5, 7, 8, 9]],
  [[4, 7, 2, 6, 8, 3, 5, 9, 1], [7, 9, 2, 5, 1, 4, 8, 6, 3]]
];
let start = 0;
let sTime = 0;
let currentStep = 0;
let step = 0;
let fs = 0;
let inputNums = [];
let hata = 0;

function gorselTest() {
  step = uyaranlar[start].length;
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    // letter.classList.remove("hidden");
    sTime = new Date();
  }
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
  const credentials = `results=${fres}`;

  //console.log(email, pass);
  fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/hafiza`, {
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

function showDigits() {
  step = uyaranlar[start][0].length;
  if (currentStep < step) {
    setTimeout(() => {
      const sound = document.querySelector(
        `#sound${uyaranlar[start][fs][currentStep]}`
      );
      sound.play();
      // letter.innerHTML = uyaranlar[start][fs][currentStep];

      currentStep = currentStep + 1;
      showDigits();
    }, 1000);
  } else {
    setTimeout(() => {
      currentStep = 0;
      showPad();
    }, 1000);
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
  if (start === 8) {
    //test bitti
    endTest();
  } else {
    if (inputNums.length < uyaranlar[start][fs].length) {
      //take more input
    } else {
      if (JSON.stringify(inputNums) != JSON.stringify(uyaranlar[start][fs])) {
        //hatali
        if (hata == 1) {
          //2 kere hatali girdi, testi bitir
          endTest();
        } else {
          errorMsg.classList.remove("hidden");
          setTimeout(() => {
            errorMsg.classList.add("hidden");
          }, 1000);
          inputNums = [];
          //show next series of numbers
          pad.classList.add("hidden");
          // letter.classList.remove("hidden");
          fs = fs + 1;
          showDigits();
        }
        hata = hata + 1;
      } else {
        //butun input dogru
        if (fs === 1) {
          start = start + 1;
          fs = 0;
          hata = 0;
        } else {
          start = start + 1;
          fs = 0;
          hata = 0;
        }
        inputNums = [];
        // show next series of numbers
        pad.classList.add("hidden");
        // letter.classList.remove("hidden");
        showDigits();
      }
    }
  }
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
