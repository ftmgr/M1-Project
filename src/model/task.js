class Task {
    constructor() {
        this.items = [];
        this.score = 0;
        this.punishment = 0;
        this.generateItems();
    }

    generateItems() {
        // Generate random items spread across the game screen
        // For simplicity, let's assume there are three types of items: party, irrelevant, and obstacles
        for (let i = 0; i < 10; i++) {
            const x = Math.floor(Math.random() * window.innerWidth);
            const y = Math.floor(Math.random() * window.innerHeight);
            const type = Math.random() < 0.5 ? 'party' : 'irrelevant';
            this.items.push({ x, y, type });
        }
    }

    checkCollision(cat) {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const dx = cat.x - item.x;
            const dy = cat.y - item.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 10) {
                if (item.type === 'party') {
                    this.score += 10;
                } else {
                    this.punishment += 5;
                }
                // Remove collected item
                this.items.splice(i, 1);
            }
        }
    }
}