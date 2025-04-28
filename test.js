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

 // GArder le coeur rouge si déjà en favoris : 
  //  const heartss = document.querySelectorAll(".heart");

  // let recetteZZ = document.querySelectorAll(".recetteF")
  // let k = value.split(",")

  //  recetteZZ.forEach(function(elementRecette){
  //   k.forEach(function(el){
  //     console.log(elementRecette.dataset.id)

  //       if (el == elementRecette.dataset.id){

  //         console.log(elementRecette.dataset.id)

  //         heart.textContent =  "❤️"

  //           // elementRecette.style.display = "block"

  //       }
    // })})

  //  heartss.forEach(function(event) {

  //    if(data.includes(event.target.dataset.id))

  //    })


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
        data.push(recette.dataset.id)

        localStorage.setItem('recetteFav', data);

        console.log(data)
  
    }})})

})});









