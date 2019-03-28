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
    .forEach(elem => elem.onclick = function (el) {
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
                                .querySelector('img').setAttribute('src', '/images/rightImg.png');
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



