document.addEventListener("DOMContentLoaded", function () {
    const cat = new Cat(0, 0);
    const task = new Task();
    const view = new GameView(cat, task);
    const controller = new GameController(cat, view, task);


    controller.startGame();
});



class GameController {
    constructor(cat, view, task) {
        this.cat = cat;
        this.view = view;
        this.task = task;
        this.isPlaying = false;
        this.bindKeyHandlers();
        this.gameLoop();
    }

    bindKeyHandlers() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.cat.move(0, -8);
                    break;
                case 'ArrowDown':
                    this.cat.move(0, 8);
                    break;
                case 'ArrowLeft':
                    this.cat.move(-8, 0);
                    break;
                case 'ArrowRight':
                    this.cat.move(8, 0);
                    break;
            }
            this.view.render();
        });
    }

    startGame() {
        this.isPlaying = true;
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('game-end').style.display = 'none';
        document.getElementById('game-intro').style.display = 'block';

        document.getElementById('start-button').addEventListener('click', () => {

            console.log("start game");
            const gameContainer = document.getElementById('game-container');
            gameContainer.style.display = 'block';
            gameContainer.style.visibility = 'visible';

            const gameScreen = document.getElementById('game-screen');
            gameScreen.style.display = 'block';
            gameScreen.style.visibility = 'visible';

            const gameIntro = document.getElementById('game-intro');
            gameIntro.style.display = 'none';
            gameIntro.style.visibility = 'hidden';

            const gameEnd = document.getElementById('game-end');
            gameIntro.style.display = 'none';
            gameEnd.style.visibility = 'hidden';
            console.log("success");
        });
    }

    endGame() {
        this.isPlaying = false;
        if (this.task.checkLive()) {
            document.getElementById('start-screen').style.display = 'none';
            document.getElementById('end-screen').style.display = 'block';
            document.getElementById('game-screen').style.display = 'none';
            document.getElementById('end-screen').style.visibility = 'visible';

            const gameContainer = document.getElementById('game-container');
            gameContainer.style.display = 'none';
            gameContainer.style.visibility = 'hidden';

            const gameScreen = document.getElementById('game-screen');
            gameScreen.style.display = 'none';
            gameScreen.style.visibility = 'hidden';

            const gameIntro = document.getElementById('game-intro');
            gameIntro.style.display = 'none';
            gameIntro.style.visibility = 'hidden';

            const gameEnd = document.getElementById('game-end');
            gameEnd.style.display = 'block';
            gameEnd.style.visibility = 'visible';

            document.getElementById('end-score').innerHTML = 'Score: ' + this.task.score;
            document.getElementById('end-live').innerHTML = 'Live: ' + this.task.live;

            document.getElementById('restart-button').addEventListener('click', () => {
                this.restartGame();
            });
        }
    }

    restartGame() {
        this.isPlaying = true;
        //this.startGame();
        document.getElementById('start-screen').style.display = 'block';
        document.getElementById('end-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('end-screen').style.visibility = 'hidden';

        const gameContainer = document.getElementById('game-container');
        gameContainer.style.display = 'none';
        gameContainer.style.visibility = 'hidden';

        const gameScreen = document.getElementById('game-screen');
        gameScreen.style.display = 'none';
        gameScreen.style.visibility = 'hidden';

        const gameIntro = document.getElementById('game-intro');
        gameIntro.style.display = 'block';
        gameIntro.style.visibility = 'visible';

        const gameEnd = document.getElementById('game-end');
        gameEnd.style.display = 'none';
        gameEnd.style.visibility = 'hidden';
    }

    gameLoop() {
        setInterval(() => {
            this.task.checkCollision(this.cat);
            this.view.render(this.cat, this.task);
            this.endGame();
        }, 1000 / 60); // 60 FPS
    }
}