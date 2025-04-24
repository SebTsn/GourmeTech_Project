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
      const menuBtnClose = document.querySelector(".close");
      menuBtnClose.addEventListener('click', function() {
        liens.classList.toggle('show');
    })
});


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
      if (minutes < 15) time = '-15';
      else if (minutes <= 30) time = '15-30';
      else time = '+30';
  
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




//! Ranking //

// let recipeStar = localStorage.getItem("recipeStar");

document.querySelectorAll('.notation').forEach(notation => {
  const stars = notation.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      //!  Supprime les classes "selected" de toutes les étoiles
      stars.forEach(s => s.classList.remove('selected'));

      //!  Ajoute "selected" jusqu’à l’étoile cliquée
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add('selected');
      }
      // //!  Enregistre la note dans le localStorage
      // localStorage.setItem("recipeStar", recipeStar);
      // //!  Enregistre la note dans le localStorage
      // localStorage.setItem("notation", notation.getAttribute('data-notation'));
      // //!  Enregistre la note dans le localStorage
      // localStorage.setItem("note", star.getAttribute('data-value'));

      //!  Facultatif : stocker la note dans un attribut ou log
      const note = star.getAttribute('data-value');
      console.log("Note donnée :", note);
      notation.setAttribute('data-notation', note);
    
    });
  });
});



