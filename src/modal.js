// let openModal = document.getElementById('btn-open-modal');
// let modalImagen = document.getElementById('modal');
// let closeModal = document.getElementById('btn-close-modal');

// openModal.onclick = function () {
//   modalImagen.style.visibility = 'visible';
// };

// closeModal.onclick = function () {
//   modalImagen.style.visibility = 'hidden';
// };

// modalImagen.onclick = function () {
//   modalImagen.style.visibility = 'hidden';
// };


(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();