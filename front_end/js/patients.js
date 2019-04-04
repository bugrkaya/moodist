const did = localStorage.getItem("doctorid");

// const credentials = `email=${email}&password=${pass}`;

const col = document.querySelector(".collection");

fetch(`http://localhost:2323/doctor/${did}/patients`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(response => {
    console.log("Success:", JSON.stringify(response));
    // localStorage.setItem("doctorid", response.id);
    response.forEach(element => {
      const hastadiv = document.createElement("li");
      hastadiv.classList.add("collection-item");
      const hast = `
      <div><a href="#!" onclick="tpet(${element.id})">${element.name}</a>
        <a href="#!" onclick="delpet(${
          element.id
        })" class="secondary-content"><i class="material-icons">delete</i></a>
      </div>`;
      hastadiv.innerHTML = hast;
      col.appendChild(hastadiv);
    });
  })
  .catch(error => console.error("Error:", error));

function tpet(pid) {
  localStorage.setItem("patientid", pid);
  window.location = "./index.html";
}

function logout() {
  localStorage.clear();
  window.location = "./login.html";
}

function delpet(pid) {
  fetch(`http://localhost:2323/doctor/${did}/patient/${pid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
      location.reload();
    })
    .catch(error => console.error("Error:", error));
}

function hekle() {
  const hisim = document.querySelector("#text_inline").value;
  const hh = `name=${hisim}`;

  fetch(`http://localhost:2323/doctor/${did}/patient`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: hh
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
      // localStorage.setItem("doctorid", response.id);
      location.reload();
    })
    .catch(error => console.error("Error:", error));
}
