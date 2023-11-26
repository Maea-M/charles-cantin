document.addEventListener("DOMContentLoaded", function() {
    /* 
    1. Récupérer 
    les éléments à filter et les mettre dans les constantes
    */
    const onglets = document.querySelectorAll('.category');
    // récupération d'un tableau de longueur 7

    const images = document.querySelectorAll('.galery__image')
    // récupération d'un tableau de valeur 6

    const noms = ['tout','mariage', 'bebe', 'grossesse', 'famille', 'couple', 'bapteme'];
    
    onglets.forEach((onglet) => {
    onglet.addEventListener("click",()=>{
        if (onglet.classList.contains("active")) {
    //        onglet.classList.remove("active");
        } else {
            onglet.classList.add("active");
        }

        // initialiser un nombre à 0 que l'on va comparer à l'onglet clique via un data
        // car sinon ça ne déascative pas les autres
        let number = onglet.getAttribute('data-btn');
        for (i=0; i< onglets.length; i++){
            if (onglets[i].getAttribute('data-btn') != number) {
                onglets[i].classList.remove("active")
            }
        }

    //parcourir la galerie d'images si j vaut le nombre 0 , afficher toutes les iamges
    // si autre que 0, mettre par catégorie miage...
            for (j = 0 ; j < noms.length ; j++) {
                if (j == number) {
                    images.forEach((image) => {
                        if (image.classList.contains(noms[j]) || j === 0) {
                            image.classList.add("active");
                    } else {
                            image.classList.remove("active");
                    }
                })
            }
        }
    })
});

/*
2. Quand le button est cliqué(addEventListenner), 
il devient actif, 
rajouter la galerie correspondante,
retirer les autres
tableau imbriqué 1er
2ème tableau avec les images*/

});
