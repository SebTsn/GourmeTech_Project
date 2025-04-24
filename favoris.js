function addFavoris() {

    let value = localStorage.getItem('recetteFav')
  
    console.log(value)
  
    let recetteZZ = document.querySelector(".recetteF")
    console.log(recetteZZ)
    console.log(recetteZZ.dataset.id)
  
    if( recetteZZ.dataset.id == value){
      recetteZZ.style.display = "block"
    }
  
  
  console.log(value)
  
  
  };
  
 