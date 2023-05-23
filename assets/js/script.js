const apiKey = "5778367e5dfb4dcf8b6b1511a110cbe8";
const url = `https://api.spoonacular.com/recipes/complexSearch`;
const searchResultDiv= document.getElementById(".search-result");
const container=document.querySelector(".container");
let searchQuery='';
// const searchForm = document.getElementById('search-form');


function getApi() {
    fetch(url, {headers: {"x-api-key":apiKey }})
    .then(function (response) {
        console.log(response.status);
        //  Conditional for the the response.status.
        if (response.status !== 200) {
          // Place the response.status on the page.
          responseText.textContent = response.status;
        }
        return response.json();
    })
    .then(function (data) {
        // Make sure to look at the response in the console and read how 404 response is structured.
        console.log(data);
      })};
getApi();

// Get the input field
var input = document.getElementById("inputText");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    console.log(event.target.value)
  }
});
