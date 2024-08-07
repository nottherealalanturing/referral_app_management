'use strict'
// MODAL DECLERATION
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelector(".show-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
});

// for (let i = 0; i < btnsOpenModal.length; i++){

//     btnsOpenModal[i].addEventListener("click", openModal);

//     // btnCloseModal.addEventListener("click", closeModal);
//     overlay.addEventListener("click", closeModal);

//     document.addEventListener("keydown", function (e) {
//     if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//         closeModal();
//     }
//     })
// }