class GameController {
    constructor(cat, view) {
        this.cat = cat;
        this.view = view;
        this.task = task;
        this.bindKeyHandlers();
        this.gameLoop();
    }

    bindKeyHandlers() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.cat.move(0, -1);
                    break;
                case 'ArrowDown':
                    this.cat.move(0, 1);
                    break;
                case 'ArrowLeft':
                    this.cat.move(-1, 0);
                    break;
                case 'ArrowRight':
                    this.cat.move(1, 0);
                    break;
            }
            this.view.render();
        });
    }

    gameLoop() {
        setInterval(() => {
            this.task.checkCollision(this.cat);
            this.view.render(this.cat, this.task);
        }, 1000 / 60); // 60 FPS
    }
}