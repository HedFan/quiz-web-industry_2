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
