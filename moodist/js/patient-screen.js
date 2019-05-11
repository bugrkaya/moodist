/*jshint esversion: 6 */
const did = localStorage.getItem("doctorid");
const pid = localStorage.getItem("patientid");

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
