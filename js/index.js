new Swiper('.swiper', {
  // loop: true,
  navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
    disabledClass: 'portfolio__arrow_disabled',
  },
  breakpoints: {
    480: {
      grid: {
        fill: 'row',
        rows: 2
      }
    },
    768: {
      slidesPerView: 2,
      grid: {
        fill: 'row',
        rows: 2
      }
    },
  }
})

$('.header__contacts-burger').click(function() {
  $('.header__contacts').slideToggle();
})

$('.present__order-btn').click(() => {
  $('.page__overlay_modal').fadeIn(400).css('display', 'flex');
})

$('.modal__close').click(() => {
  $('.page__overlay_modal').fadeOut(400);
})