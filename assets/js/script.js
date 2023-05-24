const API_KEY = "5778367e5dfb4dcf8b6b1511a110cbe8";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    const recipeImageEl = document.createElement("img");
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = "recipe image";

    const recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    const recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const recipeLinkEl = document.createElement("a");
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerText = "View Recipe";

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);

    recipeListEl.appendChild(recipeItemEl);
  });
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.target.querySelector("input").value;
  const results = await searchIngredients(query);
  displayRecipes(results);
});

async function searchIngredients(query, number = 10, includeNutrition = false) {
  const baseUrl = `https://api.spoonacular.com/food/ingredients/search?apiKey=${API_KEY}`;
  const params = {
    query: query,
    number: number,
    includeNutrition: includeNutrition
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error('Error occurred while fetching data from API');
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    // Handle error appropriately
  }
}

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
