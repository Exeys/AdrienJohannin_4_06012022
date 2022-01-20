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
const modalConfirm = document.querySelector(".confirmation");
const submitBtn = document.querySelector(".btn-submit");
const closeConfirmBtn = document.getElementById("closeConfirmation");
const form = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Close modal event
closeBtn.addEventListener("click", closeModal);
closeConfirmBtn.addEventListener("click", closeConfirmModal);

// Submit modal event
function submitModal() {
  closeModal();
  launchConfirmModal();
  form.reset();
}



// Launch modal confirm
function launchConfirmModal() {
  modalConfirm.style.display = "block";
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close confirmation modal
function closeConfirmModal() {
  modalConfirm.style.display = "none";
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
const locations = document.getElementsByName("location");

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
  let nbErrors = 0;
  if (!validateFirstName()) {
    fnError.style.display = "block";
    nbErrors++;
  } else {
    fnError.style.display = "none";
  }
  if (!validateLastName()) {
    lnError.style.display = "block";
    nbErrors++;
  } else {
    lnError.style.display = "none"
  }
  if (!validateEmail(email)) {
    emailError.style.display = "block";
    nbErrors++;
  } else {
    emailError.style.display = "none"
  }
  if (!validateBirthdate(birthdate)) {
    birthdateError.style.display = "block";
    nbErrors++;
  } else {
    birthdateError.style.display = "none"
  }
  if (!validateContest()) {
    quantityError.style.display = "block";
    nbErrors++;
  } else {
    quantityError.style.display = "none"
  }
  if (!validateLocation()) {
    locationError.style.display = "block";
    nbErrors++;
  } else {
    locationError.style.display = "none"
  }
  if (!validateConditions()) {
    cguError.style.display = "block";
    nbErrors++;
  } else {
    cguError.style.display = "none"
  }
  if (nbErrors === 0) {
    submitModal();
  }
}

function validateFirstName() {
  return firstName.value.length >= 2;
}

function validateLastName() {
  return lastName.value.length >= 2;
}


function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}

function validateBirthdate(birthdate) {
  var todayDate = new Date();
  var birthdate = birthdate.value;
  birthdate = new Date(birthdate)
  var diff = todayDate.getTime() - birthdate.getTime();
  var diffInSeconds = diff / 1000;
  var majorityInSeconds = 567648000

  if (diffInSeconds >= majorityInSeconds) {
    return true;
  }
}

function validateContest() {
  return (/^\+?(0|[1-9]\d*)$/.test(quantity.value));
}


function validateLocation() {
  var result = false;
  locations.forEach(location => {
    if (location.checked) {
      result = true;
    }
  })
  return result;
}


function validateConditions() {
  if (cgu.checked) {
    return true;
  }
}