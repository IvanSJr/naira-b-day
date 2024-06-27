function showMessage() {
    document.getElementById('message').textContent = "Parabéns, Italla! Que seu dia seja muito especial" +
        " e repleto de alegria. Que todos os seus sonhos se realizem e que você continue sendo essa pessoa incrível." +
        " Que nós possamos nos conhecer pessoalmente logo :D  Muitas felicidades, muita saúde e sucesso" +
        " nos seus objetivos!";
    launchFlowers();
}

function launchFlowers() {
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 100; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 2 + 's';
        flower.textContent = getRandomFlower();
        confettiContainer.appendChild(flower);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .flower {
            position: absolute;
            font-size: 24px;
            top: 0;
            animation: fall 5s linear infinite;
            color: #005ca9;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});

function getRandomFlower() {
    const flowers = ['🌸', '🌼', '🌻', '🌺', '🌷'];
    return flowers[Math.floor(Math.random() * flowers.length)];
}
