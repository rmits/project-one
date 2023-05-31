const API_KEY = "5778367e5dfb4dcf8b6b1511a110cbe8";
const API_KEY2 = "07419ae1c8f14d8d846b3e5773d17ea1";
const recipeListEl = document.getElementById("recipe-list");
const searchListEl = document.getElementById("search-list");

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

function displaySearchRecipes(result) {
  searchListEl.innerHTML = "";
  recipeListEl.innerHTML = "";
  result?.map((search) => {
    // issue starts here
  const searchItemEl = document.createElement("li");
  searchItemEl.classList.add("search-item");

    const searchImageEl = document.createElement("img");
    searchImageEl.src = search.image;
    searchImageEl.alt = "search image";

    const searchTitleEl = document.createElement("h2");
    searchTitleEl.innerText = search.title;

    const searchIngredientsEl = document.createElement("p");
    searchIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${search.usedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;

    const searchLinkEl = document.createElement("a");
    searchLinkEl.href = search.sourceUrl;
    searchLinkEl.innerText = "View Searched Recipe";

    searchItemEl.appendChild(searchImageEl);
    searchItemEl.appendChild(searchTitleEl);
    searchItemEl.appendChild(searchIngredientsEl);
    searchItemEl.appendChild(searchLinkEl);

    searchListEl.appendChild(searchItemEl);
  });
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = e.target.querySelector("input").value;
  // const results = await searchIngredients(query)

  // displaySearchRecipes(results); 
  searchIngredients(query)
  .then((results) => {
    displaySearchRecipes(results);
  })
  .catch((error) => {
    console.error(error);
  
  })}
);

async function searchIngredients(ingredients, number = 9, apiKey = API_KEY2) {
  const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY2}`;
  const params = {
    ingredients: ingredients,
    number: number,
    apiKey: apiKey
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error('Error occurred while fetching data from API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    // Handle error appropriately
  }
}

function getRecipes() {
  return fetch(
    `https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY2}`
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
