(() => {
    const refs = {
      openModalBtn: document.querySelector("[openModal]"),
      closeModalBtn: document.querySelector("[closeModal]"),
      modal: document.querySelector("[myModal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("show");
    }
  })();
