const swiper = new Swiper('.wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickabele: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints 
    breakpoints: {
        0: {
            slidesPerView: 1,
        }
    }
  });