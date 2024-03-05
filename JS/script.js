const letters = document.querySelectorAll('.letter');

letters.forEach((letter) => {
    floatAnimation(letter);

    letter.addEventListener('click', () => {
        floatAnimation(letter);
    });
});

function floatAnimation(letter) {
    const randomRotation = Math.floor(Math.random() * 10) + 1;
    const randomTranslationX = (Math.random() - 0.5) * window.innerWidth * 0.8;
    const randomTranslationY = (Math.random() - 0.5) * window.innerHeight * 0.8;

    letter.style.transition = 'transform 1s ease-out';
    letter.style.transform = `translate(${randomTranslationX}px, ${randomTranslationY}px) rotate(0deg)`;

    setTimeout(() => {
        letter.style.transition = 'transform 1s ease-out';
        letter.style.transform += ` rotate(${randomRotation}deg)`;
    }, 50); 
    letter.addEventListener('transitionend', () => {
        letter.style.transition = '';

        floatAnimation(letter);
    });
}



function resetLetterPosition(letter) {
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innerHeight * 0.8; 

    letter.style.transition = '';
    letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(0deg)`;
}