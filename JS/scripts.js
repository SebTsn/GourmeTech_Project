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

<<<<<<< HEAD

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
=======
darkModeButton.addEventListener('click', darkMode);
>>>>>>> ZzOuch_branch



//! like //
<<<<<<< HEAD

const hearts = document.querySelectorAll(".heart");

=======
// const hearts = document.querySelectorAll(".heart");
// hearts.forEach((heart) => {
//   heart.addEventListener("click", () => {
//     heart.classList.toggle("active");
//     heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
//   });
// });


// Génération du localStorage pour les FAVORIS :


let value = localStorage.getItem('recetteFav')
let data = []  ;

console.log(value)
if(value){
  let b = value.split(",") 
  b.forEach(function (elementTab){
    if (!data.includes(elementTab)){

    data.push(elementTab)

    }
  })
  console.log(data)
}


//<------------Possibilité de passer le coeur en rouge :

const hearts = document.querySelectorAll(".heart");
>>>>>>> ZzOuch_branch
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
<<<<<<< HEAD
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

if(document.querySelector('#searchButton') !== null) {

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
  
}

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


//! Galerie d'images //

// Sélectionner toutes les images dans .imgcontainer2
const imagesInContainer2 = document.querySelectorAll('.bigContainer img');
console.log(imagesInContainer2);

// Fonction pour déplacer l'image
function swapImages(event) {
    const clickedImage = event.target; // L'image cliquée
    const imgContainer = clickedImage.closest('.bigContainer').querySelector('.imgcontainer'); // Trouver le conteneur .imgcontainer
    const imgContainer2 = clickedImage.closest('.bigContainer').querySelector('.imgcontainer2'); // Trouver le conteneur .imgcontainer2

    // Trouver l'image actuelle dans .imgcontainer (celle avec la classe "recipePix")
    let currentMainImage = imgContainer.querySelector('.recipePix');

    // Déplacer l'image cliquée dans .imgcontainer (à la place de l'image actuelle)
    imgContainer.appendChild(clickedImage);

    // Déplacer l'image actuelle (celle avec la classe "recipePix") dans .imgcontainer2
    imgContainer2.appendChild(currentMainImage);

    // Assurez-vous que l'image déplacée ait la classe "recipePix"
    clickedImage.classList.remove('gallery');
    clickedImage.classList.add('recipePix');

    // Assurez-vous que l'image déplacée (anciennement "recipePix") ait la classe "gallery"
    currentMainImage.classList.remove('recipePix');
    currentMainImage.classList.add('gallery');
}

// Ajouter un événement de clic à chaque image de .imgcontainer2
imagesInContainer2.forEach(img => {
    img.addEventListener('click', swapImages);
});
=======

     
    // Enregistrement des recettes favorites :
    
    let recettes = document.querySelectorAll(".recetteA")

    recettes.forEach((recette) =>{
      recette.addEventListener("click", () => {
        if (!data.includes(recette.dataset.id)){
        data.push(recette.dataset.id)

        localStorage.setItem('recetteFav', data);

        console.log(data)
  
    }})})

})});

// Garder le coeur rouge si déjà en favoris :

let recetteQ = document.querySelectorAll(".recetteA")
recetteQ.forEach(function(el){

 let f = el.dataset.id
  console.log(f)
  console.log(data)

  if(data.includes(f)){

  console.log(el.querySelector(".heart")) // Pour récupérer le coeur

  el.querySelector(".heart").textContent = "❤️" 

  }

})



// Page RECETTE - ajouter FAV : 


let btn = document.querySelector(".heart")

btn.addEventListener("click", function(){

let y = btn.dataset.id
console.log(y)
if(value){
  if (!data.includes(y)){

   data.push(y)
   localStorage.setItem('recetteFav', data);
  }
}  

})

>>>>>>> ZzOuch_branch
