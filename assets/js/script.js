const API_KEY = "5778367e5dfb4dcf8b6b1511a110cbe8";
// api key for the API https://api.spoonacular.com/
const recipeListEl = document.getElementById("recipe-list");

// function to display random recipes on the main page of the application

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  // recipe list element is originally created as an empty string, so when it's called it goes back to blank/to clear out
  recipes.forEach((recipe) => {
    // this part of function iterates through each element in the list and adding recipe with the image
    const recipeItemEl = document.createElement("li");
    // this constant creates new list 
    recipeItemEl.classList.add("recipe-item");
    // this part adds new elemnts to the list above by the class "recipe-item"
    recipeImageEl = document.createElement("img");
    // this part creates image element in html file 

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

// look here 
const searchForm=document.getElementById('searchForm');
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  query = e.target.querySelector("input").value;
  searchIngredients();
});

async function searchIngredients(query, number = 10, includeNutrition = false) {
  const baseUrl = `https://api.spoonacular.com/food/ingredients/search&apiKey=${API_KEY}`;
  
  // Prepare the query parameters
  const params = {
    API_KEY: API_KEY,
    query: query,
    number: number,
    includeNutrition: includeNutrition
  };

  // Construct the URL with query parameters
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  
  try {
    // Send the GET request to the API
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error occurred while fetching data from API');
    }
    
    // Parse the response as JSON
    const data = await response.json();
    
    // Return the search results
    return data.results;
  } catch (error) {
    console.error(error);
    // Handle error appropriately
  }
}
const query = "";
const number = 5;
const includeNutrition = true;

searchIngredients(API_KEY, query, number, includeNutrition)
  .then(results => {
    // Do something with the search results
    console.log(results);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });

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