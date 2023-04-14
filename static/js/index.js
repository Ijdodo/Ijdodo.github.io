document.getElementById("form").addEventListener("submit", checkForm);

function checkForm(e) {
    e.preventDefault();
    let form = e.target;
    const firstName = form["firstName"].value;
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const message = form["message"].value;
    if (firstName.length < 2 || firstName.length > 50) {
        displayErrorMessage(firstName, "prénom")
    } else if (lastName.length < 2 || lastName.length > 50) {
        displayErrorMessage(lastName, "nom")
    } else if (email.length < 3 || email.length > 70 || !validateEmail(email)) {
        displayErrorMessage(email, "e-mail")
    } else if (message.length < 20 || email.length > 500) {
        displayErrorMessage(message, "message")
    } else {
        document.getElementById("success-message").style.display = "block";
        localStorage.setItem("formSubmitted", "true");    }
    
}

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    successMsg.style.display = "block";
  }
});

function validateForm() {
  // Ajoutez ici votre code de validation de formulaire existant
  // Assurez-vous de renvoyer true si le formulaire est valide et false sinon.
}

function displayErrorMessage(field, name) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = `${field} n'est pas un ${name} valide.`;
    errorMessage.style.display = "block";
}



function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    
    window.addEventListener("load", function() {
        // Vérifier si le formulaire a été soumis avec succès
        var formSubmitted = localStorage.getItem("formSubmitted");
        if (formSubmitted === "true") {
          // Afficher le message de réussite
          var successMessage = document.getElementById("success-message");
          successMessage.style.display = "block";
        }
      });
      