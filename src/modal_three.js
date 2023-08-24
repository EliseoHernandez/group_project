
(() => {
    const refs = {
      openModalBtn: document.querySelector("[openModal2]"),
      closeModalBtn: document.querySelector("[closeModal2]"),
      modal: document.querySelector("[myModal2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("show2");
    }
  })();