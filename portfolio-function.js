// Fermeture de la navbar avec le bouton
function closeNavBar_displayer(event) {
  if (!navbar_displayer.contains(event.target)) {
    navbar.style.display = 'none';
    document.removeEventListener('click', closeNavBar_displayer);
  }
}

// Fermeture de la navbar clique ailleur que dessus
function closeNavBar(event) {
  if (!navbar.contains(event.target) && event.target !== navbar_displayer) {
    navbar.style.display = 'none';
    document.removeEventListener('click', closeNavBar);
  }
}

// Fonctions ouverture des popups general computer skills
function DisplayPopupSkillOfficeTools() {
    var popup = document.getElementById("popup-skill-OfficeTools");
    popup.style.display = "block";
}

function DisplayPopupSkillAdminSys() {
    var popup = document.getElementById("popup-skill-AdminSys");
    popup.style.display = "block";
}

function DisplayPopupSkillDevWeb() {
    var popup = document.getElementById("popup-skill-DevWeb");
    popup.style.display = "block";
}

function DisplayPopupSkillDatabases() {
    var popup = document.getElementById("popup-skill-Databases");
    popup.style.display = "block";
}

function DisplayPopupSkillOpeSystems() {
    var popup = document.getElementById("popup-skill-OpeSystems");
    popup.style.display = "block";
}

// Fonctions fermeture des popups general computer skills
function fermerPopupSkillOfficeTools() {
    var popup = document.getElementById("popup-skill-OfficeTools");
    popup.style.display = "none";
}

function fermerPopupSkillAdminSys() {
    var popup = document.getElementById("popup-skill-AdminSys");
    popup.style.display = "none";
}

function fermerPopupSkillDevWeb() {
    var popup = document.getElementById("popup-skill-DevWeb");
    popup.style.display = "none";
}

function fermerPopupSkillDatabases() {
    var popup = document.getElementById("popup-skill-Databases");
    popup.style.display = "none";
}

function fermerPopupSkillOpeSystems() {
    var popup = document.getElementById("popup-skill-OpeSystems");
    popup.style.display = "none";
}


/* Fonctions ouverture des popups timeline Work */
function DisplayPopupDEFIInformatique() {
    var popup = document.getElementById("popup-timeline-DEFIInformatique");
    popup.style.display = "block";
}
function DisplayPopupInstitutCancerologieLorraine() {
    var popup = document.getElementById("popup-timeline-InstitutCancerologieLorraine");
    popup.style.display = "block";
}
function DisplayPopupCarrefourCustines() {
    var popup = document.getElementById("popup-timeline-CarrefourCustines");
    popup.style.display = "block";
}
function DisplayPopupCarrefourBAD() {
    var popup = document.getElementById("popup-timeline-CarrefourBAD");
    popup.style.display = "block";
}
function DisplayPopupAtoutbio() {
    var popup = document.getElementById("popup-timeline-Atoutbio");
    popup.style.display = "block";
}


/* Fonctions fermeture des popups timeline Work */
function fermerPopupDEFIInformatique() {
    var popup = document.getElementById("popup-timeline-DEFIInformatique");
    popup.style.display = "none";
}
function fermerPopupInstitutCancerologieLorraine() {
    var popup = document.getElementById("popup-timeline-InstitutCancerologieLorraine");
    popup.style.display = "none";
}
function fermerPopupCarrefourCustines() {
    var popup = document.getElementById("popup-timeline-CarrefourCustines");
    popup.style.display = "none";
}
function fermerPopupCarrefourBAD() {
    var popup = document.getElementById("popup-timeline-CarrefourBAD");
    popup.style.display = "none";
}
function fermerPopupAtoutbio() {
    var popup = document.getElementById("popup-timeline-Atoutbio");
    popup.style.display = "none";
}


/* Fonctions ouverture des popups projets School */
function DisplayPopupC() {
    var popup = document.getElementById("popup-projet-C");
    popup.style.display = "block";
}

function DisplayPopupCpp() {
    var popup = document.getElementById("popup-projet-Cpp");
    popup.style.display = "block";
}

function DisplayPopupC_sharp() {
    var popup = document.getElementById("popup-projet-C_sharp");
    popup.style.display = "block";
}

function DisplayPopupCisco() {
    var popup = document.getElementById("popup-projet-Cisco");
    popup.style.display = "block";
}

function DisplayPopupAdminSys() {
    var popup = document.getElementById("popup-projet-AdminSys");
    popup.style.display = "block";
}

function DisplayPopupWeb() {
    var popup = document.getElementById("popup-projet-Web");
    popup.style.display = "block";
}

/* Fonctions fermeture des popups projets School */
function fermerPopupC() {
    var popup = document.getElementById("popup-projet-C");
    popup.style.display = "none";
}

function fermerPopupCpp() {
    var popup = document.getElementById("popup-projet-Cpp");
    popup.style.display = "none";
}

function fermerPopupC_sharp() {
    var popup = document.getElementById("popup-projet-C_sharp");
    popup.style.display = "none";
}

function fermerPopupCisco() {
    var popup = document.getElementById("popup-projet-Cisco");
    popup.style.display = "none";
}

function fermerPopupAdminSys() {
    var popup = document.getElementById("popup-projet-AdminSys");
    popup.style.display = "none";
}

function fermerPopupWeb() {
    var popup = document.getElementById("popup-projet-Web");
    popup.style.display = "none";
}



/* Fonctions ouverture des popups projets Work */
function DisplayPopupPowershellAD() {
    var popup = document.getElementById("popup-projet-powershellAD");
    popup.style.display = "block";
}

function DisplayPopupPerformance() {
    var popup = document.getElementById("popup-projet-performance");
    popup.style.display = "block";
}

function DisplayPopupMonitoring() {
    var popup = document.getElementById("popup-projet-Monitoring");
    popup.style.display = "block";
}

function DisplayPopupCybersecurity() {
    var popup = document.getElementById("popup-projet-Cybersecurity");
    popup.style.display = "block";
}

function DisplayPopupVmware() {
    var popup = document.getElementById("popup-projet-Vmware");
    popup.style.display = "block";
}

function DisplayPopupDocker() {
    var popup = document.getElementById("popup-projet-Docker");
    popup.style.display = "block";
}


/* Fonctions fermeture des popups projets Work */
function fermerPopupPowershellAD() {
    var popup = document.getElementById("popup-projet-powershellAD");
    popup.style.display = "none";
}

function fermerPopupPerformance() {
    var popup = document.getElementById("popup-projet-performance");
    popup.style.display = "none";
}

function fermerPopupMonitoring() {
    var popup = document.getElementById("popup-projet-Monitoring");
    popup.style.display = "none";
}

function fermerPopupCybersecurity() {
    var popup = document.getElementById("popup-projet-Cybersecurity");
    popup.style.display = "none";
}

function fermerPopupVmware() {
    var popup = document.getElementById("popup-projet-Vmware");
    popup.style.display = "none";
}

function fermerPopupDocker() {
    var popup = document.getElementById("popup-projet-Docker");
    popup.style.display = "none";
}