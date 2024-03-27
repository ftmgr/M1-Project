class GameView {
    constructor(cat) {
        this.cat = cat;
        this.catElement = document.getElementById('cat');
        this.task = task;
        this.itemElements = [];
    }

    render() {
        this.catElement.style.left = this.cat.x + 'px';
        this.catElement.style.top = this.cat.y + 'px';

        // Update and animate item positions
        task.items.forEach((item) => {
            let itemElement = document.getElementById(`item-${item.id}`);
            if (!itemElement) {
                itemElement = document.createElement('div');
                itemElement.id = `item-${item.id}`;
                itemElement.className = 'item';
                itemElement.style.left = item.x + 'px';
                itemElement.style.top = item.y + 'px';
                itemElement.classList.add(item.type);
                document.getElementById('game-screen').appendChild(itemElement);
                this.itemElements.push(itemElement);
            } else {
                const dx = cat.x - item.x;
                const dy = cat.y - item.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const speed = 2; // Adjust speed as needed

                if (distance > 10) { // Move item towards the cat
                    const angle = Math.atan2(dy, dx);
                    const vx = Math.cos(angle) * speed;
                    const vy = Math.sin(angle) * speed;

                    item.x += vx;
                    item.y += vy;
                    itemElement.style.left = item.x + 'px';
                    itemElement.style.top = item.y + 'px';
                } else { // Cat caught the item
                    if (item.type === 'party') {
                        task.score += 10;
                    } else {
                        task.punishment += 5;
                    }
                    const index = task.items.findIndex((i) => i.id === item.id);
                    task.items.splice(index, 1);
                    itemElement.remove();
                }
            }
        });

        // Update task status
        document.getElementById('score').innerText = 'Score: ' + task.score;
        // document.getElementById('punishment').innerText = 'Punishment: ' + task.punishment;
    }
}