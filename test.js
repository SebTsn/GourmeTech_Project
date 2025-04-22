//! like //
const heartss = document.querySelectorAll(".heart");
heartss.forEach((hearts) => {
  hearts.addEventListener("click", () => {
    hearts.classList.toggle("active");
    hearts.textContent = hearts.classList.contains("active") ? "❤️" : "🤍";
    
    


})});




const bouton = document.querySelector('#button');
bouton.addEventListener('click', function() {
    console.log('Bouton cliqué sur Page A');
    // Stocke une information simple

    let recetteA = document.querySelector(".recetteA")
    localStorage.setItem('recetteFav', recetteA);
    // Optionnel: stocker une valeur plus complexe (ex: timestamp)
    // localStorage.setItem('derniereActionPageA', Date.now());
    alert('Action enregistrée pour la page B !');

    addFavoris()

}) 

  function addFavoris() {
  // create a new div element
  const recetteF = document.createElement("div"); // pas besoi pour l'instant.
  let value = localStorage.getItem('recetteFav')

  console.log(value)

  let img = document.querySelector("img")
  let recette = document.querySelector(".favoris")
  // and give it some content
  const newRecette = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  const favoris = document.querySelector(".favoris")

  recette.appendChild(img);

  };


// });





