'use scrict';

var playButton = document.querySelector('.main__btn'),
  playOnline = document.querySelector('.main__link-online'),
  playTrailer = document.querySelector('.nav__link--trailer'),
  modalBlock = document.querySelector('.modal'),
  closeModal = document.querySelector('.modal__close'),
  navButton = document.querySelector('.nav__button'),
  navList = document.querySelector('.nav__list');

function showElem(elem) {
  elem.style.display = 'block';
}

function hideElem(elem) {
  elem.style.display = 'none';
}

playButton.addEventListener('click', function () {
  showElem(modalBlock);
});

playOnline.addEventListener('click', function () {
  showElem(modalBlock);
});

playTrailer.addEventListener('click', function () {
  showElem(modalBlock);
});

closeModal.addEventListener('click', function () {
  hideElem(modalBlock);
});

navButton.addEventListener('click', function () {
  navButton.classList.toggle('nav__button-active');
  navList.classList.toggle('nav__list-db');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    hideElem(modalBlock);
  }
});
