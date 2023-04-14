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
        form.submit();
    }
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
    document.getElementById("form").addEventListener("submit", function(event) {
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();
      
        // Afficher le message de réussite
        var successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";
      
        // Stocker une valeur dans le stockage local du navigateur pour pouvoir nous permettre de laisser le message de reussite afficher à la fin de l'envoie du formulaire
        localStorage.setItem("formSubmitted", "true");
      });

      window.addEventListener("load", function() {
        // Vérifier si le formulaire a été soumis avec succès
        var formSubmitted = localStorage.getItem("formSubmitted");
        if (formSubmitted === "true") {
          // Afficher le message de réussite
          var successMessage = document.getElementById("success-message");
          successMessage.style.display = "block";
        }
      });
      // Supprimer les cookie/vider le cache pour pouvoir faire disparaitre le message et pour réessayer