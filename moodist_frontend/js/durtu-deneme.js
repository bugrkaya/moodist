/*jshint esversion: 6 */
let start = 0;
let sTime = 0;
let imageTime = 0;
let idxi = 0;
let sequence = [];
let results = [];
const star = document.querySelector("#star");
const images = document.querySelectorAll(".image");
let rng = Math.floor(Math.random() * 4);

function randomImage() {
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    sTime = new Date();
  }

  idxi = Math.floor(Math.random() * images.length);
  start = start + 1;
  image = images[idxi];
  imageTime = new Date();



  rng = Math.floor(Math.random() * 4);

  if (rng == 0) {
    star.classList.add("putUR");
  }else if (rng == 1){
    star.classList.add("putUL");
  }else if (rng == 2){
    star.classList.add("putDL");
  }else if (rng == 3){
    star.classList.add("putDR");
  }


  sequence.push({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0]
  });

  let rng1 = Math.floor(Math.random() * 3);

  if (rng1 == 0) { // 150ms önce
    star.classList.remove("hidden");
    setTimeout(() => {
      star.classList.add("hidden");
      if (rng == 0) {
        star.classList.remove("putUR");
      }else if (rng == 1){
        star.classList.remove("putUL");
      }else if (rng == 2){
        star.classList.remove("putDL");
      }else if (rng == 3){
        star.classList.remove("putDR");
      }
    }, 600);

    setTimeout(() => {
      image.classList.remove("hidden");

      setTimeout(() => {
        image.classList.add("hidden");
      }, 600);
    }, 150);
  }else if (rng1 == 1){// 150ms sonra
    image.classList.remove("hidden");

    setTimeout(() => {
      image.classList.add("hidden");
    }, 600);

    setTimeout(() => {
      star.classList.remove("hidden");
      setTimeout(() => {
        star.classList.add("hidden");
        if (rng == 0) {
          star.classList.remove("putUR");
        }else if (rng == 1){
          star.classList.remove("putUL");
        }else if (rng == 2){
          star.classList.remove("putDL");
        }else if (rng == 3){
          star.classList.remove("putDR");
        }
      }, 600);
    }, 150);
  }else if (rng1 == 2){// Aynı
    image.classList.remove("hidden");
    star.classList.remove("hidden");
    setTimeout(() => {
      image.classList.add("hidden");
      star.classList.add("hidden");
      if (rng == 0) {
        star.classList.remove("putUR");
      }else if (rng == 1){
        star.classList.remove("putUL");
      }else if (rng == 2){
        star.classList.remove("putDL");
      }else if (rng == 3){
        star.classList.remove("putDR");
      }
    }, 600);
  }


  setTimeout(() => {
    if (start !== 50) {
      randomImage();
    } else {
      const outro = document.querySelector("#outro");
      outro.classList.remove("hidden");
      console.log(sequence);
      console.log(results);
    }
  }, 1200);
}
window.addEventListener("keydown", function(e) {
  const spaceTime = new Date();
  const images = document.querySelectorAll(".image");
  const image = images[idxi];
  const color = image.children[0];
  const colorm = color.getAttribute("fill");
  const Atime = imageTime.getTime() - sTime.getTime();
  const Stime = spaceTime.getTime() - sTime.getTime();
  results.push({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0],
    time: Stime - Atime,
    key: e.key
  });
  console.log({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0],
    time: Stime - Atime,
    key: e.key
  });
});
