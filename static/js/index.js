document.getElementById("form").addEventListener("submit", checkForm);


function checkForm(e) {//Fonction pour verifier le formulaire 

    e.preventDefault();// Empêche la soumission du formulaire par défaut

    let form = e.target;    // Obtenir le formulaire qui a été soumis
    const firstName = form["firstName"].value;    // Obtenir les valeurs des champs de formulaire
    const lastName = form["lastName"].value;
    const email = form["email"].value;
    const message = form["message"].value;
    if (firstName.length < 2 || firstName.length > 50) {    // Vérifier si les valeurs des champs de formulaire sont valides
        displayErrorMessage(firstName, "prénom")// Mettre une erreur en cas de nom respect 
    } else if (lastName.length < 2 || lastName.length > 50) {// Valeur du nom min 2/Max 50 
        displayErrorMessage(lastName, "nom")// Mettre une erreur en cas de nom respect 
    } else if (email.length < 3 || email.length > 70 || !validateEmail(email)) { //valeur de l'email min 3 max 70
        displayErrorMessage(email, "e-mail")// Mettre une erreur en cas de nom respect 
    } else if (message.length < 20 || email.length > 500) {// Valeur du message min 20 Max 500
        displayErrorMessage(message, "message")// Mettre une erreur en cas de nom respect 
    } else {
        document.getElementById("success-message").style.display = "block";        // Si toutes les valeurs du formulaire sont valides, afficher un message de réussite et stocker une variable dans localStorage qui nous permettra de pouvoir garder le message meme si la page refresh
        localStorage.setItem("formSubmitted", "true");
    }

}

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function (event) {
    // Empêche la soumission du formulaire
    event.preventDefault();
    // Vérification que le formulaire est valide en appelant la fonction "validateForm"
    if (validateForm()) {
            // Affichage du message de succès en changeant le style d'affichage 
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
function validateEmail(email) {//Fonction qui prend en entrée un email True si email valide/False sinon
    
    return String(email)// Convertit l'email en chaîne de caractères
        .toLowerCase()//Met tous les caractères en minuscules
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
