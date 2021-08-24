const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', function () {
  navbar.classList.toggle('show-menu');
  loginForm.classList.remove('show-form');
  searchForm.classList.remove('show-search');
});

const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('#login-btn');
loginBtn.addEventListener('click', function () {
  loginForm.classList.toggle('show-form');
  searchForm.classList.remove('show-search');
  navbar.classList.remove('show-menu');
});

const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
searchBtn.addEventListener('click', function () {
  searchForm.classList.toggle('show-search');
  loginForm.classList.remove('show-form');
  navbar.classList.remove('show-menu');
});

window.onscroll = () => {
  loginForm.classList.remove('show-form');
  searchForm.classList.remove('show-search');
  navbar.classList.remove('show-menu');
};
const themeBtn = document.querySelector('#theme-btn');
themeBtn.onclick = () => {
  themeBtn.classList.toggle('fa-sun');

  if (themeBtn.classList.contains('fa-sun')) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
};

const swiper = new Swiper('.review-slider', {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
