// Dark Mode 

// function darkMode() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//      // Change l’emoji selon le thème
//      darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
//   }
 
// const darkModeButton = document.querySelector('.dark-mode');

// darkModeButton.addEventListener('click', darkMode);

// ! Mode Dark //

let theme = localStorage.getItem("theme");
const darkModeButton = document.querySelector('.dark-mode');


if (theme === "dark") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️";  
} else { darkModeButton.textContent = "🌙"; 
}


darkModeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        darkModeButton.textContent = "☀️";  
    } else {
        localStorage.setItem("theme", "light");
        darkModeButton.textContent = "🌙";  
    }
});



//! like //

const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
  });
});


//! NavBar Responsive //

const menuBtn = document.querySelector("#btn");
const liens = document.querySelector("#menu");
menuBtn.addEventListener('click', function() {
    liens.classList.toggle('show');
});


//! FAQ Accordéon //

// const btnFAQs = [...document.querySelectorAll('.btnFAQ')]

// btnFAQs.forEach(btnFAQ => btnFAQ.addEventListener("click", btnFAQsAnimation))

// function btnFAQsAnimation(e){

//     const contentFAQs = [...document.querySelectorAll(".contentFAQ")]

//     const indexToRemove = btnFAQs.findIndex(btnFAQ => btnFAQ.classList.contains("active-tab"))

//     btnFAQs[indexToRemove].classList.remove("active-tab");
//     contentFAQs[indexToRemove].classList.remove("active-tab-content");

//     const indexToShow = btnFAQs.indexOf(e.target)

//     btnFAQs[indexToShow].classList.add("active-tab");
//     contentFAQs[indexToShow].classList.add("active-tab-content");
// }

const btnFAQs = [...document.querySelectorAll('.btnFAQ')];

btnFAQs.forEach(btnFAQ => btnFAQ.addEventListener("click", btnFAQsAnimation));

function btnFAQsAnimation(e) {
    const contentFAQs = [...document.querySelectorAll(".contentFAQ")];

    const indexToRemove = btnFAQs.findIndex(btn => btn.classList.contains("active-tab"));
    if (indexToRemove !== -1) {
        btnFAQs[indexToRemove].classList.remove("active-tab");
        contentFAQs[indexToRemove].classList.remove("active-tab-content");
    }

    const indexToShow = btnFAQs.indexOf(e.currentTarget);
    btnFAQs[indexToShow].classList.add("active-tab");
    contentFAQs[indexToShow].classList.add("active-tab-content");
}

// e.currentTarget
// Ca fait toujours référence à l’élément sur lequel l’écouteur d’événement est attaché, donc ici le <button>, peu importe si tu cliques sur le <strong> à l’intérieur.
// e.target ne correspond pas à un élément de btnFAQs
// donc indexToShow vaut -1, ce qui cause des bugs ou aucun affichage.