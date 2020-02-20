'use scrict';

var playButton = document.querySelector('.main__btn'),
  playOnline = document.querySelector('.main__link-online'),
  playTrailer = document.querySelector('.nav__link--trailer'),
  modalBlock = document.querySelector('.modal'),
  closeModal = document.querySelector('.modal__close');

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

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    hideElem(modalBlock);
  }
});
