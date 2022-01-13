function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeBtn.addEventListener("click", closeModal);



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// FORM Elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const cgu = document.getElementById("checkbox1");

// Errors
const fnError = document.getElementById("firstAlert");
const lnError = document.getElementById("lastAlert");
const emailError = document.getElementById("emailAlert");
const birthdateError = document.getElementById("birthdateAlert");
const quantityError = document.getElementById("quantityAlert");
const locationError = document.getElementById("locationAlert");
const cguError = document.getElementById("cguAlert");


function validateForm(e) {
  e.preventDefault();
  if (!validateFirstName()) {
    fnError.style.display = "block";
  } else if (!validateLastName()) {
    lnError.style.display = "block";
  } else if (!validateEmail(email)) {
    emailError.style.display = "block";
  } else if (!validateBirthdate(birthdate)) {
    birthdateError.style.display = "block";
  } else if (!validateContest()) {
    quantityError.style.display = "block";
  } else if (!validateLocation()) {
    locationError.style.display = "block";
  } else if (!validateConditions()) {
    cguError.style.display = "block";
  }
}

function validateFirstName() {
  if (firstName.value.length >= 2) {
    return true;
  }
}
function validateLastName() {
  if (lastName.value.length >= 2) {
    return true
  }
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    return true;
}

function validateBirthdate(birthdate) {
  if (/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(birthdate.value))
    return true;
}

function validateContest() {
  if (/^\+?(0|[1-9]\d*)$/.test(quantity.value)) {
    return true;
  }
}

function validateLocation() {
  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    return true
  }
}

function validateConditions() {
  if (cgu.checked) {
    return true;
  }
}