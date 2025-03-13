let compteur = document.getElementById("compteur");

let nombreDeClics = 0;

function addOne() {

    nombreDeClics++;

    compteur.textContent = nombreDeClics;
};

document.getElementById("button").addEventListener("click", addOne);


