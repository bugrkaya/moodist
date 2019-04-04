let start = 0;
let sTime = 0;
let imageTime = 0;
let idxi = 0;
let sequence = [];
let results = [];
function randomImage() {
  if (start === 0) {
    const intro = document.querySelector("#intro");
    intro.classList.add("hidden");
    sTime = new Date();
  }
  const star = document.querySelector("#star");
  const stari = Math.floor(Math.random() * 100);
  const images = document.querySelectorAll(".image");
  idxi = Math.floor(Math.random() * images.length);
  start = start + 1;
  image = images[idxi];
  imageTime = new Date();
  image.classList.remove("hidden");
  if (stari % 3 === 0) {
    star.classList.remove("hidden");
  }
  sequence.push({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0]
  });
  setTimeout(() => {
    image.classList.add("hidden");
    star.classList.add("hidden");
  }, 100);
  setTimeout(() => {
    if (start !== 50) {
      randomImage();
    } else {
      const outro = document.querySelector("#outro");
      outro.classList.remove("hidden");
      console.log(sequence);
      console.log(results);
    }
  }, 600);
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
