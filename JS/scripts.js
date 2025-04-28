// Dark Mode 

// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//      // Change l’emoji selon le thème
//      darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
//   }
 
// const darkModeButton = document.querySelector('.dark-mode');

// darkModeButton.addEventListener('click', darkMode);

// ! Mode Dark //

let theme = localStorage.getItem("theme");
const darkModeButton = document.querySelector('.dark-mode');


if (theme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️";  
} else { darkModeButton.textContent = "🌙"; 
}


darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeButton.textContent = "☀️";  
    } else {
        localStorage.setItem("theme", "light");
        darkModeButton.textContent = "🌙";  
    }
});



//! like //

const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
  });
});


//! NavBar Responsive //

const menuBtn = document.querySelector("#btn");
const liens = document.querySelector("#menu");
menuBtn.addEventListener('click', function() {
    liens.classList.toggle('show');
      
});
const menuBtnClose = document.querySelector(".close");
      menuBtnClose.addEventListener('click', function() {
        liens.classList.toggle('show');
        console.log("close")
    })


//! FAQ Accordéon //

// const btnFAQs = [...document.querySelectorAll('.btnFAQ')]

// btnFAQs.forEach(btnFAQ => btnFAQ.addEventListener("click", btnFAQsAnimation))

// function btnFAQsAnimation(e){

//     const contentFAQs = [...document.querySelectorAll(".contentFAQ")]

//     const indexToRemove = btnFAQs.findIndex(btnFAQ => btnFAQ.classList.contains("active-tab"))

//     btnFAQs[indexToRemove].classList.remove("active-tab");
//     contentFAQs[indexToRemove].classList.remove("active-tab-content");

//     const indexToShow = btnFAQs.indexOf(e.target)

//     btnFAQs[indexToShow].classList.add("active-tab");
//     contentFAQs[indexToShow].classList.add("active-tab-content");
// }

const btnFAQs = [...document.querySelectorAll('.btnFAQ')];

btnFAQs.forEach(btnFAQ => btnFAQ.addEventListener("click", btnFAQsAnimation));

function btnFAQsAnimation(e) {
    const contentFAQs = [...document.querySelectorAll(".contentFAQ")];

    const indexToRemove = btnFAQs.findIndex(btn => btn.classList.contains("active-tab"));
    if (indexToRemove !== -1) {
        btnFAQs[indexToRemove].classList.remove("active-tab");
        contentFAQs[indexToRemove].classList.remove("active-tab-content");
    }

    const indexToShow = btnFAQs.indexOf(e.currentTarget);
    btnFAQs[indexToShow].classList.add("active-tab");
    contentFAQs[indexToShow].classList.add("active-tab-content");
}

// e.currentTarget
// Ca fait toujours référence à l’élément sur lequel l’écouteur d’événement est attaché, donc ici le <button>, peu importe si tu cliques sur le <strong> à l’intérieur.
// e.target ne correspond pas à un élément de btnFAQs
// donc indexToShow vaut -1, ce qui cause des bugs ou aucun affichage.

//! Section Recherche //

//** Barre de recherche **/

// const searchInput = document.querySelector("#searchInput");
// const searchButton = document.querySelector("#searchButton");

// searchButton.addEventListener("click", function() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const cards = document.querySelectorAll(".card");

//     cards.forEach(card => {
//         const cardTitle = card.querySelector("h2").textContent.toLowerCase();
//         if (cardTitle.includes(searchTerm)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });


//** Barre de recherche 2**/


document.querySelector('#searchButton').addEventListener('click', () => {
    const searchText = document.querySelector('#searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    const noResult = document.querySelector('.no-result'); 
  
 
    //! Récupération des filtres cochés
    
    const Checked = (name) =>   // ? recuperation en liste 
      Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(input => input.value);  // ? Array. transformation en tableau + .map  parcourt chaque element extrait de la valeur 
  
    
   //! Récupération des filtres 
    
    const selectedCategories = Checked('category1');
    const selectedTimes = Checked('time1');
    const selectedDifficulties = Checked('difficulty');
  
    //! compte le nombre de card trouvées 
  
    let result = 0;
  
    //! recuperation des infos de chaque carte
  
    cards.forEach(card => {
      const title = card.querySelector('.recipeTitle').textContent.toLowerCase();
      const type = card.querySelector('.category').textContent.toLowerCase();
      const duration = card.querySelector('.time').textContent;
      const difficulty = card.querySelector('.difficult').textContent;
  
      const verifText = title.includes(searchText);
      const verifCategory = selectedCategories.length ? selectedCategories.includes(type) : true;
  
  
      //! passé temps => minute 
  
      const minutes = parseInt(duration);
      let time = '';
      if (minutes < 31) time = '-31';
      else if (minutes <= 60) time = '30-60';
      else time = '+60';
  
      const verifTime = selectedTimes.length ? selectedTimes.includes(time) : true;
      const verifDifficulty = selectedDifficulties.length ? selectedDifficulties.includes(difficulty) : true;
  
      //! affiche les card rechercher 
  
      if (verifText && verifCategory && verifTime && verifDifficulty) {
        card.style.display = 'block';
        result++;
      } else {
        card.style.display = 'none';
      }
    });
  
    //!  Affiche le message "Aucune recette trouvée 😢"
    
    noResult.style.display = result === 0 ? 'block' : 'none';
  });


//! Validation Formulaire //

// const form = document.querySelector('.formulaire');
// console.log(form);

// // On récupère la valeur du champ input name
// const nameInput = document.getElementById('name');

// // Lancement de la validation 
// form.addEventListener('submit', function(event) {
//     let errors = [];

//     // Si le champ "name" est vide
//     if (nameInput.value.trim() === '') {
//         // On ajoute une erreur à la constante errors
//         errors.push('Veuillez saisir votre nom.');
//     }
    
//     // Gestions des erreurs
//     if (errors.length > 0) {
//         // Si il y a une erreur :
//         // On empeche l'envoi du formulaire
//         event.preventDefault();
//         // On appelle la fonction pour afficher les erreurs
//         displayErrors(errors);
//     }

// });

    
// // Fonction d'affichage des erreurs
// function displayErrors(errors) {
//     // On créé une balise div
//     const errorContainer = document.createElement('div');
//     // On lui ajoute la classe .error
//     errorContainer.classList.add('error');

//     // On fait une boucle pour afficher toutes les erreurs
//     errors.forEach(function(error) {
//         // On créé un élément paragraphe p
//         // à chaque tour de boucle, donc pour chaque erreur
//         const errorMessage = document.createElement('p');
//         errorMessage.textContent = error;
//         errorContainer.appendChild(errorMessage);
//     });

//     // On affiche les erreurs à la fin du formulaire 
//     form.appendChild(errorContainer);
// }



//! Ranking //

let A = document.querySelectorAll(".star")

A.forEach((star) => {
  star.addEventListener("mouseenter", function () {
    console.log(star)
    star.classList.add("overStars")
  })  
})

document.querySelectorAll('.notation').forEach((notation, notationIndex) => {
  notation.addEventListener("mouseleave", function () {
    let C = notation.querySelectorAll('.star')
    C.forEach((elementStar) => {
      elementStar.classList.remove("overStars")
    })
  })

  const stars = notation.querySelectorAll('.star');
  const storageKey = `notation-${notationIndex}`;

  // Recharger la note sauvegardée

  const savedNote = parseInt(localStorage.getItem(storageKey));
  if (!isNaN(savedNote)) {
    for (let i = 0; i < savedNote; i++) {
      stars[i].classList.add('selected');
    }
    notation.setAttribute('data-notation', savedNote);
  }
  
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach(s => s.classList.remove('selected'));

      //  Ajouter les étoiles sélectionnées

      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('selected');
      }

      // Récupérer la note 
      const note = index + 1;

      // Sauvegarder la note

      localStorage.setItem(storageKey, note);
      notation.setAttribute('data-notation', note);
      console.log("Note donnée :", note);
    });
  });
});



