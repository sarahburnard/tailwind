let swiper = null;

swiperInit();

window.addEventListener('load', swiperInit);
window.addEventListener('resize', swiperInit);

function swiperInit() {
    swiper = new Swiper('.swiper', {
        loop: false,          
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        slidesPerView: 1.5,      
        breakpoints: {
            768: {  
                slidesPerView: 3.7
             },
            1024: {  
               slidesPerView: 4.7
            },
          }
      });
}