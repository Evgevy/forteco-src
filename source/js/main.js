import { initAccordion } from './modules/accordion/init-accordion';
import { initHeaderAccordion } from './modules/header-accordion/init-header-accordion';
import { initCustomSelect } from './modules/custom-select/init-custom-select';
import { initHeader } from './modules/header/init-header';
import { initModals } from './modules/modal/init-modals';
import { initPhoneMask } from './modules/init-phone-mask';
import { initPhoneValidation } from './modules/init-phone-validation';
import { initInfoSlider } from './modules/init-info-slider';


window.addEventListener('DOMContentLoaded', () => {
  initHeader();

  window.addEventListener('load', () => {
    initHeaderAccordion();
    initModals();
    initCustomSelect();
    initAccordion();
    initPhoneMask();
    initPhoneValidation();
    initInfoSlider();
  });
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 20,
    }

  }
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

document.addEventListener('DOMContentLoaded', function () {
  var viewNameBoxes = document.querySelectorAll('.view__name-box');

  for (var i = 0; i < viewNameBoxes.length; i++) {
    viewNameBoxes[i].addEventListener('click', function () {
      var descBox = this.nextElementSibling;

      if (descBox.classList.contains('view__desc-box--open')) {
        descBox.classList.remove('view__desc-box--open');
        this.classList.remove('view__name-box--open');
      } else {
        descBox.classList.add('view__desc-box--open');
        this.classList.add('view__name-box--open');
      }
    });
  }
});

// $('.view__name-box').click(function(){
//   $(this).next('.view__desc-box').slideToggle();
// })



// const swiper = new Swiper('.service__slider', {
//   slidesPerView: 3,
//   spaceBetween: 40,
//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,
//   loop: true,
//   breakpoints: {
//     310: {
//       slidesPerView: 1,
//     },

//     450: {
//       slidesPerView: 1,
//     },

//     740: {
//       slidesPerView: 2,
//     },

//     1031: {
//       slidesPerView: 3,
//     },

//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },

//     1281: {
//       slidesPerView: 3,
//     },

//     1282: {
//       slidesPerView: 2,
//     },

//     1451: {
//       slidesPerView: 2,
//     },

//     1453: {
//       slidesPerView: 3,
//     },

//     1700: {
//       slidesPerView: 3,
//     },

//     1790: {
//       slidesPerView: 3,
//     }
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// $(function () {
//   const stickyHeaderTop = $('.news-block').offset().top;
//   $(window).scroll(function () {
//     if ($(window).scrollTop() >= stickyHeaderTop - 100) {
//       $('.news-block').css({ position: 'fixed', top: '0px', right: '0px' });

//     } else {
//       $('.news-block').css({ position: 'absolute', top: '0px', right: '0px' });

//     }
//   });
// });

// window.addEventListener('scroll', function () {
//   const footer = document.querySelector('footer');
//   const newsBlock = document.querySelector('.news-block');
//   const footerOffset = footer.getBoundingClientRect().top;


//   if (footerOffset <= window.innerHeight) {
//     newsBlock.classList.add('hidden');
//   } else {
//     newsBlock.classList.remove('hidden');
//   }
// });


// document.addEventListener('DOMContentLoaded', function () {
//   if ($('#sticker').length > 0) {
//     const sticker = $('#sticker').offset().top;

//     $(window).scroll(function () {
//       if ($(window).scrollTop() >= sticker) {
//         $('#sticker').css({ position: 'fixed', top: '130px', left: '0px' });
//       } else {
//         $('#sticker').css({ position: 'absolute', top: '100px', left: '0px' });
//       }
//     });
//   };

//   if ($('#sticker-m').length > 0) {
//     const stickerMobile = $('#sticker-m').offset().top;

//     $(window).scroll(function () {
//       if ($(window).scrollTop() >= stickerMobile - 500) {
//         $('#sticker-m').css({ position: 'fixed', top: '200px', left: '0px' });
//       } else {
//         $('#sticker-m').css({ position: 'absolute', top: '490px', left: '0px' });
//       }
//     });
//   };

// });





// var init = false;
// var swiper1;
// function swiperCard() {
//   if (window.innerWidth <= 850) {
//     if (!init) {
//       init = true;
//       swiper1 = new Swiper('.articles__slider', {
//         slidesPerView: 'auto',
//         spaceBetween: 30,
//         observer: true,
//         observeParents: true,
//         observeSlideChildren: true,
//         loop: true,
//         breakpoints: {
//           310: {
//             slidesPerView: 1,
//           },

//           601: {
//             slidesPerView: 2,
//           }
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         }
//       });
//     }
//   } else if (init) {
//     swiper1.destroy();
//     init = false;
//   }
// }

// swiperCard();
// window.addEventListener("resize", swiperCard);

// var caps = false;
// var swiper2;
// function swiperCardArticle() {
//   if (window.innerWidth <= 850) {
//     if (!caps) {
//       caps = true;
//       swiper2 = new Swiper(' .articles__slider.slider2', {
//         slidesPerView: 'auto',
//         spaceBetween: 30,
//         observer: true,
//         observeParents: true,
//         observeSlideChildren: true,
//         breakpoints: {
//           310: {
//             slidesPerView: 1,
//           },

//           670: {
//             slidesPerView: 2,
//           }
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev'
//         }
//       });
//     }
//   } else if (caps) {
//     swiper2.destroy();
//     caps = false;
//   }
// }

// swiperCardArticle();
// window.addEventListener("resize", swiperCardArticle);





var team = false;
var swiperTeam;
function swiperCardTeam() {
  if (window.innerWidth <= 850) {
    if (!team) {
      team = true;
      swiperTeam = new Swiper('.partners__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          310: {
            slidesPerView: 2,
          },

          560: {
            slidesPerView: 3,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (team) {
    swiperTeam.destroy();
    team = false;
  }
}

swiperCardTeam();
window.addEventListener("resize", swiperCardTeam);


var team1 = false;
var swiperTeam1;
function swiperCardTeam1() {
  if (window.innerWidth <= 1024) {
    if (!team1) {
      team1 = true;
      swiperTeam1 = new Swiper('.articles__slider', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          310: {
            slidesPerView: 1,
          },

          560: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (team1) {
    swiperTeam1.destroy();
    team1 = false;
  }
}

swiperCardTeam1();
window.addEventListener("resize", swiperCardTeam1);

// $(document).ready(function () {
//   if (window.innerWidth <= 1024) {
//     $('.pipe-machines__link').on('click', function (e) {
//       e.preventDefault();

//       const menu = $(this).next('.pipe-machines__sublist');
//       if (!menu.hasClass('show')) {
//         $('.pipe-machines__sublist').removeClass('show');
//         menu.addClass('show');
//       } else {
//         window.location.href = $(this).attr('href');
//       }

//       $('.pipe-machines__link').removeClass('pipe-machines__link--active');
//       $(this).addClass('pipe-machines__link--active');
//     });

//     $(document).on('click', function (e) {
//       if (!$(e.target).closest('.pipe-machines__link, .pipe-machines__sublist').length) {
//         $('.pipe-machines__sublist').removeClass('show');
//         $('.pipe-machines__link').removeClass('pipe-machines__link--active');
//       }
//     });
//   }

//   // if (window.innerWidth <= 1024) {
//   //   $('.pipe-machines__link').addEventListener('click', () => {
//   //     $('.pipe-machines__link').classList.remove('hover');
//   //     $('.pipe-machines__link').classList.add('active');
//   //   });

//   // };
// });




var docs = false;
var swiperDocs;
function swiperCardDocs() {
  if (window.innerWidth <= 860) {
    if (!docs) {
      docs = true;
      swiperDocs = new Swiper('.progress__slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        breakpoints: {
          310: {
            slidesPerView: 1,
          },

          670: {
            slidesPerView: 2,
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    }
  } else if (docs) {
    swiperDocs.destroy();
    docs = false;
  }
}

swiperCardDocs();
window.addEventListener("resize", swiperCardDocs);


// document.addEventListener('DOMContentLoaded', function () {
//   const video = document.getElementById('myVideo');
//   const playButton = document.querySelector('.single-video__icon');
//   if (playButton) {
//     playButton.addEventListener('click', function () {
//       if (video.paused) {
//         video.play();
//         playButton.style.display = 'none';
//       } else {
//         video.pause();
//       }
//     });

//   };

//   if (playButton) {
//     video.addEventListener('click', function () {
//       if (!video.paused) {
//         //video.pause();
//         playButton.style.display = 'none';
//       }
//     });

//   };

// });

// document.addEventListener('DOMContentLoaded', function () {
//   const video2 = document.getElementById('myVideo2');
//   const playButton = document.querySelector('.single-video__icon');
//   if (playButton) {
//     playButton.addEventListener('click', function () {
//       if (video2.paused) {
//         video2.play();
//         playButton.style.display = 'none';
//       } else {
//         video2.pause();
//       }
//     });

//   };

//   if (playButton) {
//     video2.addEventListener('click', function () {
//       if (!video2.paused) {
//         //video.pause();
//         playButton.style.display = 'none';
//       }
//     });

//   };

// });
// /*const mySwiper2Prev = document.querySelector('.swiper-button-prev-two')
// const mySwiper2Next = document.querySelector('.swiper-button-next-two')

//   navigation: {
//     nextEl: mySwiper2Next,
//     prevEl: mySwiper2Prev,
//   },
// });*/