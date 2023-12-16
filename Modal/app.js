"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

const overlayEl = document.querySelector(".overlay");
const modalEl = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
    overlayEl.classList.remove("hidden");
    modalEl.classList.remove("hidden");
});

const closeModal = () => {
    overlayEl.classList.add("hidden");
    modalEl.classList.add("hidden");
};

closeBtn.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        overlayEl.classList.add("hidden");
        modalEl.classList.add("hidden");
    }
});