// Get the modal
let cmModal = document.getElementById('cm-modal');
let csModal = document.getElementById('cs-modal');
let mpModal = document.getElementById('mp-modal');
let avModal = document.getElementById('av-modal');
let closeModal = document.getElementsByClassName('close');

// Get the button that opens the modal
let cmLink = document.getElementById('cm-link');
let csLink = document.getElementById('cs-link');
let mpLink = document.getElementById('mp-link');
let avLink = document.getElementById('av-link');

// When the user clicks the button, open the modal
cmLink.addEventListener('click', () => {
  cmModal.style.display = 'block';
  // console.log(modal);
});

csLink.addEventListener('click', () => {
  csModal.style.display = 'block';
  // console.log(modal);
});

mpLink.addEventListener('click', () => {
  mpModal.style.display = 'block';
  // console.log(modal);
});

avLink.addEventListener('click', () => {
  avModal.style.display = 'block';
  // console.log(modal);
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == cmModal || event.target == closeModal[0]) {
    cmModal.style.display = 'none';
  } else if (event.target == csModal || event.target == closeModal[1]) {
    csModal.style.display = 'none';
  } else if (event.target == mpModal || event.target == closeModal[2]) {
    mpModal.style.display = 'none';
  } else if (event.target == avModal || event.target == closeModal[3]) {
    avModal.style.display = 'none';
  }
};

let menuButton = document.querySelector('.navbar__mobile__menu');
let navItems = document.querySelector('.navbar__nav');
let header = document.querySelector('.navbar');
let barHide = document.querySelector('.navbar__mobile__menu__bar:nth-child(1)');
let barLeft = document.querySelector('.navbar__mobile__menu__bar:nth-child(2)');
let barRight = document.querySelector(
  '.navbar__mobile__menu__bar:nth-child(3)'
);

menuButton.onclick = openMenu;

function openMenu() {
  navItems.classList.toggle('navbar__nav__toggle');
  barHide.classList.toggle('navbar__mobile__menu__bar__hide');
  barLeft.classList.toggle('navbar__mobile__menu__bar__cross');
  barRight.classList.toggle('navbar__mobile__menu__bar__across');

  let nav = document.querySelector('.navbar__nav__toggle');

  if (nav) {
    header.style.height = '100vh';
    header.style.overflow = 'hidden';
  } else {
    header.style.height = 'auto';
  }
}
