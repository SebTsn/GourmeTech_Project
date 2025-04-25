

document.querySelector("#randomButton").addEventListener("click", () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
        const recipe = data.meals[0];
        const ingredientsList = document.querySelector(".containerIngredientsR");
                ingredientsList.innerHTML = "";
       
        const titleR = document.querySelector(".titleR")
        titleR.textContent = recipe.strMeal

        const imgR = document.querySelector(".randomI")
        imgR.setAttribute("src", recipe.strMealThumb )

        const categoryR = document.querySelector(".categoryR")
        categoryR.textContent = recipe.strCategory

        const areaR = document.querySelector(".areaR")
        areaR.textContent = recipe.strArea

        for (let i = 0; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {               
                const li = document.createElement("li");
                li.textContent = `${measure} ${ingredient}`;
                ingredientsList.appendChild(li);               
            }
        }

        const instructionsR = document.querySelector(".instructionsR")
        instructionsR.textContent = recipe.strInstructions.split("\n").join(".\n\n")
        instructionsR.style.whiteSpace = "pre-line"

        document.querySelector(".hiddenR").style.display = "block"
    })
})






        // const ingredientsR1 = document.querySelector(".ingredientsR1")
        // ingredientsR1.textContent = recipe.strIngredient1

        // const ingredientsR2 = document.querySelector(".ingredientsR2")
        // ingredientsR2.textContent = recipe.strIngredient2

        // const ingredientsR3 = document.querySelector(".ingredientsR3")
        // ingredientsR3.textContent = recipe.strIngredient3

        // const ingredientsR4 = document.querySelector(".ingredientsR4")
        // ingredientsR4.textContent = recipe.strIngredient4

        // const ingredientsR5 = document.querySelector(".ingredientsR5")
        // ingredientsR5.textContent = recipe.strIngredient5

        // const ingredientsR6 = document.querySelector(".ingredientsR6")
        // ingredientsR6.textContent = recipe.strIngredient6

        // const ingredientsR7 = document.querySelector(".ingredientsR7")
        // ingredientsR7.textContent = recipe.strIngredient7

        // const ingredientsR8 = document.querySelector(".ingredientsR8")
        // ingredientsR8.textContent = recipe.strIngredient8

        // const ingredientsR9 = document.querySelector(".ingredientsR9")
        // ingredientsR9.textContent = recipe.strIngredient9

        // const ingredientsR10 = document.querySelector(".ingredientsR10")
        // ingredientsR10.textContent = recipe.strIngredient10

        // const measureR1 = document.querySelector(".measureR1")
        // measureR1.textContent = recipe.strMeasure1

        // const measureR2 = document.querySelector(".measureR2")
        // measureR2.textContent = recipe.strMeasure2

        // const measureR3 = document.querySelector(".measureR3")
        // measureR3.textContent = recipe.strMeasure3

        // const measureR4 = document.querySelector(".measureR4")
        // measureR4.textContent = recipe.strMeasure4

        // const measureR5 = document.querySelector(".measureR5")
        // measureR5.textContent = recipe.strMeasure5

        // const measureR6 = document.querySelector(".measureR6")
        // measureR6.textContent = recipe.strMeasure6

        // const measureR7 = document.querySelector(".measureR7")
        // measureR7.textContent = recipe.strMeasure7

        // const measureR8 = document.querySelector(".measureR8")
        // measureR8.textContent = recipe.strMeasure8

        // const measureR9 = document.querySelector(".measureR9")
        // measureR9.textContent = recipe.strMeasure9

        // const measureR10 = document.querySelector(".measureR10")
        // measureR10.textContent = recipe.strMeasure10



    