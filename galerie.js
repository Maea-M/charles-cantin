/* 
1. Récupérer les éléments à filter et les mettre dans les constantes
*/
console.log('hello world')
const onglets = document.querySelectorAll('.category');
console.log(onglets)
// récupération d'un tableau de longueur 7

onglets.forEach((onglet) => {
    onglet.addEventListener("click",()=>{
    console.log("clicked")
        if (onglet.classList.contains("active")) {
            onglet.classList.remove("active");
        } else {
            onglet.classList.add("active");
        }
    })
});

const images = document.querySelectorAll('.galery__image')
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

