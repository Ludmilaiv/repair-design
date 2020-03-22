document.addEventListener("DOMContentLoaded", (event) => {
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



});