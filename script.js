// function for load data
const searchMeals = () => {
    const alphabet = document.getElementById("searchFeild").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${alphabet}`;
    //show Spinner
    toggleSpinner(true);
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

        // const mealInfo = `
        // <div onclick="idFunction(${meal.idMeal})">
        //     <div>
        //         <div>
        //             <img class="thumbImg" src="${meal.strMealThumb}" alt = "">
        //         </div>
        //         <div>
        //             <h3>${meal.strMeal}</h3>
        //         </div>
        //     </div>
        // </div>
        // `

        const mealInfo = `
            <div onclick="idFunction(${meal.idMeal})">
                <div class="row d-flex row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img class="thumbImg" src="${meal.strMealThumb}" alt = "">
                        <div class="card-body">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>
                </div>
            </div>
            `

        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);

        toggleSpinner(false);
    });

}


// function for display meal Ingredients
const idFunction = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    console.log(url);
    //show spinner
    toggleSpinner(true);
    //load data
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayIngredient(data.meals[0]);
        })

}
const displayIngredient = meal => {
    const ingredient = document.getElementById("displayIngredient");
    ingredient.innerHTML = "";
    const mealsIdDiv = document.createElement('div');
    const mealDivInfo = `
    <div style="background-color: white;" class="p-5">
    <div>
        <img src="${meal.strMealThumb}" alt="" srcset="">
        </div>
        <h2>${meal.strMeal}</h2>
        <p>${meal.strCategory}</p>
        <div>
            <h3>Meal Ingredients:</h3>
            <p>${meal.strIngredient1}</p>
            <p>${meal.strIngredient2}</p>
            <p>${meal.strIngredient3}</p>
            <p>${meal.strIngredient4}</p>
            <p>${meal.strIngredient5}</p>
            <p>${meal.strIngredient6}</p>
        </div>
    </div>`

    mealsIdDiv.innerHTML = mealDivInfo;
    ingredient.appendChild(mealsIdDiv);
    
    toggleSpinner(false)

}

//function for toggle spinner
const toggleSpinner = (show) => {
    const spinner = document.getElementById("loading-spinner");
    const meals = document.getElementById("mealsContainer");
    if (show) {
        spinner.classList.remove('d-none');
    }
    else {
        spinner.classList.add('d-none');
    }
}

//function for toggle spinner but it has some problem
const displaySpinner = () => {
    const spinner = document.getElementById("loading-spinner");
    const meals = document.getElementById("mealsContainer");
        spinner.classList.toggle('d-none');
        meals.classList.toggle('d-none');
}

//function for search on key
document.getElementById('searchFeild').addEventListener('keypress', function(event){
    if (event.key == 'Enter') {
        document.getElementById('searchMeal').click();
    }
});