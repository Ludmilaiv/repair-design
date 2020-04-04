/*document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  });

  closeBtn.addEventListener('click', switchModal);

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal'))
    {
      switchModal();
    } 
  })

  document.addEventListener('keydown', (event) =>{
    if (event.code == 'Escape' && modal.classList.contains('modal--visible')) {
      switchModal();
    }
  })



}); */
$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      btn = $('.button--up');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  modal.on('click', function (event) {
    if (event.target.classList.contains('modal'))
      {
        modal.toggleClass('modal--visible');
      } 
  });

  $(document).on('keydown', function (event) {
    if (event.code == 'Escape' && modal.hasClass('modal--visible')) {
      modal.toggleClass('modal--visible');
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.removeClass('button--hidden');
    } else {
      btn.addClass('button--hidden');
    }
  });

  btn.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left',prev.width() + 10)

  new WOW().init();

  //Валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userQuestion: "required"
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: "Заполните поле",
      userQuestion: {
        required: "Заполните поле",
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      }, 
      userPhone: "Заполните поле"
    }
  });


  //маска для телефона

  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"})

});