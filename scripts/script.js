let popupOpen = document.querySelector('.main__orderblock');

function openOpenPopup() {
  popupOpen.classList.add('main__orderblock-active');
}

let buttonRectangle = document.querySelector('.main__button');
buttonRectangle.addEventListener('click', openOpenPopup);

function closeOpenPopup() {
  popupOpen.classList.remove('main__orderblock-active');
}

let buttonPopupicon = document.querySelector('.main__crest');
buttonPopupicon.addEventListener('click', closeOpenPopup);