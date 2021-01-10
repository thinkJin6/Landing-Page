const btnToggle = document.getElementById('toggle');
const btnClose = document.getElementById('close');
const btnOpen = document.getElementById('open');
const modal = document.getElementById('modal');

// Toggle nav
btnToggle.addEventListener('click', function () {
  document.body.classList.toggle('show-nav');
});

// Show modal
btnOpen.addEventListener('click', function () {
  modal.classList.add('show-modal');
});

// Hide modal
btnClose.addEventListener('click', function () {
  modal.classList.remove('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', function (e) {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});
