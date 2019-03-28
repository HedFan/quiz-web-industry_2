"use strict";

var plusCoins = function plusCoins() {
  var coinText = document.querySelector('.header__score').querySelector('span').textContent,
      coinImage = document.querySelector('.header__score').querySelector('img');
  coinText = String(parseInt(coinText) + 100);

  if (coinText.length < 6) {
    while (coinText.length < 6) {
      coinText = '0' + coinText;
    }
  }

  coinImage.classList.add('plusCoin');
  document.querySelector('.header__score').querySelector('span').textContent = coinText;
  setTimeout(function () {
    return coinImage.classList.remove('plusCoin');
  }, 1100);
};

document.querySelectorAll('.card-item').forEach(function (elem) {
  return elem.onclick = function (el) {
    var target = el.target;

    if (!target.classList.contains('clickedYet')) {
      target.parentElement.parentElement.querySelectorAll('.card-item').forEach(function (item) {
        item.classList.add('card-item--collapsed');
        target.parentElement.style.zIndex = '3';

        if (item.querySelector('img') !== target) {
          item.style.zIndex = 2;
        } else {
          var srcItem = item.querySelector('img').getAttribute('src'),
              rightNum = Number(srcItem.match(/\d{2,2}/)[0]);
          var rightAnswer = rightNum === 1 ? true : false;

          if (rightAnswer) {
            plusCoins();
            document.querySelector('.play-arena__res-img').querySelector('img').setAttribute('src', '/images/rightImg.png');
            document.querySelector('.play-arena__res-img').style.display = 'flex';
          } else {
            document.querySelector('.play-arena__res-img').querySelector('img').setAttribute('src', '/images/falseImg.png');
            document.querySelector('.play-arena__res-img').style.display = 'flex';
          }
        }

        document.querySelector('.js_card-btn').classList.remove('hide');
      });
      target.classList.add('clickedYet');
    }
  };
});
var compareBtn = document.querySelector('.js_compare-btn');

var downCompare = function downCompare(e) {
  e.preventDefault();
  document.querySelectorAll('.card-item').forEach(function (elem) {
    if (elem.style.zIndex === '2') {
      elem.style.zIndex = '4';
    }
  });
  var attribute = document.querySelector('.play-arena__res-img').querySelector('img').getAttribute('src') === '/images/falseImg.png' ? '/images/rightImg.png' : '/images/falseImg.png';
  document.querySelector('.play-arena__res-img').querySelector('img').setAttribute('src', attribute);
};

var upCompare = function upCompare(e) {
  e.preventDefault();
  document.querySelectorAll('.card-item').forEach(function (elem) {
    if (elem.style.zIndex === '4') {
      elem.style.zIndex = '2';
    }
  });
  var attribute = document.querySelector('.play-arena__res-img').querySelector('img').getAttribute('src') === '/images/falseImg.png' ? '/images/rightImg.png' : '/images/falseImg.png';
  document.querySelector('.play-arena__res-img').querySelector('img').setAttribute('src', attribute);
};

compareBtn.addEventListener('mousedown', downCompare);
compareBtn.addEventListener('mouseup', upCompare);

document.onkeydown = function (e) {
  return e.code === 'ShiftLeft' ? downCompare(e) : true;
};

document.onkeyup = function (e) {
  return e.code === 'ShiftLeft' ? upCompare(e) : true;
};

var gameObject = [{
  right: "01.25d918f0.png",
  falsen: "00.25d918f0.png",
  description: ""
}, {
  right: "01.aea106c6.png",
  falsen: "00.aea106c6.png",
  description: ""
}, {
  right: "01.230180dc.png",
  falsen: "00.230180dc.png",
  description: ""
}, {
  right: "01.299bb0c4.png",
  falsen: "00.299bb0c4.png",
  description: ""
}];
var nextBtn = document.querySelector('.js_next-btn');
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector('.play-arena__res-img').style.display = 'none';
  document.querySelectorAll('.card-item').forEach(function (elem) {
    var gameIndex = Math.floor(Math.random() * gameObject.length),
        cardIndex = Math.floor(Math.random() * 2);
    var cardGame = document.querySelectorAll('.card-item');

    if (cardIndex === 0) {
      cardGame[0].querySelector('img').setAttribute('src', "/images/".concat(gameObject[gameIndex].right));
      cardGame[1].querySelector('img').setAttribute('src', "/images/".concat(gameObject[gameIndex].falsen));
    } else {
      cardGame[1].querySelector('img').setAttribute('src', "/images/".concat(gameObject[gameIndex].right));
      cardGame[0].querySelector('img').setAttribute('src', "/images/".concat(gameObject[gameIndex].falsen));
    }

    elem.classList.remove('card-item--collapsed');
    elem.querySelector('img').classList.remove('clickedYet');
    elem.style.zIndex = '1';
  });
});
//# sourceMappingURL=all.js.map
