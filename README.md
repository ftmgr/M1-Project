# M1-Project

Project's name
Party Cat

Description
Your cat has invited to a birthday party! Your mission is to preparing the cat to the party as much as you can. You need to collect to the party items using Up, Down, Left and Right buttons. You need to avoid from the obstacle objects. Good luck! 

MVP
Cat can be controlled by up, down and right buttons on the keyboard.
If a party object and cat have collision, it is considered that cat collect that object.
Cat needs to avoid the obstacle using the same buttons.
If cat collects the other objects more than 3 times, game is over(Fail case).
If cat collects all the party objects game is successfully finished(Success case).
If the time is end before collecting all party objects, game is over(Fail case).? not there..


Backlog
List of features you might implement after the MVP

Data structure
List of classes and methods

Model 
    Cat.js
        constructor(x,y)
        move(dx,dy)
    Task.js
        constructor()
        generateItems()
        checkLive()
        checkCollision(cat)  
View
    GameView.js
        constructor(cat,task)
        render(cat,task)

Controller
    GameController.js
        constructor(cat, view, task)
        bindKeyHandlers() 
        startGame()
        endGame()
        restartGame()
        gameLoop()

States y States Transitions
Start view
Game view
End view
Restart view

Task
List of tasks in order of priority

Links
Trello Link
Slides Link
Github repository Link
Deployment Link