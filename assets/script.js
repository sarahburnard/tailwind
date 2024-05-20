
 
 

let init = false;
let swiper = null;

swiperInit();
window.addEventListener('resize', swiperInit);
function swiperInit() {
  if(window.innerWidth<768) {
    if(!init) {
      init = true;
      swiper = new Swiper('.swiper',{
        spaceBetween: 40,
        pagination:{
          el:'.swiper-pagination',
          bulletActiveClass:'dot--active',
          bulletClass:'dot'
        }
      });
    }
  } else if (init){
    swiper.destroy();
    init = false;
  }
}