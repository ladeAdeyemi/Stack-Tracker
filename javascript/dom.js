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

    if (input.value === "") {

        return;

    } else {

        let listItem = document.createElement("li");
        listItem.classList.add("inline-block", "li-styles");
        listItem.addEventListener('click', deleteTech);
        listItem.textContent = input.value;
        ul.appendChild(listItem);
        input.value = "";
        incrementCounter();
        showSaveButton();
    }

}

function deleteTech (e) {
      ul.removeChild(e.target);
      decrementCounter();
}

function showSaveButton () {
    saveBtn.classList.remove('hide');
    saveBtn.classList.add('show');
    saveBtn.style.backgroundColor = "black";
}

function incrementCounter () {
    techCounter++;
    divCounter.textContent = techCounter;
}

function decrementCounter() {
  techCounter--;
  divCounter.textContent = techCounter;
}


// function saveStack () {
//
// }

/* EVENT LISTENERS */

btn.addEventListener("click", createListItem);
// saveBtn.addEventListener("click", saveStack);


// YOUR JAVASCRIPT FUNDAMENTALS ARE WEAK!

// OPERATORS (MATHEMATICAL, LOGICAL, COMPARISON, ASSIGNMENT), ARRAY METHODS, OBJECT METHODS (INCLUDING THE PARAMETERS THEY ACCEPT), DATA TYPES (BOOLEANS, NULL, UNDEFINED)

// GO BACK AND LEARN ABOUT THESE THINGS AGAIN! EXPERIMENT WITH HOW THEY CAN BE USED IN YOUR PROGRAM I.E. IMAGINE WHAT YOU COULD TELL THE COMPUTER TO DO BY USING THESE THINGS!
