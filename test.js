//! like //
const hearts = document.querySelectorAll(".heart");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
    let recetteA = document.querySelector(".recetteA")
    localStorage.setItem('recetteFav', recetteA.dataset.id);
    
    addFavoris()


})});




// hearts.addEventListener('click', function() {
    // Stocke une information simple

    
    // Optionnel: stocker une valeur plus complexe (ex: timestamp)
    // localStorage.setItem('derniereActionPageA', Date.now());

    // addFavoris()
    // Utiliser les DATA-ID, Les recettes présentes sur la page FAVORIS avec un Display NONE. si on rajouter aux favoris depuis la page Accueil, je stock le Data Id dans le localstorage et j'affiche la recette avec ID correspondant ! 
// }) 

  function addFavoris() {

    let value = localStorage.getItem('recetteFav')

    console.log(value)

    let recetteC = document.querySelector(".recetteCC")

    console.log(recetteC.dataset.id)

    if( recetteC.dataset.id = value){
      recetteC.style.display = "block"
    }




  // create a new div element
  // const recetteF = document.createElement("div"); 
  // pas besoi pour l'instant.
  // let value = localStorage.getItem('recetteFav')

  console.log(value)

  // let img = document.querySelector("img")
  // let recette = document.querySelector(".favoris")
  // and give it some content

  // add the text node to the newly created div
  // const favoris = document.querySelector(".favoris")


  };


// });





