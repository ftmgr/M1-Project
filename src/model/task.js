class Task {
    constructor() {
        this.items = [];
        this.score = 0;
        this.live = 3;
        this.generateItems();
    }

    generateItems() {
        // Generate random items spread across the game screen
        // For simplicity, let's assume there are two types of items: party and obstacles
        for (let i = 0; i < 50; i++) {
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            const type = Math.random() < 0.5 ? 'party' : 'obstacle';
            this.items.push({ x, y, type });
        }
    }

    checkLive() {
        if (this.live === 0) {
            console.log(`We don't have any life..`)
            return true;
        }
    }

    checkCollision(cat) {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const dx = cat.x - item.x;
            const dy = cat.y - item.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 50) {
                if (item.type === 'party') {
                    this.score += 10;
                }
                else {
                    this.live -= 1;
                }
                // Remove collected item
                this.items.splice(i, 1);
            }
            this.checkLive();
        }
    }

}