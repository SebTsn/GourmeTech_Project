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