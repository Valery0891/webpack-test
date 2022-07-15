import favImg from '../assets/icons/casino-roulette-wheel.ico';
import rouletteImg from '../assets/img/roulette.png';
import leftCatImg from '../assets/img/left-cat.png';
import rightCatImg from '../assets/img/right-cat.png';

const fav = document.querySelector('#fav-img');
const roulette = document.querySelector('.roulette-img');
const leftCat = document.querySelector('.left-cat');
const rightCat = document.querySelector('.right-cat');

fav.href = favImg;
roulette.src = rouletteImg;
leftCat.src = leftCatImg;
rightCat.src = rightCatImg;