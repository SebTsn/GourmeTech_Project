
//! like //
const hearts = document.querySelectorAll(".heart");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";

    // Enregistrement des recettes favorites :
    let recettes = document.querySelectorAll(".recetteA")
    recettes.forEach((recette) =>{
      recette.addEventListener("click", () => {

      localStorage.setItem('recetteFav', recette.dataset.id);
      addFavoris()


    })})
    


})});

function addFavoris() {

  let value = localStorage.getItem('recetteFav')

  console.log(value)

  let recetteZZ = document.querySelector(".recetteZZ")
  console.log(recetteZZ)
  console.log(recetteZZ.dataset.id)


 if( recetteZZ.dataset.id == value){
      recetteZZ.style.display = "block"
 }
  

console.log(value)


};






