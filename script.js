// function for load data
const searchMeals = () => {
    const alphabet = document.getElementById("searchFeild").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${alphabet}`;
    // load data
    fetch(url)
        .then(res => res.json())
        .then(meals => displayMeals(meals.meals))
}

// function for display meals by search
const displayMeals = meals => {
    const mealsDiv = document.getElementById("mealsContainer");

    meals.forEach(meal => {

        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';


        mealDiv.innerHTML = `
        <div onclick="displayIngredient('${meals[0]}')" class="">
            <div>
                <div class = "mealImg">
                        <img class="thumbImg" src="${meal.strMealThumb}" alt = "">
                </div>
                <div class = "mealName">
                        <h3>${meal.strMeal}</h3>
                </div>
            </div>
            <div>
                <button onclick="">Ingredient</button>
            </div>
       </div>
       `;

        mealsDiv.appendChild(mealDiv);

    });

}


// function for display meal Ingredients

const displayIngredient = meal => {
    console.log(meal);
    const ingredient = document.getElementById("displayIngredient")

    mealDiv.innerHTML = `
    <h2 class="">${meal.strMeal}</h2>
    <p class="">${meal.strCategory}</p>
    <div class="">
      <img src="${meal.strMealThumb}" alt="" srcset="">
    </div>
    <div class="">
      <h3>Meal Ingredients:</h3>
      <p>${meal.strIngredient1}</p>
      <p>${meal.strIngredient2}</p>
      <p>${meal.strIngredient3}</p>
      <p>${meal.strIngredient4}</p>
      <p>${meal.strIngredient5}</p>
      <p>${meal.strIngredient6}</p>
    </div>`
        ;

    ingredient.appendChild(mealDiv);

}