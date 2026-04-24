let clics = 0;

function afficherMessage() {
  const message = document.getElementById("message");
  const bouton = document.getElementById("btn-message");
  const compteur = document.getElementById("compteur");

  clics = clics + 1;
  compteur.textContent = clics + " clics";

  if (message.style.display === "none") {
    message.style.display = "block";
    bouton.textContent = "Cacher le message";
  } else {
    message.style.display = "none";
    bouton.textContent = "Clique ici !";
  }
}
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});