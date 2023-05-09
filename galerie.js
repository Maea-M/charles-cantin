/* 
1. Récupérer les éléments à filter et les mettre dans les constantes
*/
console.log('hello world')
const onglets = document.querySelectorAll('#category');
console.log(onglets)
// récupération d'un tableau de longueur 7

const images = document.querySelectorAll('#galery img')
console.log(images)
// récupération d'un tableau de valeur 6

/*
2. Quand le button est cliqué(addEventListenner), 
il devient actif, 
rajouter la galerie correspondante,
retirer les autres
tableau imbriqué 1er avec category id à récupérer 
2ème tableau avec les images

switch case?
*/


categories.forEach((category) => {
    category.addEventListener("click", () => {
        if (category.classList.contains("active")) {
            return;
        } else {
            category.classList.add("active");
    }}
    )