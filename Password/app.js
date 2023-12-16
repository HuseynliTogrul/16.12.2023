"use strict"

const inputIcon = document.querySelector(".input-icon");
const inputEl = document.getElementById("input");

inputIcon.addEventListener("click", () =>{
    if(inputEl.type === "password"){
        inputEl.type = "text";
        inputIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`
    }else{
        inputEl.type = "password";
        inputIcon.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
    }
})