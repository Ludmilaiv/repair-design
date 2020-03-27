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

});