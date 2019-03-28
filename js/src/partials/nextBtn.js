const gameObject = [
    {
        right: "01.25d918f0.png",
        falsen: "00.25d918f0.png",
        description: ""
    },
    {
        right: "01.aea106c6.png",
        falsen: "00.aea106c6.png",
        description: ""
    },
    {
        right: "01.230180dc.png",
        falsen: "00.230180dc.png",
        description: ""
    },
    {
        right: "01.299bb0c4.png",
        falsen: "00.299bb0c4.png",
        description: ""
    }
];


const nextBtn = document.querySelector('.js_next-btn');

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector('.play-arena__res-img').style.display = 'none';

    document.querySelectorAll('.card-item').forEach(elem => {

        let gameIndex = Math.floor(Math.random() * gameObject.length),
            cardIndex = Math.floor(Math.random() * 2);

        let cardGame = document.querySelectorAll('.card-item');

        if (cardIndex === 0) {
            cardGame[0].querySelector('img')
                .setAttribute('src', `/images/${gameObject[gameIndex].right}`);
            cardGame[1].querySelector('img')
                .setAttribute('src', `/images/${gameObject[gameIndex].falsen}`);
        } else {
            cardGame[1].querySelector('img')
                .setAttribute('src', `/images/${gameObject[gameIndex].right}`);
            cardGame[0].querySelector('img')
                .setAttribute('src', `/images/${gameObject[gameIndex].falsen}`);
        }

        elem.classList.remove('card-item--collapsed');
        elem.querySelector('img').classList.remove('clickedYet');
        elem.style.zIndex = '1';
    })
});