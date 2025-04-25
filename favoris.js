function addFavoris() {

    let value = localStorage.getItem('recetteFav')
    
    console.log(value)
  
    let recetteZZ = document.querySelectorAll(".recetteF")
    // console.log(recetteZZ)
    // console.log(recetteZZ.dataset.id)

    // let f = value.includes(recetteZZ.dataset.id)

    // console.log(f)

    let k = value.split(",")

    recetteZZ.forEach(function(elementRecette){
        k.forEach(function(el){
            if (el == elementRecette.dataset.id){

                elementRecette.style.display = "block"
            }
        })


        
    })

  
  
  };
  
  addFavoris()


  // Envoyer un tableau dans le localStorage.
  // Pour séléctionner tous les élements DATAID
  // Utiliser INCLUDES pour vérifier si la valeur est présente dans le tableau.