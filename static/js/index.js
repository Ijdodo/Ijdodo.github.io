document.getElementById("form").addEventListener("submit", checkForm);


function checkForm(e) {//Fonction pour verifier le formulaire 

    e.preventDefault();// Empêcher la soumission du formulaire par défaut

    let form = e.target;    // Obtenir le formulaire qui a été soumis
    const firstName = form["firstName"].value;    // Obtenir les valeurs des champs de formulaire
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const message = form["message"].value;
    if (firstName.length < 2 || firstName.length > 50) {    // Vérifier si les valeurs des champs de formulaire sont valides
        displayErrorMessage(firstName, "prénom")
    } else if (lastName.length < 2 || lastName.length > 50) {
        displayErrorMessage(lastName, "nom")
    } else if (email.length < 3 || email.length > 70 || !validateEmail(email)) {
        displayErrorMessage(email, "e-mail")
    } else if (message.length < 20 || email.length > 500) {
        displayErrorMessage(message, "message")
    } else {
        document.getElementById("success-message").style.display = "block";        // Si toutes les valeurs du formulaire sont valides, afficher un message de réussite et stocker une variable dans localStorage qui nous permettra de pouvoir garder le message meme si la page refresh
        localStorage.setItem("formSubmitted", "true");
    }

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
}
//Fonction pr afficher message d'erreur si un des champs du formulaire n'est pas rempli correctement 
function displayErrorMessage(field, name) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = `${field} n'est pas un ${name} valide.`;
    errorMessage.style.display = "block";
}


// Fonction pour valider une adresse e-mail
function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

window.addEventListener("load", function () {
    // Vérifier si le formulaire a été soumis avec succès
    var formSubmitted = localStorage.getItem("formSubmitted");
        // Si le formulaire a été soumis avec succès
    if (formSubmitted === "true") {
        // Afficher le message de réussite
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
    }
});
