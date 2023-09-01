## App Description:

- The purpose of this app is to keep track of the points for the user and their friends.

- On the home screen, the user is given the option to "Start New Game" and will then be able to select all the users they want, as well as create new ones.

- Created users need to be saved to the local storage, so that they do not need to re create them every time they start a new game or open the app.

- After they have started the game, and created their users, they will be able to score points within a round. There will be a button to "Add next Round", which will tally up the total points in that round for each user, as well as adding up all the total rounds so far.

- There will be a button that says "End game", which will render a popup of all the total points earned for each user, and two options, "View Details" and "New Game".

- If they tap "New Game", they will be asked if they want to edit users or not.

- There will be 2 ways a user can add ponts. 1) The user can tap a button which will quickly add points to that user (will be +1 as default but will have an option to change the increment amount) 2) The user will be able to manuall enter the ponts for the user (click the button, enter the number of points, hit okay).

- The user will also be able to choose a color for each coresponding user.

## Incomplete Tasks:

- Create a "tab page" (3 lines in corner) to use as your navigation. Add the following pages: New Game, Players (Edit/Add Players, and Select Player Color), Increment Amount.

- Create a button to "Start New Game", which gives a pop up (Something better than an alert, if possible), prompting the user to select which users are playing from the saved storage. Or they have an option to add a new user.
- After the user taps "Start New Game", and selects users, automatically take them to a new page where the game score is tracked. This page should not be accessible from anywhere else on the app.

- Game Score Page: Display each player with their score for the current round, and their total score for all the rounds so far.
- Game Score Page: There should also be 2 buttons on the same line as their name to increase their score (increment add, and manual add)
- Game Score Page: You will need to decide if it is better to do a horizontal or vertical view, or the option to switch between the two.
- Game Score Page: Finally, you will need to code the logic to have the scores be added correctly.

- Players Page: Display all the current players saved to storage.
- Players Page: Put a button at the top where the user can create a new player.
- When the user clicks the add new player button, they will be given a form where they can enter the players name and color choice. (This form popup should be the same as when the user adds a new player from the "New Game" page)

- Style/Color all pages

## Completed Tasks:

- Add a button which increments the score by 1
- Add a view, which shows the current score from the button presses
- Add a button which resets the score
- Give a pop up asking if the user is sure to reset the data
- Create some type of storage where the app remember the number
