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
        if (!data.includes(recette.dataset.id)){
        // let data = [recette.dataset.id]
        data.push(recette.dataset.id)

        localStorage.setItem('recetteFav', data);

        console.log(data)
        }
        // console.log(val)


    })})
    


})});

function addFavoris() {

   value = localStorage.getItem('recetteFav')

  console.log(value)

  let recetteZZ = document.querySelectorAll(".recetteZZ")
  console.log(recetteZZ)
  console.log(recetteZZ.dataset.id)


 if( recetteZZ.dataset.id == value){
      recetteZZ.style.display = "block"
 }
  

console.log(value)


};
// Envoyer un tableau. 







