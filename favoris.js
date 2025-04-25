

function addFavoris() {

    
  
    let recetteZZ = document.querySelectorAll(".recetteF")
    let value = localStorage.getItem('recetteFav')
    console.log(value)

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


  let recetteZZ = document.querySelectorAll(".recetteF")

  let hearts = document.querySelectorAll(".heartDis")
  hearts.forEach(function(heart){

          heart.addEventListener("click", function (event) {
            const datasetKey = event.target.dataset.id;


            let value = localStorage.getItem('recetteFav')

            console.log(datasetKey)

        
            console.log(value)

            localStorage.removeItem('recetteFav', datasetKey);






            // recetteZZ.addEventListener("click", function(event) {
                // Vérifier si l'élément cliqué a la classe "item"
                // if (event.target.classList.contains("recetteF")) {
                    // Récupérer la valeur de l'attribut data-key
                    // const datasetKey = event.target.dataset.id;
            
                    // Supprimer la valeur correspondante du localStorage
                    // if (datasetKey) {
                    //     localStorage.removeItem(datasetKey);
                    // }}})

                })})
            // Récupérer le tableau depuis le localStorage
        

            // recetteZZ.style.display = "none"
            // let k = localStorage.getItem('recetteFav').split(",")
        
            // // Vérifier si le tableau existe
            // if (k) {
            //     // Supprimer la valeur du tableau
            //     k = k.filter(item => item !== valeur);
        
            //     // Mettre à jour le tableau dans le localStorage
            //     localStorage.setItem("recetteFav", k);
        //     })
        // })
        //         let value = localStorage.getItem('recetteFav')
        //         console.log(value)
        //         let k = value.split(",")
        //         console.log(k)


        //         k.forEach(function(el){
        //             localStorage.removeItem('recetteFav');
        //             console.log(el)
                
        //         })

        //   })
//   )})





                // recetteZZ.forEach(function(elementRecette){
                //     k.forEach(function(el){
                //         if (el == elementRecette.dataset.id){
                            
                //             localStorage.removeItem(elementRecette.data[i]);

                            // elementRecette.style.display = "block"
                //         }
                //     })
                // })})

        //   recetteZZ.forEach(function(recette){
        //     recette.style.display = "none"

        //   })  


//           })  



//   })


  // Envoyer un tableau dans le localStorage.
  // Pour séléctionner tous les élements DATAID
  // Utiliser INCLUDES pour vérifier si la valeur est présente dans le tableau.