// nous ajoutons les variables des boutons
const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

// Nous ajoutons les variables pour les formulaires
const formInscription = document.querySelector('.form-inscription');
const formConnection = document.querySelector('.form-connection');


// fonction qui faite apparaitre au click le formulaire
btnInscription.addEventListener('click', () => {
    // si le form est déjà 
    if(formConnection.classList.contains('apparition')){
        // on le fait disparaitre 
        formConnection.classList.remove('apparition'); 
    }
    // apparition au click du formulaire
    formInscription.classList.toggle('apparition');

})

// fonction qui faite apparaitre au click le formulaire
btnConnection.addEventListener('click', () => {
    // si le form est déjà 
    if(formInscription.classList.contains('apparition')){
        // on le fait disparaitre
        formInscription.classList.remove('apparition');  
    }
    // apparition au click du formulaire
    formConnection.classList.toggle('apparition');
})

