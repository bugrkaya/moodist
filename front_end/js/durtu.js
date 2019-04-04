/*jshint esversion: 6 */
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
  const images = document.querySelectorAll(".image");
  idxi = Math.floor(Math.random() * images.length);
  start = start + 1;
  image = images[idxi];
  imageTime = new Date();
  image.classList.remove("hidden");

  const rng = Math.floor(Math.random() * 4);

  if (rng == 0) {
    star.classList.add("putUR");
  }else if (rng == 1){
    star.classList.add("putUL");
  }else if (rng == 2){
    star.classList.add("putDL");
  }else if (rng == 3){
    star.classList.add("putDR");
  }
  star.classList.remove("hidden");
  
  sequence.push({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0]
  });
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
  }, 400);
  setTimeout(() => {
    if (start !== 500) {
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
      const credentials = {results: results, sequence: sequence};

      //console.log(email, pass);
      fetch(`http://localhost:2323/doctor/${did}/patient/${pid}/durtu`, {
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
  }, 1000);
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
    shape: image.children[0].nodeName,
    time: Stime - Atime,
    key: e.key
  });
  console.log({
    index: start,
    color: image.children[0].getAttribute("fill"),
    shape: image.children[0].nodeName,
    time: Stime - Atime,
    key: e.key
  });
});
