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
function randomLetter() {
  const letter = document.querySelector(".testLetter");
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
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

  setTimeout(() => {
    letter.innerHTML = "";
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start !== 18) {
      randomLetter();
    } else {
      randomImage();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
    }
  }, 1500);
}

function randomImage() {
  const images = document.querySelectorAll("#gorsel");
  const idxi = Math.floor(Math.random() * images.length);
  const image = images[idxi];
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

  image.classList.remove("hidden");
  setTimeout(() => {
    letter.innerHTML = "";
    image.classList.add("hidden");
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start !== 36) {
      randomImage();
    } else {
      randomSound();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
    }
  }, 1500);
}

function randomSound() {
  const sounds = document.querySelectorAll("#sound");
  const idxi = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxi];
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
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start % 2 == 1) {
      sound.pause();
      sound.currentTime = 0;
    }
    if (start !== 54) {
      randomSound();
    } else {
      randomFletter();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
      //console.log(results);
      //console.log(sequence);
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

  setTimeout(() => {
    letter.innerHTML = "";
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start !== 72) {
      randomFletter();
    } else {
      const outro = document.querySelector("#outro");
      outro.classList.remove("hidden");
      letter.classList.add("hidden");
      console.log(results);
      console.log(sequence);
    }
  }, 1500);
}

window.addEventListener("keydown", function(e) {
  const spaceTime = new Date();
  const Atime = letterTime.getTime() - sTime.getTime();
  const Stime = spaceTime.getTime() - sTime.getTime();
  console.log(alphabet[idx], Stime - Atime);
  results.push({ letter: alphabet[idx], time: Stime - Atime, start: start });
});
