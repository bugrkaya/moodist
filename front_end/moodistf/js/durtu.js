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
    if (start !== 100) {
      randomImage();
    } else {
      const outro = document.querySelector("#outro");
      outro.classList.remove("hidden");
      console.log(sequence);
      console.log(results);
      const did = localStorage.getItem("doctorid");
      const pid = localStorage.getItem("patientid");
      const fres = JSON.stringify(results);
      const fseq = JSON.stringify(sequence);
      const credentials = `results=${fres}&sequence=${fseq}`;

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/durtu`, {
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
