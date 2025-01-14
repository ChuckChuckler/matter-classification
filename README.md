I have midterms this month. This is one of many projects I'm making to study.

# Classifying Matter

A simple Node.js game to practice classifying matter into elements, compounds, and mixtures.\
To play, click and drag the term that appears on screen to either the element, compound, heterogeneous mixture, and homogeneous mixture box.\
If the choice is correct, receive points according to the chosen difficulty.\
If the choice is incorret, or if the timer reaches 0, a game over screen will show.\
Use the button in the top left corner to toggle lightmode/darkmode.

## Features
- 160+ elements, compounds, and mixtures to classify
- Three different gamemodes, each with different time limits and point rewards
- Highscore tracking that carries over in browser
- Simple sign up/log in feature to save highscore
- Leaderboard to display top 5 scores of logged-in accounts
- Dark mode/Light mode switching

## Built With
- Frontend
  - HTML
  - CSS
  - JS
- Backend
  - Node.JS
  - MongoDB Atlas

<sup>This was my first time using MongoDB! :3</sup>

## Demo
The demo link can be found [here](https://matter-classification.onrender.com/).

### Disclaimers/Bugs
The layout should look good on most desktop devices and IPads, but I am unsure of whether or not it will look nice on a phone.\
As of now, you must get a GameOver for your score to save-- I didn't want to make too many requests to the database.\
The timer is a little broken because ClearInterval only clears the interval once it has finished its in-progress iteration.


