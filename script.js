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

const citations = [
  { content: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
  { content: "La vie c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
  { content: "Le secret pour avancer est de commencer.", author: "Mark Twain" },
  { content: "Croyez en vous et tout devient possible.", author: "Inconnu" },
  { content: "Chaque expert a d'abord été un débutant.", author: "Helen Hayes" },
  { content: "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais signe.", author: "Cory House" },
  { content: "Apprendre sans réfléchir est inutile. Réfléchir sans apprendre est dangereux.", author: "Confucius" },
];

function nouvelleCitation() {
  const texte = document.getElementById("citation-texte");
  const auteur = document.getElementById("citation-auteur");

  const index = Math.floor(Math.random() * citations.length);
  const citation = citations[index];

  texte.textContent = '"' + citation.content + '"';
  auteur.textContent = "— " + citation.author;
}

nouvelleCitation();
function toggleTheme() {
  const body = document.body;
  const bouton = document.getElementById("toggle-theme");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    bouton.textContent = "☀️";
  } else {
    bouton.textContent = "🌙";
  }
}