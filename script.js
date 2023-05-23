const apiKey = "5778367e5dfb4dcf8b6b1511a110cbe8";
const url = `https://api.spoonacular.com/recipes/complexSearch`;
// const searchForm=document.getElementById('form');
// const searchButton=document.getElementById("#submit");
const searchResultDiv= document.getElementById(".search-result");
const container=document.querySelector(".container");
let searchQuery='';

function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from being submitted and the page from refreshing
    
    const searchQuery = event.target.querySelector('input').value;
    console.log(searchQuery);
  }
  
  const searchForm = document.getElementById('#search-form'); //
  searchForm.addEventListener('submit', handleSubmit);
//   if (searchForm !== null) {
//     searchForm.addEventListener('click', myFunction);
//   }
  
   handleSubmit();
  ;


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

function searchRecepie(){

}


