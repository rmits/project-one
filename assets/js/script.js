const API_KEY = "5778367e5dfb4dcf8b6b1511a110cbe8";
// api key for the API https://api.spoonacular.com/
const recipeListEl = document.getElementById("recipe-list");

// function to display random recipes on the main page of the application

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  // 
  recipes.forEach((recipe) => {
    // this part of function iterates through each element in the list and adding recipe with the image
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");
    recipeImageEl = document.createElement("img");

    // this part grabs images from the fetch, and then display it on our element
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    //this part grabs the titles of the fetch, and displays it on our element
    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(", ")}
    `;

    recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    // this part of the function appends API response such as data, which includes images, text, title and link to the recipe

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

// function for API call with the API key to get recipes. first it makes a call for a data, and awaiting for a response
// if call returns with no errors, then it displays data from the source
function getRecipes() {
  return fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.recipes;
    });
}

function init() {
  getRecipes()
    .then(function (recipes) {
      displayRecipes(recipes);
    });
}

init();