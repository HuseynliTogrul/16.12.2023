"use strict"

const inputEl = document.getElementById("input");
const btnEl = document.querySelector(".btn");
const ulEl = document.querySelector("ul");

const tasks = [];

btnEl.addEventListener("click", (event) => {
    event.preventDefault();

    const getValue = inputEl.value.trim();

    if (!getValue) {
        return;
    }

    tasks.unshift(getValue);
    displayTasks();

    inputEl.value = ""
})

const displayTasks = () => {
    ulEl.innerHTML = ""
    tasks.forEach((task, index, array) => {
        const liEl = document.createElement("li");
        const spanEl = document.createElement("span");
        const buttonEl = document.createElement("button");

        spanEl.textContent = task;
        buttonEl.textContent = "Delete task";
        buttonEl.className = "btn";

        buttonEl.addEventListener("click", () => {
            deleteTask(index);
        })

        liEl.insertAdjacentElement("afterbegin", spanEl)
        liEl.insertAdjacentElement("beforeend", buttonEl)
        ulEl.insertAdjacentElement("afterbegin", liEl)
    });
}

const deleteTask = (index) => {
    tasks.splice(index, 1);
    displayTasks();
};