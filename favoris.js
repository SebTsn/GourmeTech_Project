let value = localStorage.getItem('recetteFav')
let favNone = document.querySelector(".favorisNone")

console.log(favNone)

//Supprimer la phrase : 

if(value){

    favNone.style.display = "none";


}

if(!value){
    let favDisplay = document.querySelector(".favoris")
    favDisplay.style.display = "none"
}


function addFavoris() {

    
    let recetteZZ = document.querySelectorAll(".recetteF")

    console.log(value)
    if (value){

        let k = value.split(",")

        console.log(k)

        recetteZZ.forEach(function(elementRecette){
            k.forEach(function(el){
                if (el == elementRecette.dataset.id){

                    elementRecette.style.display = "flex"

                }
            })


        
         })

    }
  
  };
  
    addFavoris()


    let recetteZZ = document.querySelectorAll(".recetteF")
    let hearts = document.querySelectorAll(".heartDis")

    hearts.forEach(function(heart){

        heart.addEventListener("click", function (event) {

            let target = event.target.parentElement
            console.log(target)
            let targetZ = target.dataset.id
            console.log(targetZ)

            // Supprimer le DATASET  : 

            let data = localStorage.getItem('recetteFav').split(",")


            console.log(data)

            let index = data.indexOf(targetZ);
            console.log(index);

            data.splice(index, 1)


            console.log(data)

            localStorage.setItem('recetteFav', data);
            })
        })    
    

        