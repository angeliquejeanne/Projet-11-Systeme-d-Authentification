// nous ajoutons les variables des boutons
const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

// Nous ajoutons les variables pour les formulaires
const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');

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


formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    authentification.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur).then(cred => {
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition');
    })
})


// Deconnexion

deco.addEventListener('click', (e) => {
    e.preventDefault();
    authentification.signOut().then(() => {
        console.log("Déconnecté");
    })
})


// Connexion

formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    authentification.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur).then(cred => {
        console.log("CONNEXION !", cred.user);
        formConnection.reset();
        formConnection.classList.toggle('apparition');
    })
})


// Gérer le contenu
const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

authentification.onAuthStateChanged(utilisateur => {
    if(utilisateur){
        info.innerText = "Voici le contenu privé !"
        h1.innerText = "Vous voilà de retour ! :)"
    } else {
        console.log("Utilisateur s'est déconnecté");
        info.innerText = "Contenu public.";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous";
    }
})