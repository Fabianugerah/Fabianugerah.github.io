(function() {
  "use strict";

  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
})();

document.addEventListener('DOMContentLoaded', function() {
    const _swiper = new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,


        autoplay: {
            delay: 500, // Coba kurangi delay menjadi 0.5 detik (500ms) untuk transisi lebih cepat/responsif
            disableOnInteraction: false,
        },
        speed: 800, // Coba kurangi speed menjadi 0.8 detik (800ms) untuk transisi lebih cepat/responsif

        grabCursor: true,
        freeMode: false,

        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 25
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 40
            }
        }
    });
});