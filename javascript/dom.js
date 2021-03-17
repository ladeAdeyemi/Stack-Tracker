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

    if (input.value === "") {

        return;

    } else {

        const listItem = document.createElement("li");
        listItem.classList.add("li-styles");
        listItem.addEventListener('click', deleteListItem);
        // listItem.addEventListener('mouseover', showStrikeThrough);
        // listItem.addEventListener('mouseout', removeStrikeThrough);
        listItem.textContent = input.value;
        ul.appendChild(listItem);
        input.value = "";
        incrementCounter();
        showSaveButton();

    }

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

    saveBtn.classList.remove('hide');
    saveBtn.classList.add('show');
    saveBtn.style.backgroundColor = "black";

}

function hideSaveButton () {

     if (divCounter.textContent === "0" || divCounter.textContent === "Stack Saved.") {

         saveBtn.className = 'hide';

     }

}

function saveStack (e) {

    e.preventDefault();

    if (divCounter.textContent === "0") {

        return;

    } else {

        let savedStack = []; // (Collects the technologies entered by the user when the save button is pressed)
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

}

function removeButtons () {

    btn.className = "hide";
    saveBtn.className = "hide";
    setTimeout(() => {
      form.removeChild(btn);
      form.removeChild(saveBtn);
    }, 1000);

}

function showViewStackButton() {

    let newButton = document.createElement("button");
    newButton.className = "view-btn";
    newButton.textContent = "View Stack";
    newButton.addEventListener('click', viewStack);
    form.appendChild(newButton);

}

function viewStack (e) {

    e.preventDefault();
    Array.from(localStorage.stack).forEach((stack)=> {
    console.log(stack);
    })
    
}

/*

function showStackSavedModal () {

}

*/

/*

 NOTE: When you sort out the above functionality (i.e. divCounter.innerText)
 in a modal, don't forget to change the "or" condition in hideSaveButton()

*/

// function showStrikeThrough() {
//     listItem.innerText = "X";
// When the user mousesover a listitem, I want the inner text to have a strikethrough and then when they mouseoff I want the strikethrough gone.
// }
//
// function removeStrikeThrough() {
//   listItem.innerText = input.value;
// }
