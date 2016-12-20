SELF CHALLENGE - December 19, 2016 - Chaining:
----------------------------------------------

You are given an API that commands a robot.
The API does not currently allow functions to be chainable (think jQuery, D3)

You are to write some code that allows those functions to be chainable.

You cannot edit the prototype functions at all.

Each of the robot's functions takes a callback function and executes an asynchronous operation

Each function calls console.log at the end of its execution

Your solution must be flexible enough to work with any order or number of commands

Functions must execute in the order they are called, and each function is called after the previous has finished.

For example:

robit.wakeUp().findTrash().pickupTrash().changeBabyDiapers().makeDinner().shutDown();
Must result in

"Woke up"
"Found trash"
"Picked up trash"
"Changed baby's diapers"
"Made dinner"
"Shut down for the day"


notes/observations: Although presented originally as a problem to test JavaScript skill, to me it felt more like a test of my programming logic that could just as easily been in PHP, Java, etc. (a lot of problems are like this though and often have multiple solutions)

URL: https://reflective-reason.gomix.me

Github: 