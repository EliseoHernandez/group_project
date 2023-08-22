const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");

function openModal() {
	modal.classList.remove("hide");
}

function closeModal(e, clickedOutside) {
	if (clickedOutside) {
		if (e.target.classList.contains("modal-overlay"))
			modal.classList.add("hide");
	} else modal.classList.add("hide");
}
function mostrar(){
    document.getElementById('image_milk').style.display = 'block';
	document.getElementById('dontshow').style.display = 'block';
    }
  
function ocultar(){
	document.getElementById('image_milk').style.display = 'none';
	document.getElementById('dontshow').style.display = 'none';
	}

openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);