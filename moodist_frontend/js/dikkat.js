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
let letterTime = new Date();
let results = [];
let sequence = [];
let images = "";
let idxi = "";
let image = "";
let images2 = "";
let idxi2 = "";
let image2 = "";
let intervalRng = 0;

// Testin süreleri burdan değiştirilebilir (Hangi bölümün hangi loopta biteceği)
const step1 = 77; // Sadece harf
const step2 = 154; // Sadece resim
const step3 = 231; // İki resim
const step4 = 308; // Sadece ses
const step5 = 385; // iki ses
const step6 = 462; // Ses + resim
const step7 = 500; // Sadece harf part 2

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

  // 300+500 loop, 300+1000 loop 300+1500 loop
  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step1) {
        randomLetter();
      } else {
        randomImage();
        //const outro = document.querySelector("#outro");
        //outro.classList.remove("hidden");
        //letter.classList.add("hidden");
      }
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step1) {
        randomLetter();
      } else {
        randomImage();
        //const outro = document.querySelector("#outro");
        //outro.classList.remove("hidden");
        //letter.classList.add("hidden");
      }
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step1) {
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
  idxi = Math.floor(Math.random() * 5);

  if (rng === 0) {
    images = document.querySelectorAll("#gorselA1");
    image = images[idxi];
  }else if (rng === 1){
    images = document.querySelectorAll("#gorselA2");
    image = images[idxi];
  }else if (rng === 2){
    images = document.querySelectorAll("#gorselA3");
    image = images[idxi];
  }else if (rng === 3){
    images = document.querySelectorAll("#gorselB1");
    image = images[idxi];
  }else if (rng === 4){
    images = document.querySelectorAll("#gorselB3");
    image = images[idxi];
  }else if (rng === 5){
    images = document.querySelectorAll("#gorselC1");
    image = images[idxi];
  }else if (rng === 6){
    images = document.querySelectorAll("#gorselC2");
    image = images[idxi];
  }else if (rng === 7){
    images = document.querySelectorAll("#gorselC3");
    image = images[idxi];
  }
  image.classList.remove("hidden");
  let path = image.src;

  // 300+500 loop, 300+1000 loop 300+1500 loop
  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
      image.src = path;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step2) {
        randomImage();
      } else {
        randomImage2();
      }
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
      image.src = path;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step2) {
        randomImage();
      } else {
        randomImage2();
      }
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
      image.src = path;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step2) {
        randomImage();
      } else {
        randomImage2();
      }
    }, 1800);
  }
}

function randomImage2() {
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

  idxi = Math.floor(Math.random() * 5);

  if (rng === 0) {
    images = document.querySelectorAll("#gorselA1");
    image = images[idxi];
  }else if (rng === 1){
    images = document.querySelectorAll("#gorselA2");
    image = images[idxi];
  }else if (rng === 2){
    images = document.querySelectorAll("#gorselA3");
    image = images[idxi];
  }else if (rng === 3){
    images = document.querySelectorAll("#gorselB1");
    image = images[idxi];
  }else if (rng === 4){
    images = document.querySelectorAll("#gorselB3");
    image = images[idxi];
  }else if (rng === 5){
    images = document.querySelectorAll("#gorselC1");
    image = images[idxi];
  }else if (rng === 6){
    images = document.querySelectorAll("#gorselC2");
    image = images[idxi];
  }else if (rng === 7){
    images = document.querySelectorAll("#gorselC3");
    image = images[idxi];
  }
  image.classList.remove("hidden");

  let path = image.src;

// ikinci buraya

  let rng2 = 0;
  rng2 = Math.floor(Math.random() * 8);
  while (rng == rng2){
    rng2 = Math.floor(Math.random() * 8);
  }

  idxi2 = Math.floor(Math.random() * 5);
  while(idxi == idxi2){
    idxi2 = Math.floor(Math.random() * 5);
  }

  if (rng2 === 0) {
    images2 = document.querySelectorAll("#gorselA1");

    image2 = images2[idxi2];
  }else if (rng2 === 1){
    images2 = document.querySelectorAll("#gorselA2");
    image2 = images2[idxi2];
  }else if (rng2 === 2){
    images2 = document.querySelectorAll("#gorselA3");
    image2 = images2[idxi2];
  }else if (rng2 === 3){
    images2 = document.querySelectorAll("#gorselB1");
    image2 = images2[idxi2];
  }else if (rng2 === 4){
    images2 = document.querySelectorAll("#gorselB3");
    image2 = images2[idxi2];
  }else if (rng2 === 5){
    images2 = document.querySelectorAll("#gorselC1");
    image2 = images2[idxi2];
  }else if (rng2 === 6){
    images2 = document.querySelectorAll("#gorselC2");
    image2 = images2[idxi2];
  }else if (rng2 === 7){
    images2 = document.querySelectorAll("#gorselC3");
    image2 = images2[idxi2];
  }

  let path2 = image2.src;
  image.classList.remove("hidden");
  image2.classList.remove("hidden");

  // 300+500 loop, 300+1000 loop 300+1500 loop
  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);

    setTimeout(() => {
      image.classList.add("hidden");
      image2.classList.add("hidden");
      image.src = path;
      image2.src = path2;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step3) {
        randomImage2();
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
      image2.classList.add("hidden");
      image.src = path;
      image2.src = path2;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step3) {
        randomImage2();
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
      image2.classList.add("hidden");
      image.src = path;
      image2.src = path2;
    }, 400);

    start = start + 1;
    setTimeout(() => {
      if (start !== step3) {
        randomImage2();
      } else {
        randomSound();
      }
    }, 1800);
  }
}

function randomSound() {
  const sounds = document.querySelectorAll("#sound");
  const idxi = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxi];
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  sound.play();
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
  }, 300);
  start = start + 1;
  setTimeout(() => {

      sound.pause();
      sound.currentTime = 0;

    if (start !== step4) {
      randomSound();
    } else {
      randomSound2();
    }
  }, 1750);
}

function randomSound2() {
  const mixS = document.querySelectorAll("#mixS");
  const idxi = Math.floor(Math.random() * mixS.length);
  const sound = mixS[idxi];
  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  sound.play();
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
  }, 300);
  start = start + 1;
  setTimeout(() => {
      sound.pause();
      sound.currentTime = 0;

    if (start !== step5) {
      randomSound2();
    } else {
      multimodal();
    }
  }, 1000);
}

function multimodal() {
  const sounds = document.querySelectorAll("#sound");
  const idxim = Math.floor(Math.random() * sounds.length);
  const sound = sounds[idxim];

  const letter = document.querySelector(".testLetter");
  idx = Math.floor(Math.random() * 30);
  letterTime = new Date();
  sound.play();
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

  // rng pick place than put image there

  let rng = Math.floor(Math.random() * 8);

  if (rng === 0) {
    images = document.querySelectorAll("#gorselA1");
    image = images[idxim];
  }else if (rng === 1){
    images = document.querySelectorAll("#gorselA2");
    image = images[idxim];
  }else if (rng === 2){
    images = document.querySelectorAll("#gorselA3");
    image = images[idxim];
  }else if (rng === 3){
    images = document.querySelectorAll("#gorselB1");
    image = images[idxim];
  }else if (rng === 4){
    images = document.querySelectorAll("#gorselB3");
    image = images[idxim];
  }else if (rng === 5){
    images = document.querySelectorAll("#gorselC1");
    image = images[idxim];
  }else if (rng === 6){
    images = document.querySelectorAll("#gorselC2");
    image = images[idxim];
  }else if (rng === 7){
    images = document.querySelectorAll("#gorselC3");
    image = images[idxim];
  }
  let path = image.src;

  sequence.push({ index: start, letter: alphabet[idx] });
  image.classList.remove("hidden");
  setTimeout(() => {
    letter.innerHTML = "";
    image.classList.add("hidden");
    image.src = path;
  }, 300);
  start = start + 1;
  setTimeout(() => {

      sound.pause();
      sound.currentTime = 0;

    if (start !== step6) {
      multimodal();
    } else {
      randomFletter();
    }
  }, 1600);
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


  // 300+500 loop, 300+1000 loop 300+1500 loop
  intervalRng = Math.floor(Math.random() * 3);
  if (intervalRng === 0) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step7) {
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
      const credentials = {results: results, sequence: sequence};

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/dikkat`, {
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
    }, 800);
  } else if (intervalRng === 1) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step7) {
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
      const credentials = {results: results, sequence: sequence};

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/dikkat`, {
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
    }, 1300);
  } else if (intervalRng === 2) {
    setTimeout(() => {
      letter.innerHTML = "";
    }, 300);
    start = start + 1;
    setTimeout(() => {
      if (start !== step7) {
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
      const credentials = {results: results, sequence: sequence};

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/dikkat`, {
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
    }, 1800);
  }
}

window.addEventListener("keydown", function(e) {
  const spaceTime = new Date();
  const Atime = letterTime.getTime() - sTime.getTime();
  const Stime = spaceTime.getTime() - sTime.getTime();
  console.log(alphabet[idx], Stime - Atime);
  results.push({ letter: alphabet[idx], time: Stime - Atime, index: start });
    console.log(results);
    console.log(sequence);
});
