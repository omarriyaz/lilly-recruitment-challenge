# Lilly Technical Challenge Documentation Template

**_Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary._**

## Approach

The first thing I did before I started coding is read through the README file carefully, to understand what the objectives of this project were. I read through the backend python file to understand how the API endpoints were implemented. After going through all of this plus the code for the frontend I understood that the project was focused mainly on JavaScript. Given that I do not have much experience with JavaScript, I watched a youtube tutorial on the basics of JavaScript to brush up on the syntax and working of the language. ("https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1322s")

I then began the challenge, starting with the setup, where I encountered my first problem. It was an easy fix, I couldnt run "./start.sh" on my terminal as the command wasnt given permission. I found the command to give the file permission on stack overflow ("chmod +x ./startup.sh") and then used the liveserver extension to open up the webpage on my browser.

I started the challenge with trying to display the list of medicines by making changes only to the script.js file. The plan was to start implementing each feature in the order of how it was in the backend code, and then change the HTML and CSS. I implemented the JS code in a way that it would dynamically add to the main tags in the HTML but after successfully implementing the display medicines function, I realised if I continued it would be a pain to change all of the HTML, JS and CSS all at once. So I redid the code I added into script.js, added in the sections in the HTML code and created a better looking interface into the CSS.

The order I followed was:

1. Add the display all medicines functionality by making changes to the JS, HTML and CSS files.
2. Add in the add medicine functionality by making changes to the JS, HTML and CSS files.
3. Add the update medicine price functionality by making changes to the JS, HTML and CSS files.
4. Add the delete medicine functionality by making changes to the JS, HTML and CSS files.
5. Update the backend to add the average price functionality by making changes to the Python file.
6. Add in the average price functionality by making changes to the JS, HTML and CSS files.
7. Add a search bar above the list of medicines to search for a single medicine by making changes to the JS, HTML and CSS files.
8. Small bug fixes and final changes

While coding I had to keep referring to documentation for JavaScript and CSS (as I do not have much experience in both) and had to use google to find the syntax for what I wanted to do. This was required early on into the challenge as once one functionality was added, the others followed the same structure. This was not the case for the changes in the backend as I am very familiar with Python.

## Objectives - Innovative Solutions

_For the challenge objectives, did you do anything in a particular way that you want to discuss? Is there anything you're particularly proud of that you want to highlight? Did you attempt some objectives multiple times, or go back and re-write particular sections of code? If so, why? Use this space to document any key points you'd like to tell us about._

As the objectives of the challenge were quite straight forward, there was not anything particularly special in the implementation of the code. But while writing certain functions I noticed small errors I had to change and rewrite. For example I noticed that in the backend fucntion for adding a medicine, there were no checks to stop adding duplicate medicines, and when there were duplicates, the delete functionality did not account for them (it would delete them one by one). So I decided to add in a check to make sure no duplicates were added to the database as this made more sense for the challenge.

Something else I had to constantly change was the layout of the UI. I settled on splitting the page into two sections, where the left section displayed all medicines, with a search bar up top to find the price for a specific medicine. The right half contained a 2x2 grid of all the add medicine, update price, delete medicine and average calculator sections. I made it so the design could be intuitive for a user to understand, adding in placeholder text and labels to also guide users when they enter data.

## Problems Faced

_Use this space to document and discuss any issues you faced while undertaking this challenge and how you solved them. We recommend doing this proactively as you experience and resolve the issues - make sure you don't forget! (Screenshots are helpful, though not required)_.

The only real problem I had with the challenge was my unfamiliarity with web development. While I am comfortable with backend programming, working with HTML, CSS, and JavaScript to create the frontend was new to me. Since the only issue I had was learning the syntax on the go while coding it up, there was not much of a learning curve, I quickly adapted by finding relevant documentation, tutorials, and examples, which allowed me to complete the challenge.

## Evaluation

_How did you feel about the challenge overall? Did some parts go better than others? Did you run out of time? If you were to do this again, and were given more time, what would you do differently?_

Overall I felt as if this challenge was fun and a great way to showcase full-stack development skills. Take home challenges make more sense than the typical leetcode style coding assessments and I can see why more companies challenge their candidates with them. I do thing I needed more time than what is really required as I was constantly searching up the syntax used for the frontend coding. If I were given more time I would dedicate it so making the UI better. The UI I implemented is simple and intuitive, but not really aesthetically pleasing. Another thing I would add if I had more time is to give the website more functionality, for example, filtering/sorting the medicines by name or price and being able to make edits to the changes of the medicines.
