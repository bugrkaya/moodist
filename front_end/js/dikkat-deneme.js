/*jshint esversion: 6 */
const alphabet = [
  "A",
  "B",
  "C",
  "Ç",
  "D",
  "E",
  "F",
  "G",
  "Ğ",
  "H",
  "I",
  "İ",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "Ö",
  "P",
  "R",
  "S",
  "Ş",
  "T",
  "U",
  "Ü",
  "V",
  "X",
  "Y",
  "Z"
];
let start = 0;
let sTime = 0;
let idx = 0;
let letterTime = 0;
let results = [];
let sequence = [];
let cTimer = new Date();
let images = "";
let idxi = "";
let image = "";
let intervalRng = 0;

function randomLetter() {
  const table = document.getElementById("table1");
  const letter = document.querySelector(".testLetter");
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    table1.classList.remove("hidden");
    letter.classList.remove("hidden");
    sTime = new Date();
  }
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  if (start % 2 == 0) {
    idx = 27;
    letter.innerHTML = "X";
  } else {
    if (idx % 3 == 0) {
      letter.innerHTML = alphabet[idx];
    } else {
      idx = 0;
      letter.innerHTML = "A";
    }
  }
  sequence.push({ index: start, letter: alphabet[idx] });

  intervalRng = Math.floor(Math.random() * 3);

  // 300+500 loop, 300+1000 loop 300+1500 loop
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;

    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 30001) {
        randomLetter();
      } else {
        randomImage();
      }
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;

    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 30001) {
        randomLetter();
      } else {
        randomImage();
      }
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;

    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 30001) {
        randomLetter();
      } else {
        randomImage();
      }
    }, 1800);
  }

}

function randomImage() {
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  if (start % 2 == 0) {
    idx = 27;
    letter.innerHTML = "X";
  } else {
    if (idx % 3 == 0) {
      letter.innerHTML = alphabet[idx];
    } else {
      idx = 0;
      letter.innerHTML = "A";
    }
  }
  sequence.push({ index: start, letter: alphabet[idx] });


  // rng pick place than put image there

  let rng = Math.floor(Math.random() * 8);

  if (rng === 0) {
    images = document.querySelectorAll("#gorselA1");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 1){
    images = document.querySelectorAll("#gorselA2");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 2){
    images = document.querySelectorAll("#gorselA3");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 3){
    images = document.querySelectorAll("#gorselB1");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 4){
    images = document.querySelectorAll("#gorselB3");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 5){
    images = document.querySelectorAll("#gorselC1");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 6){
    images = document.querySelectorAll("#gorselC2");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }else if (rng === 7){
    images = document.querySelectorAll("#gorselC3");
    idxi = Math.floor(Math.random() * images.length);
    image = images[idxi];
  }
  image.classList.remove("hidden");
  start = start + 1;


  // 300+500 loop, 300+1000 loop 300+1500 loop
  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
    }, 400);
    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 60001) {
        randomImage();
      } else {
        randomSound();
      }
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
    }, 400);
    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 60001) {
        randomImage();
      } else {
        randomSound();
      }
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
    }, 400);
    setTimeout(() => {
      if (new Date().getTime() - cTimer.getTime() < 60001) {
        randomImage();
      } else {
        randomSound();
      }
    }, 1800);
  }
}

function randomSound() {
  const sounds = document.querySelectorAll("#sound");
  const idxi2 = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxi2];
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  if (start % 2 == 0) {
    idx = 27;
    letter.innerHTML = "X";
    sound.play();
  } else {
    if (idx % 3 == 0) {
      letter.innerHTML = alphabet[idx];
    } else {
      idx = 0;
      letter.innerHTML = "A";
    }
  }
  sequence.push({ index: start, letter: alphabet[idx] });

  setTimeout(() => {
    letter.innerHTML = "";
  }, 300);
  start = start + 1;
  setTimeout(() => {
    if (start % 2 == 1) {
      sound.pause();
      sound.currentTime = 0;
    }
    if (new Date().getTime() - cTimer.getTime() < 90001) {
    randomSound();
    } else {
      randomFletter();
    }
  }, 1500);
}

function randomFletter() {
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  if (start % 2 == 0) {
    idx = 27;
    letter.innerHTML = "X";
  } else {
    if (idx % 3 == 0) {
      letter.innerHTML = alphabet[idx];
    } else {
      idx = 0;
      letter.innerHTML = "A";
    }
  }
  sequence.push({ index: start, letter: alphabet[idx] });
  start = start + 1;

  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    setTimeout(() => {
        if (new Date().getTime() - cTimer.getTime() < 120001) {
          randomFletter();
        } else {
          const outro = document.querySelector("#outro");
          outro.classList.remove("hidden");
          letter.classList.add("hidden");
          console.log(results);
          console.log(sequence);
        }
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    setTimeout(() => {
        if (new Date().getTime() - cTimer.getTime() < 120001) {
          randomFletter();
        } else {
          const outro = document.querySelector("#outro");
          outro.classList.remove("hidden");
          letter.classList.add("hidden");
          console.log(results);
          console.log(sequence);
        }
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    setTimeout(() => {
        if (new Date().getTime() - cTimer.getTime() < 120001) {
          randomFletter();
        } else {
          const outro = document.querySelector("#outro");
          outro.classList.remove("hidden");
          letter.classList.add("hidden");
          console.log(results);
          console.log(sequence);
        }
    }, 1800);
  }
}

window.addEventListener("keydown", function(e) {
  const spaceTime = new Date();
  const Atime = letterTime.getTime() - sTime.getTime();
  const Stime = spaceTime.getTime() - sTime.getTime();
  console.log(alphabet[idx], Stime - Atime);
  results.push({ letter: alphabet[idx], time: Stime - Atime, start: start });
});
