
const plusCoins = () => {
    let coinText = document.querySelector('.header__score')
        .querySelector('span').textContent,
        coinImage = document.querySelector('.header__score').querySelector('img');

    coinText = String(parseInt(coinText) + 100);
    if (coinText.length < 6) {
        while (coinText.length < 6) {
            coinText = '0' + coinText;
        }
    }

    coinImage.classList.add('plusCoin');

    document.querySelector('.header__score')
        .querySelector('span').textContent = coinText;
    setTimeout(() => coinImage.classList.remove('plusCoin'), 1100);
};

document.querySelectorAll('.card-item')
    .forEach(elem => elem.onclick = function(el) {
        const target = el.target;
        if (!target.classList.contains('clickedYet')) {
            target.parentElement.parentElement.querySelectorAll('.card-item')
                .forEach(item => {
                    item.classList.add('card-item--collapsed');
                    target.parentElement.style.zIndex = '3';

                    if (item.querySelector('img') !== target) {
                        item.style.zIndex = 2;
                    } else {
                        let srcItem = item.querySelector('img').getAttribute('src'),
                            rightNum = Number(srcItem.match(/\d{2,2}/)[0]);
                        const rightAnswer = (rightNum === 1) ? true : false;

                        if (rightAnswer) {
                            plusCoins();
                            document.querySelector('.play-arena__res-img')
                                .querySelector('img').setAttribute('src','/images/rightImg.png');
                            document.querySelector('.play-arena__res-img').style.display = 'flex';
                        } else {
                            document.querySelector('.play-arena__res-img')
                                .querySelector('img').setAttribute('src', '/images/falseImg.png');
                            document.querySelector('.play-arena__res-img').style.display = 'flex';
                        }
                    }
                    document.querySelector('.js_card-btn').classList.remove('hide');
                });
            target.classList.add('clickedYet');
        }
    });
const compareBtn = document.querySelector('.js_compare-btn');

const downCompare = (e) => {
    e.preventDefault();

    document.querySelectorAll('.card-item').forEach(elem => {
        if (elem.style.zIndex === '2') {
            elem.style.zIndex = '4';
        }
    });
    let attribute = document.querySelector('.play-arena__res-img')
        .querySelector('img').getAttribute('src') === '/images/falseImg.png' ? '/images/rightImg.png' : '/images/falseImg.png';
    document.querySelector('.play-arena__res-img')
        .querySelector('img').setAttribute('src', attribute);
};

const upCompare = (e) => {
    e.preventDefault();

    document.querySelectorAll('.card-item').forEach(elem => {
        if (elem.style.zIndex === '4') {
            elem.style.zIndex = '2';
        }
    });
    let attribute = document.querySelector('.play-arena__res-img')
        .querySelector('img').getAttribute('src') === '/images/falseImg.png' ? '/images/rightImg.png' : '/images/falseImg.png';
    document.querySelector('.play-arena__res-img')
        .querySelector('img').setAttribute('src', attribute);
};

compareBtn.addEventListener('mousedown', downCompare);
compareBtn.addEventListener('mouseup', upCompare);

document.onkeydown = (e) => {
    return e.code === 'ShiftLeft' ? downCompare(e) : true;
};
document.onkeyup = (e) => {
    return e.code === 'ShiftLeft' ? upCompare(e) : true;
};
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
//# sourceMappingURL=scripts.js.map
