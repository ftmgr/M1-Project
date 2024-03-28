class Task {
    constructor() {
        this.items = [];
        this.score = 0;
        this.live = 3;
        this.collectedItems = [];
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
                    this.collectedItems.push(item);
                    if (this.collectedItems.length === this.items.length) {
                        console.log('We collected all the items!');
                    }

                    // this.checkCompletion();
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

    checkCompletion() {

        return this.items.every(object => collectedItems.includes(object));
    }

    reset(cat) {
        // Reset game state variables
        this.items = [];
        this.score = 0;
        this.live = 3;

        // Reset cat's position if needed
        // For example, you can set it to the initial position
        cat.x = 0;
        cat.y = 0;

        // Remove any dynamically created HTML elements related to objects in the game view
        const objectElements = document.querySelectorAll('item');
        console.log('Object elements:' + objectElements.length);
        objectElements.forEach(element => element.remove());
        console.log('Object elements are deleted..' + objectElements.length);
    }

}