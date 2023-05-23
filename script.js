const apiKey = "5778367e5dfb4dcf8b6b1511a110cbe8";
let url = "https://api.spoonacular.com/recipes/complexSearch{apiKey}";


fetch(url, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
//   cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
