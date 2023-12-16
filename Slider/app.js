"use strict";

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const sliderImage = document.querySelector(".slider-image")

const images = ["baku1", "baku2", "baku3", "baku4", "baku5"]

let value = 0;

rightBtn.addEventListener("click", () => {
    if (value < images.length - 1) {
        value++;
    } else {
        value = 0;
    }

    displayImages();
});

leftBtn.addEventListener("click", () => {
    if (value > 0) {
        value--;
    } else {
        value = images.length - 1;
    }

    displayImages();
});

const displayImages = () => {
    sliderImage.style.backgroundImage = `url("images/${images[value]}.jpg")`;
}

