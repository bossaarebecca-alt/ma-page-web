// ===== EMAILJS =====
const SERVICE_ID = 'service_5m33dhm'
const TEMPLATE_ID = 'template_oj29bk7'
const PUBLIC_KEY = 'etGAtBfBOoUh-fpTT'

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(10, 10, 15, 0.95)'
  } else {
    navbar.style.background = 'rgba(10, 10, 15, 0.85)'
  }
})

// ===== MODE SOMBRE =====
function toggleTheme() {
  document.body.classList.toggle('dark')
}

// ===== CITATIONS =====
const citations = [
  { content: "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.", author: "Winston Churchill" },
  { content: "La vie c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", author: "Albert Einstein" },
  { content: "Le secret pour avancer est de commencer.", author: "Mark Twain" },
  { content: "Croyez en vous et tout devient possible.", author: "Inconnu" },
  { content: "Chaque expert a d'abord été un débutant.", author: "Helen Hayes" },
  { content: "Le code est comme l'humour. Quand on doit l'expliquer, c'est mauvais signe.", author: "Cory House" },
]

function nouvelleCitation() {
  const texte = document.getElementById('citation-texte')
  const auteur = document.getElementById('citation-auteur')
  if (!texte || !auteur) return
  const index = Math.floor(Math.random() * citations.length)
  texte.textContent = '"' + citations[index].content + '"'
  auteur.textContent = '— ' + citations[index].author
}

if (document.getElementById('citation-texte')) {
  nouvelleCitation()
}

// ===== FORMULAIRE CONTACT AVEC EMAILJS =====
function envoyerMessage() {
  const nom = document.getElementById('nom').value.trim()
  const email = document.getElementById('email').value.trim()
  const sujet = document.getElementById('sujet') ? document.getElementById('sujet').value.trim() : ''
  const message = document.getElementById('message').value.trim()
  const confirmation = document.getElementById('confirmation')
  const btn = document.querySelector('.contact-form .btn-primary')

  if (!nom || !email || !message) {
    alert('Veuillez remplir tous les champs !')
    return
  }

  btn.textContent = 'Envoi en cours...'
  btn.disabled = true

  emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    from_name: nom,
    from_email: email,
    subject: sujet,
    message: message
  }, PUBLIC_KEY)
  .then(function() {
    confirmation.style.display = 'block'
    document.getElementById('nom').value = ''
    document.getElementById('email').value = ''
    if (document.getElementById('sujet')) document.getElementById('sujet').value = ''
    document.getElementById('message').value = ''
    btn.textContent = 'Envoyer le message'
    btn.disabled = false
  })
  .catch(function(error) {
    alert('Erreur lors de l\'envoi. Réessaie !')
    console.error(error)
    btn.textContent = 'Envoyer le message'
    btn.disabled = false
  })
}