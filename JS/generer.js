
document.querySelector("#randomButton").addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        const recipe = data.meals[0];
        const ingredientsList = document.querySelector(".containerIngredientsR");
        ingredientsList.innerHTML = "";

        const titleR = document.querySelector(".titleR");
        titleR.textContent = recipe.strMeal;

        const imgR = document.querySelector(".randomI");
        imgR.setAttribute("src", recipe.strMealThumb);

        const categoryR = document.querySelector(".categoryR");
        categoryR.textContent = recipe.strCategory;

        const areaR = document.querySelector(".areaR");
        areaR.textContent = recipe.strArea;

        for (let i = 0; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {               
                const li = document.createElement("li");
                li.textContent = `${measure} ${ingredient}`;
                ingredientsList.appendChild(li);               
            }
        }

        const instructionsR = document.querySelector(".instructionsR");
        instructionsR.textContent = recipe.strInstructions
        instructionsR.style.whiteSpace = "pre-line";

        document.querySelector(".hiddenR").style.display = "block";

       //**Créer un PDF */

        document.querySelector("#generatePdf").addEventListener("click", () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            doc.setFontSize(16);
            doc.text("Recette: " + recipe.strMeal, 10, 10);

            doc.setFontSize(12);
            doc.text("Catégorie: " + recipe.strCategory, 10, 20);
            doc.text("Origine: " + recipe.strArea, 10, 30);

            doc.text("Ingrédients:", 10, 40);
            let yOffset = 50; // Début des ingrédients

            for (let i = 0; i <= 20; i++) {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                if (ingredient) {
                    doc.text(`${measure} ${ingredient}`, 10, yOffset);
                    yOffset += 10;
                }
            }

            doc.text("Instructions:", 10, yOffset);
            yOffset += 10;
            doc.text(recipe.strInstructions, 10, yOffset);

            // Télécharger le PDF
            doc.save(recipe.strMeal + ".pdf");
        });
    });
});
