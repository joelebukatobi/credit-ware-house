// Get the modal
let faqModal = document.getElementById('faq-modal');

// Get the button that opens the modal
let faqLink = document.getElementById('faq-card');

let next = document.getElementById('next');
let prev = document.getElementById('prev');

// When the user clicks the button, open the modal
faqLink.addEventListener('click', () => {
  faqModal.style.visibility = 'visible';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == faqModal) {
    faqModal.style.visibility = 'hidden';
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

var faqModalSwiper = new Swiper('.faq-modal-swiper', {
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
});

var brandsSwiper = new Swiper('.faq-brands__carousel', {
  slidesPerView: 6,
  spaceBetween: 2,
  // loop: true,
  // loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    clickable: true,
  },
});

const brand = () => {
  if (viewPort.matches) {
    var brandsSwiper = new Swiper('.faq-brands__carousel', {
      slidesPerView: 2,
      spaceBetween: 1,
      autoplay: {
        delay: 2000,
      },
      pagination: {
        clickable: true,
      },
    });
  }
  // next.style.display = 'none';
  // prev.style.display = 'none';
};

viewPort = window.matchMedia('(max-width: 576px)');
brand(viewPort);
