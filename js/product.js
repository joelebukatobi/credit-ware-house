// Get the modal
let cmModal = document.getElementById('cm-modal');
let csModal = document.getElementById('cs-modal');
let mpModal = document.getElementById('mp-modal');
let avModal = document.getElementById('av-modal');

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
  if (event.target == cmModal) {
    cmModal.style.display = 'none';
  } else if (event.target == csModal) {
    csModal.style.display = 'none';
  } else if (event.target == mpModal) {
    mpModal.style.display = 'none';
  } else if (event.target == avModal) {
    avModal.style.display = 'none';
  }
};
