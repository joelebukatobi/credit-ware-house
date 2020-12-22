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

$("a[href^='#']").click(function (e) {
  e.preventDefault();

  var position = $($(this).attr('href')).offset().top;

  $('body, html').animate(
    {
      scrollTop: position,
    },
    700
  );
});

var brandsSwiper = new Swiper('.brands__carousel', {
  slidesPerView: 6,
  spaceBetween: 2,
  // loop: true,
  // loopFillGroupWithBlank: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    clickable: true,
  },
});

let swiper = new Swiper('.testimonies__carousel', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  // loop: true,
  // loopFillGroupWithBlank: true,
  followFinger: true,
  touchReleaseOnEdges: true,
  allowTouchMove: false,
});

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
if (cmModal) {
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
}

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

const faqBrand = () => {
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

const brands = () => {
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

viewPort = window.matchMedia('(max-width: 576px)');
brand(viewPort);
faqBrand(viewPort);
