# Interactive Frontend Project
<h1>Scrummy Food Recipes Application</h1>

## User Story

As A User 
I want a recipe Application with a search by ingredient feature.
So that I can make decisions on what to cook easily and have access to multiple recipes!

## Acceptance Criteria

<ul>
<li>GIVEN I need a food recipe app</li>
<li>WHEN I click on the app </li>
<li>THEN I see multiple food recipes</li>
<li>WHEN I refresh page </li>
<li>THEN I see new sets of food recipes</li>
<li>WHEN I search an ingredient	</li>
<li>THEN I see food recipes with that ingredient in them</li>
<li>WHEN I click on the button “view recipes”</li>
<li>THEN I see a detailed food recipe</li>
</ul>

# For this project we were required to use at least two server side APIs
The two server side APIs used were from spoonacular which are <a href="https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY2}">randomly generated recipe on main page for someone who feels creative and adventurious 
* search option based on ingridients by user's input to get recipies suggestions per user's input 
</a> and <a href="https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY2}">each option based on ingredients by user's input to get recipies suggestions per user's input</a>
<br/>
# Some of the challenges we encountered working on this project are:

<p>We encountered multiple blockers during the implementation of the search engine feature of our app ranging from unresponsive APIs to multiple bugs in our lines of code. Thankfully Our TA Ringo was there to teach us how to debug codes line by line and find breaking point(s)in our codes using chrome dev tools.</p>

<p>We called the API Key so much while testing that we each had to sign up for API Keys to alternate with for whenever we got a 429 error.A 429 error stands for too many requests in a short period of time to an API.</p>
<p>When the CSS for our second API wasn’t responsive our Instructor Rommel suggested we create separate sets of HTML and CSS codes to assign to its function. This absolutely worked!</p>
<a href="https://developers.google.com/webmaster-tools/v1/errors">Google search console API</a> has an article on HTTPS status code and their meaning which helped in understanding why we kept getting the 429 error, what it meant and ways to avoid or prepare for it.


# We got the font for the name of our app from
<a href="https://fonts.googleapis.com/css2?family=Lobster&display=swap">Google Fonts</a>
<p>Our JS file contained the Async/Await syntax which helps a function in javascript to return a promise and wait for promise respectively. To read more on this <a href="https://www.w3schools.com/js/js_async.asp#:~:text=async%20makes%20a%20function%20return,function%20wait%20for%20a%20Promise">W3schools</a></p>


