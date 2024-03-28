class GameView {
    constructor(cat, task) {
        this.cat = cat;
        this.catElement = document.getElementById('cat');
        this.task = task;
        this.itemElements = [];
    }

    render(cat, task) {

        // Update cat position
        this.catElement.style.left = cat.x + 'px';
        this.catElement.style.top = cat.y + 'px';

        // Render items
        this.itemElements.forEach((element) => element.remove());
        this.itemElements = [];
        task.items.forEach((item) => {
            const itemElement = document.createElement('div');
            let image = document.createElement('img');
            image.src = '../images/confetti-8324.png';
            itemElement.className = 'item';
            itemElement.style.left = item.x + 'px';
            itemElement.style.top = item.y + 'px';
            itemElement.classList.add(item.type);
            itemElement.style.backgroundImage = image;
            document.getElementById('game-screen').appendChild(itemElement);
            this.itemElements.push(itemElement);
        });

        // Update task status
        document.getElementById('score').innerText = 'Score: ' + task.score;
        document.getElementById('live').innerText = 'Live: ' + task.live;
    }

}