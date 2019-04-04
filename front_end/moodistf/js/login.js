function logi() {
  const email = document.querySelector("#email").value;
  const pass = document.querySelector("#password").value;
  const credentials = `email=${email}&password=${pass}`;
  //console.log(email, pass);
  fetch("http://localhost:2323/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: credentials
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
      localStorage.clear();
      localStorage.setItem("doctorid", response.id);
      localStorage.setItem("doctorname", response.name);
      window.location = "./patients.html";
    })
    .catch(error => console.error("Error:", error));
}
