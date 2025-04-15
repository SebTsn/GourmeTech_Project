// Dark Mode 

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
     // Change l’emoji selon le thème
     darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  }
 
const darkModeButton = document.querySelector('.dark-mode');

darkModeButton.addEventListener('click', darkMode);

//! like //

const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    heart.textContent = heart.classList.contains("active") ? "❤️" : "🤍";
  });
});