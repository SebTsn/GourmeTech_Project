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

