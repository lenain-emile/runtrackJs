document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('sign').addEventListener('submit', function (event) {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let error = document.getElementById('error-message');

    error.textContent = '';
    error.style.display = 'none';

    if (!email.includes('@laplateforme.io')) {
      error.textContent = 'Votre email doit contenir @laplateforme.io';
      error.style.display = 'block';
      event.preventDefault();
      return;
    }

    if (password.length < 8) {
      alert('Mot de passe trop court');
      event.preventDefault();
      return;
    }

    if (password.includes('moderator')) {
      window.location.href = 'moderator.html';
    } else if (password.includes('administrator')) {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'user.html';
    }

    event.preventDefault();
  });
});

function soumettreDemande() {
  let dateSelectionnee = document.getElementById('date').value;
  let message = document.getElementById('message');

  if (!dateSelectionnee) {
      message.textContent = "Veuillez sélectionner une date !";
      message.classList.add("text-danger");
      return;
  }

  let dateActuelle = new Date();
  let dateChoisie = new Date(dateSelectionnee);
  dateActuelle.setHours(0, 0, 0, 0);


  if (dateChoisie < dateActuelle) {
      message.textContent = "Vous ne pouvez pas reserver une date passée.";
      message.classList.add("text-danger");
      return;
  }

  if (localStorage.getItem(dateSelectionnee)) {
      message.textContent = "Vous avez déjà soumis une demande pour cette date.";
      message.classList.add("text-warning");
      return;
  }

  localStorage.setItem(dateSelectionnee, "autorisé");

  message.classList.remove("text-danger", "text-warning");
  message.classList.add("text-success");
  message.textContent = "Votre demande a été enregistrée avec succès.";
}











