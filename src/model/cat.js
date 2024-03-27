class Cat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        // Update cat position based on dx and dy
        this.x += dx;
        this.y += dy;
    }
}