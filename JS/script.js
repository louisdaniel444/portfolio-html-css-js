// <button class="btn-menu-mobile">


// const boutonMobile = document.querySelector (".btn-menu-mobile");
// console.log (boutonMobile);

document.addEventListener('DOMContentLoaded', () => {
  const boutonMobile = document.querySelector (".btn-menu-mobile");
  console.log (boutonMobile);

  const boutonCloseMobile = document.querySelector (".btn-close-menu-mobile");
  console.log (boutonCloseMobile);

  const menuMobile = document.querySelector (".menu-mobile");
  console.log  (menuMobile);

  const liensMobile = document.querySelectorAll(".menu-mobile a");
  console.log (liensMobile)


  function openMenu (){
    console.log ('open menu est activé');
    menuMobile.classList.add("open");
    boutonCloseMobile.classList.add("visible");
  }

  function closeMenu () {
    console.log ('close menu');
    menuMobile.classList.remove("open");
    boutonCloseMobile.classList.remove("visible");
  }
  
  boutonMobile.addEventListener('click',openMenu);   
  boutonCloseMobile.addEventListener('click',closeMenu);

  liensMobile.forEach(lien =>{
     lien.addEventListener('click',closeMenu);
  }

  )
 
});