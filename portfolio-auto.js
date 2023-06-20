// Maintient de la navbar et du bouton display navbar au scroll
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var NavBarDisplaySpan = document.querySelector(".NavBarDisplaySpan");
  var NavBarDisplay = document.querySelector(".NavBarDisplay");
  navbar.classList.toggle("sticky", window.scrollY > 0);
  NavBarDisplaySpan.classList.toggle("sticky", window.scrollY > 0);
  NavBarDisplay.classList.toggle("sticky", window.scrollY > 0);

});



// Image LinkedIn - Lien vers mon compte
document.getElementById('linkedin-logo').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/quentin-jolly-933100227', '_blank');
});


// Maintenir la NavBar visible quand on scroll

var navbar_displayer = document.querySelector('.NavBarDisplay');
var navbar = document.getElementById('navbar');


// Affichage de la navbar avec le bouton
navbar_displayer.addEventListener('click', function(event) {
  event.stopPropagation();

  var computedStyle = window.getComputedStyle(navbar);
  var displayValue = computedStyle.getPropertyValue('display');

  if (displayValue === 'none') {
    navbar.style.display = 'flex';
    document.addEventListener('click', closeNavBar);
  } else {
    navbar.style.display = 'none';
    document.removeEventListener('click', closeNavBar);
  }
});


// Computer Skills calc
progressWidthCalc("popup-skill-OfficeTools","Office-tools-value","Office-tools-progress")
progressWidthCalc("popup-skill-AdminSys","Admin-Sys-value","Admin-Sys-progress")
progressWidthCalc("popup-skill-DevWeb","Dev-Web-value","Dev-Web-progress")
progressWidthCalc("popup-skill-Databases","Databases-value","Databases-progress")
progressWidthCalc("popup-skill-OpeSystems","Ope-Systems-value","Ope-Systems-progress")


function progressWidthCalc(popupName, P_value_text, Progress_width) {
  // Sélection de la div mère avec le nom spécifié
  var divMere = document.getElementById(popupName);

  // Sélection des divs avec la classe "progress" uniquement dans la div mère
  var progressDivs = divMere.querySelectorAll(".progress");

  // Variables pour stocker la somme des largeurs en pourcentage et le nombre de divs
  var sommePourcentage = 0;
  var nombreDivs = 0;

  // Parcourir les divs avec la classe "progress" dans la div mère
  for (var i = 0; i < progressDivs.length; i++) {
    var progressDiv = progressDivs[i];

    // Récupérer la largeur en pourcentage de chaque div
    var largeurPourcentage = parseFloat(progressDiv.style.width);

    // Vérifier si la largeur est un pourcentage valide
    if (!isNaN(largeurPourcentage) && largeurPourcentage > 0) {
      sommePourcentage += largeurPourcentage;
      nombreDivs++;
    }
  }

  // Calcul de la moyenne des largeurs en pourcentage
  var moyennePourcentage = sommePourcentage / nombreDivs;

  // Arrondir la moyenne des pourcentages à aucun chiffre après la virgule
  var moyennePourcentageArrondie = Math.round(moyennePourcentage);

  // Associer la valeur de la moyenne arrondie en pourcentage à l'autre div spécifiée
  var autreDiv = document.getElementById(Progress_width);
  autreDiv.style.width = moyennePourcentageArrondie + "%";

  // Sélection de la balise <p> spécifiée
  var paragraphe = document.getElementById(P_value_text);

  // Mettre à jour le texte de la balise <p> avec la valeur calculée arrondie en pourcentage
  paragraphe.textContent = moyennePourcentageArrondie + "%";
}