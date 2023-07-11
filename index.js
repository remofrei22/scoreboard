
let countEl = document.getElementById("count-el")

let count = 0

let saveEl = document.getElementById("save-el")
let resetEl = document.getElementById("reset-el")

function increment() {
    count = count + 1
    countEl.textContent = count 
}

function save(){
    let countDash = count + " - "
    saveEl.textContent += countDash
}

function reset(){
    count = 0
    countEl.textContent = count
}