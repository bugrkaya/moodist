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
    if (start !== 70) {
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
    if (start !== 140) {
      randomImage();
    } else {
      randomImage2();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
    }
  }, 1500);
}

function randomImage2() {
  const images = document.querySelectorAll("#gorsel");
  const idxi = Math.floor(Math.random() * images.length);
  const image = images[idxi];
  const idxi2 = Math.floor(Math.random() * images.length);
  const image2 = images[idxi2];
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
  image2.classList.remove("hidden");
  setTimeout(() => {
    letter.innerHTML = "";
    image.classList.add("hidden");
    image2.classList.add("hidden");
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start !== 210) {
      randomImage2();
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
    if (start !== 246) {
      randomSound();
    } else {
      randomSound2();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
      //console.log(results);
      //console.log(sequence);
    }
  }, 1500);
}

function randomSound2() {
  const sounds = document.querySelectorAll("#sound");
  const idxi = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxi];
  const idxi2 = Math.floor(Math.random() * sounds.length);
  const sound2 = sounds[idxi2];
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  if (start % 2 == 0) {
    idx = 27;
    letter.innerHTML = "X";
    sound.play();
    sound2.play();
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
      sound2.pause();
      sound2.currentTime = 0;
    }
    if (start !== 316) {
      randomSound2();
    } else {
      multimodal();
      //const outro = document.querySelector("#outro");
      //outro.classList.remove("hidden");
      //letter.classList.add("hidden");
      //console.log(results);
      //console.log(sequence);
    }
  }, 1500);
}

function multimodal() {
  const sounds = document.querySelectorAll("#sound");
  const idxi = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxi];
  const images = document.querySelectorAll("#gorsel");
  const idxim = Math.floor(Math.random() * images.length);
  const image = images[idxim];
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
  image.classList.remove("hidden");
  setTimeout(() => {
    letter.innerHTML = "";
    image.classList.add("hidden");
  }, 200);
  start = start + 1;
  setTimeout(() => {
    if (start % 2 == 1) {
      sound.pause();
      sound.currentTime = 0;
    }
    if (start !== 386) {
      multimodal();
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
    if (start !== 456) {
      randomFletter();
    } else {
      const outro = document.querySelector("#outro");
      outro.classList.remove("hidden");
      letter.classList.add("hidden");
      console.log(results);
      console.log(sequence);
      const did = localStorage.getItem("doctorid");
      const pid = localStorage.getItem("patientid");
      const fres = JSON.stringify(results);
      const fseq = JSON.stringify(sequence);
      const credentials = `results=${fres}&sequence=${fseq}`;

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/dikkat`, {
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
  }, 1500);
}

window.addEventListener("keydown", function(e) {
  const spaceTime = new Date();
  const Atime = letterTime.getTime() - sTime.getTime();
  const Stime = spaceTime.getTime() - sTime.getTime();
  console.log(alphabet[idx], Stime - Atime);
  results.push({ letter: alphabet[idx], time: Stime - Atime, index: start });
});
