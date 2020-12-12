let menuButton = document.querySelector('.navbar__mobile__menu');
let navItems = document.querySelector('.navbar__nav');
let header = document.querySelector('.navbar');
let barHide = document.querySelector('.navbar__mobile__menu__bar:nth-child(1)');
let barLeft = document.querySelector('.navbar__mobile__menu__bar:nth-child(2)');
let barRight = document.querySelector(
  '.navbar__mobile__menu__bar:nth-child(3)'
);
let brands = document.querySelector('.brands');

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

var brandsSwiper = new Swiper('.brands__carousel', {
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

let swiper = new Swiper('.testimonies__carousel', {
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  followFinger: true,
  // touchReleaseOnEdges: true,
  allowTouchMove: false,
});

const brand = () => {
  if (viewPort.matches) {
    var brandsSwiper = new Swiper('.brands__carousel', {
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
};

viewPort = window.matchMedia('(max-width: 576px)');
brand(viewPort);

let typed = new Typed('.type', {
  strings: [
    'helps you sign agreements for the loans you give to friends and family',
    'helps you sign agreements for the services you offer to clients on credit',
    'helps you prove that you are credit worthy to institutional lenders in the future',
    'helps you document your repayment habits',
    'helps you prove you are eligible for those loans',
    'helps you automatically follow up on recovery when your loans are due',
    'helps you inform authorities of bad creditors without the bureaucratic constraints',
  ],
  typeSpeed: 70,
  loop: true,
  loopCount: Infinity,
});
