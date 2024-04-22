let nom = document.querySelector("input#nom");
let prenom = document.querySelector("input#prenom");
let email = document.querySelector("input#email");
let age = document.querySelector("input#age");
let sex = document.querySelector("select#sex");

let nomspan = document.querySelector("span#nomInfo");
let prenomspan = document.querySelector("span#prenomInfo");
let emailspan = document.querySelector("span#emailInfo");
let agespan = document.querySelector("span#ageInfo");
let sexspan = document.querySelector("span#sexInfo");

nom?.addEventListener("keyup", (e) => {
  nomspan.textContent = e.target.value;
});

prenom?.addEventListener("keyup", (e) => {
  prenomspan.textContent = e.target.value;
});

email?.addEventListener("keyup", (e) => {
  emailspan.textContent = e.target.value;
});

age?.addEventListener("keyup", (e) => {
  agespan.textContent = e.target.value;
});

sex?.addEventListener("change", (e) => {
  sexspan.textContent = e.target.value;
});



