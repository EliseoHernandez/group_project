const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.myModal');
const closeModal = document.querySelector('.closeModal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});