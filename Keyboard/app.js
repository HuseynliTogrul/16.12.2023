"use strict"

const insertEl = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    insertEl.innerHTML = `
        <div class="key">
            <h4>Event.key</h4>
            <p>${event.key}</p>
        </div>
        <div class="key">
            <h4>Event.keyCode</h4>
            <p>${event.keyCode}</p>
        </div>
        <div class="key">
            <h4>Event.code</h4>
            <p>${event.code}</p>
        </div>`
})