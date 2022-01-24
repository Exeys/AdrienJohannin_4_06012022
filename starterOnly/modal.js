function editNav() {
  let x = document.getElementById("myTopnav");
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
const birthdateError2 = document.getElementById("birthdateAlert2");
const quantityError = document.getElementById("quantityAlert");
const locationError = document.getElementById("locationAlert");
const cguError = document.getElementById("cguAlert");

// Fonction général, appellé à l'envoi du formulaire HTML
// Appelle l'ensemble des fonctions de validations et affiche les erreurs si la validation a échoué (faux)
// Si il n'y a plus d'erreurs, le formulaire est correctement "envoyé" et appelle la fonction submit() qui ferme la modal et renvoie sur un message de validation
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
  if (birthdate.value === "") {
    birthdateError.style.display = "block";
    nbErrors++;
  } else {
    birthdateError.style.display = "none"
    if (!validateBirthdate(birthdate)) {
      birthdateError2.style.display = "block";
      nbErrors++;
    } else {
      birthdateError2.style.display = "none"
    }
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

// Fonction de validation du prénom
// Retourne vrai si le nombre de caractères saisi est supérieur à 2 / n'est pas vide
function validateFirstName() {
  return firstName.value.length >= 2;
}

// Fonction de validation du nom
// Retourne vrai si le nombre de caractères saisi est supérieur à 2 / n'est pas vide
function validateLastName() {
  return lastName.value.length >= 2;
}

// Fonction de validation de l'email
// Retourne vrai si l'adresse saisie est une adresse email
// Ici, une adresse mail valide est une adresse comportant une suite de caractères 
// suivi d'un @ suivi d'une suite de caractères, d'un point et d'une extension de domaine de 2 ou 3 caractères
function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
}

// Fonction de validation de l'anniversaire
// Retourne vrai si le temps en secondes depuis la naissance est supérieur au nombre de secondes dans 18 années
// En admettant qu'une inscription n'est possible qu'en étant majeur
function validateBirthdate(birthdate) {
  let todayDate = new Date();
  let birthdateDate = new Date(birthdate.value);
  let diff = todayDate.getTime() - birthdateDate.getTime();
  let diffInSeconds = diff / 1000;
  let majorityInSeconds = 568036800

  if (diffInSeconds >= majorityInSeconds) {
    return true;
  }
}

// Fonction de validation du nombre de concours
// Retourne vrai si la saisie est une valeur numérique
function validateContest() {
  return (/^\+?(0|[1-9]\d*)$/.test(quantity.value));
}

// Fonction de validation 
// Retourne vrai si l'un des boutons radio est coché
function validateLocation() {
  let result = false;
  locations.forEach(location => {
    if (location.checked) {
      result = true;
    }
  })
  return result;
}

// Fonction de validation des conditions générales d'utilisations
// Retourne vrai si la checkbox est coché
function validateConditions() {
  if (cgu.checked) {
    return true;
  }
}