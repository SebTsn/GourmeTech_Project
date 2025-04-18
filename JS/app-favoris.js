//! like //
const hearts = document.querySelectorAll(".heartDis");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ?  "🤍" : "❤️";


  });
});



//Supprimer les favoris : 

const disLikes = document.querySelectorAll(".recetteF")

disLikes.forEach((disLike) => {

    disLike.addEventListener(("click"), ()=> {
        disLike.style.display="none"


    })
})

let titreF = document.querySelector(".favorisNone")


for (i =)

if(disLikes){
    titreF.style.display="none"
} else {
    titreF.style.display="block"}
