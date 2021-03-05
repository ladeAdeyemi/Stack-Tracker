/* TECH COUNTER */

let techCounter = 0; // (Displays the number of technologies being tracked by the user)

/* DOM SELECTIONS */

const btn = document.querySelector("#btn");
const saveBtn = document.querySelector("#save-btn");
const ul = document.querySelector("#ul");
const divCounter = document.querySelector("#counter");
const input = document.querySelector("#input");

/* FUNCTIONS */

// Adds technology submitted in frontend field as a list item to the Ul and records the number of technologies entered

function createListItem (e) {

    e.preventDefault();
    // console.log(e.target);
    if (input.value === " ") return;
    let listItem = document.createElement("li");
    listItem.className = 'li-styles';
    listItem.textContent = input.value;
    listItem.classList.add("inline-block");
    ul.appendChild(listItem);
    input.value = " ";
    incrementCounter();
    showSaveButton();

}

function showSaveButton () {
    saveBtn.classList.remove('hide');
    saveBtn.classList.add('show');
}

function incrementCounter () {
    techCounter++;
    divCounter.textContent = techCounter;
}

// function saveStack () {
//
// }

/* EVENT LISTENERS */

btn.addEventListener("click", createListItem);
// saveBtn.addEventListener("click", saveStack);
