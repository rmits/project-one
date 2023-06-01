# Interactive Front-End Project
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

## Getting Started
This project is designed as an application with a dynamic search tool for desired recipe selection based on user's input of ingredint or collection of random recipes, so user will never run out of ideas for cooking and eating!
This project has been deployed to GitHub Pages. To get this project up and running, you can follow the deployment link.Or, download from gihub repository links mentioned below

* GitHub Repository: https://github.com/rmits/project-one.git
* Deployed URL: https://rmits.github.io/project-one/

Main page with randomly generated recipes API
![image](https://github.com/rmits/project-one/assets/130412307/91f173f5-93f7-4bd0-abb6-f26e58271e93)
it contains search widget and button plus recipes cards with recipes picture, text and "View recipe" button to navigate to recipe link

![image](https://github.com/rmits/project-one/assets/130412307/b9300cce-567a-4feb-b759-efd7006a08af)

Search by ingredients is call to a second API that accepts user's input and by click on the button pulls on the page collection of recipes related to the search
![image](https://github.com/rmits/project-one/assets/130412307/56691795-5081-47db-a698-8581590ecc39)
searching parameters are being kept in search widget with local storage 

![scrummy_food](https://github.com/rmits/project-one/assets/130412307/03c19070-85e3-4119-9b64-547ec16a40c3)





## Project requirements: 
The two server side APIs used were from spoonacular which are <a href="https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY2}">randomly generated recipe on main page for someone who feels creative and adventurou</a> and <a href="https://api.spoonacular.com/recipes/random?number=9&apiKey=${API_KEY2}">search option based on ingredients by user's to get recipes suggestions </a>
<br/>

## Project Features: 
* CSS file using: 
<a href="https://fonts.googleapis.com/css2?family=Lobster&display=swap">Google Fonts</a>

* JavaScript file: 
Our JS file contained the Async/Await syntax which helps a function in javascript to return a promise and wait for promise respectively. To read more on this <a href="https://www.w3schools.com/js/js_async.asp#:~:text=async%20makes%20a%20function%20return,function%20wait%20for%20a%20Promise">W3schools</a>

* This project emphasizes the use of using Javascript with two server side APIs to make dynamic changes to HMTL and CSS documents 

## Build with: 
html, css, javaScript


# Some of the challenges we encountered working on this project are:

<p>We encountered multiple blockers during the implementation of the search engine feature of our app ranging from unresponsive APIs to multiple bugs in our lines of code. Thankfully Our TA Ringo was there to teach us how to debug codes line by line and find breaking point(s)in our codes using chrome dev tools.</p>

<p>We called the API Key so much while testing that we each had to sign up for API Keys to alternate with for whenever we got a 429 error.A 429 error stands for too many requests in a short period of time to an API.</p>
<p>When the CSS for our second API wasn’t responsive our Instructor Rommel suggested we create separate sets of HTML and CSS codes to assign to its function. This absolutely worked!</p>
<a href="https://developers.google.com/webmaster-tools/v1/errors">Google search console API</a> has an article on HTTPS status code and their meaning which helped in understanding why we kept getting the 429 error, what it meant and ways to avoid or prepare for it.



## Credits:
* Anne Mary Wynter
* Andy Lin
* Oyindamola Jongbo
* Ryan Mitchell

