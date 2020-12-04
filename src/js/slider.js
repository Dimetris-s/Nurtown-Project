let projectsSwiper = new Swiper('.swiper-container-projects', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> <span class="swiper-pagination-slash"></span> <span class="${totalClass}"></span>`
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        draggable: false
    }
  })

  let galerySwiper = new Swiper('.swiper-container-galery', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoheight: false,
    slidesPerGroup: 1,
  

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> <span class="swiper-pagination-slash"></span> <span class="${totalClass}"></span>`
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        draggable: false
    }
  })

  let sertificSwiper = new Swiper('.swiper-container-sertific', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoheight: false,
    slidesPerGroup: 1,
  

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> <span class="swiper-pagination-slash"></span> <span class="${totalClass}"></span>`
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        draggable: false
    }
  })

  let mainSwiper = new Swiper('.swiper-container-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 30,
    autoheight: true,
    slidesPerGroup: 1,
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> <span class="swiper-pagination-slash"></span> <span class="${totalClass}"></span>`
      }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        draggable: false
    }
  })