class Cat {
    constructor(xPosition, yPosition) {
        this.x = xPosition;
        this.y = yPosition;
    }

    move(dx, dy) {
        // Update cat position based on dx and dy
        const gameWidth = document.getElementById('game-screen').style.width;
        const gameHeight = document.getElementById('game-screen').style.height;


        this.x += dx;
        this.y += dy;
    }
}