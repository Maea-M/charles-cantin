// 1. Récupérer les éléments HTML et les mettre dans des constantes

function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    
//2  Quand on clique sur le burger
//rajouter une classe show-nav sur le navbar
    burger.addEventListener('click', (e) => {    
        navbar.classList.toggle('show-nav');
    });    
}
// Lancer la fonction
toggleMenu();