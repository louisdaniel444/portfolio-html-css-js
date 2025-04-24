// Attendre que le DOM soit chargé avant de lancer les styles
document.addEventListener('DOMContentLoaded', function () {
  // Sélection des éléments
  // Bouton pour ouvrir le menu
  const btnMenuMobile = document.querySelector('.btn-menu-mobile');
  // Bouton pour fermer le menu
  const btnCloseMenuMobile = document.querySelector('.btn-close-menu-mobile');
  // Menu mobile
  const menuMobile = document.querySelector('.menu-mobile');

  // Fonction pour ouvrir le menu
  function openMenu() {
    // Ajoute la classe 'open' au menu mobile
    menuMobile.classList.add('open');
    // Ajoute la classe 'visible' au bouton pour fermer le menu
    btnCloseMenuMobile.classList.add('visible');
    // Empêche le défilement de la page
    document.body.style.overflow = 'hidden';
  }

  // Fonction pour fermer le menu
  function closeMenu() {
    // Retire la classe 'open' au menu mobile
    menuMobile.classList.remove('open');
    // Retire la classe 'visible' au bouton pour fermer le menu
    btnCloseMenuMobile.classList.remove('visible');
    // Réactive le défilement
    document.body.style.overflow = '';
  }

  // Écouteurs d'événements
  // Ouvrir le menu
  btnMenuMobile.addEventListener('click', openMenu);
  // Fermer le menu
  btnCloseMenuMobile.addEventListener('click', closeMenu);

  // Fermer le menu si on clique sur un lien
  // Sélection des liens du menu
  const menuLinks = document.querySelectorAll('.menu-mobile a');
  // Ajoute un écouteur d'événements sur chaque lien
  menuLinks.forEach(link => {
    // Fermer le menu lorsqu'un lien est cliqué
    link.addEventListener('click', closeMenu);
  });
});