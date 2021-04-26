/* DOM SELECTIONS */

const btn = document.querySelector("#btn");
const saveBtn = document.querySelector("#save-btn");
const ul = document.querySelector("#ul");
const divCounter = document.querySelector("#counter");
const form = document.querySelector("#stack");
const input = document.querySelector("#input");

/* GLOBAL VARIABLES */

let techCounter = 0; // (Displays the number of technologies being tracked by the user)

/* EVENT LISTENERS */

btn.addEventListener("click", createListItem);
saveBtn.addEventListener("click", saveStack);

/* FUNCTIONS */

function createListItem (e) {

    e.preventDefault();

    if (input.value === "") return;

    const listItem = document.createElement("li");
    listItem.classList.add("li-styles");
    listItem.addEventListener('click', deleteListItem);
    listItem.textContent = input.value;
    ul.appendChild(listItem);
    input.value = "";
    incrementCounter();
    showSaveButton();

}

function deleteListItem (e) {

    ul.removeChild(e.target);
    decrementCounter();
    hideSaveButton();

}

function incrementCounter () {

    techCounter++;
    divCounter.textContent = techCounter;

}

function decrementCounter() {

    techCounter--;
    divCounter.textContent = techCounter;

}

function showSaveButton () {

    if (saveBtn.classList.contains('show')) return;

    saveBtn.classList.remove('hide');
    saveBtn.classList.add('show');
    saveBtn.style.backgroundColor = "black";

}

function hideSaveButton () {

     if (divCounter.textContent == 0) saveBtn.className = 'hide';

}

function saveStack (e) {

    e.preventDefault();

    if (divCounter.textContent == 0) return;

    let savedStack = [];
    const stack = ul.childNodes;
    stack.forEach((node) => savedStack.push(node.textContent));
    localStorage.stack = savedStack;
    ul.innerHTML = "";
    divCounter.style.fontSize = "60px";
    divCounter.classList.add("counterMargin");
    divCounter.innerText = "Stack Saved! Never Stop Learning."
    removeButtons();
    showViewStackButton();

}

function removeButtons () {

    btn.className = "hide";
    saveBtn.className = "hide";
    form.removeChild(btn);
    form.removeChild(saveBtn);

}

function showViewStackButton() {

    let newButton = document.createElement("button");
    newButton.className = "view-btn";
    newButton.textContent = "View Stack";
    newButton.addEventListener("click", viewStack);
    form.appendChild(newButton);

}

function viewStack (e) {

    e.preventDefault();
    Array.from(localStorage.stack).forEach((stack) => {
    console.log(stack);
    })

}


/* MORE BELOW (CODE TO CLOSE OVER TECH COUNTER GLOBAL VARIABLE ) */


























// function operateTechCounter (divCounter.textContent) {
//
//      let techCounter = divCounter.textContent; // (Displays the number of technologies being tracked by the user)
//
//          function incrementCounter () {
//                techCounter++;
//                divCounter.textContent = techCounter;
//          }
//
//          function decrementCounter() {
//               techCounter--;
//               divCounter.textContent = techCounter;
//          }
//
// // The code below is supposed to go as follows: if a list item is added to the ul the tech counter shoul be incremented and vice versa if a list //item is removed from the ul
//
//         if (ul.appendChild) {
//
//            incrementCounter();
//
//         }
//
//         if (ul.removeChild) {
//
//            decrementCounter();
//
//         }
//
//  }
