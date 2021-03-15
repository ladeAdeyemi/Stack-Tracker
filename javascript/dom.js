/* DOM SELECTIONS */

const btn = document.querySelector("#btn");
const saveBtn = document.querySelector("#save-btn");
const ul = document.querySelector("#ul");
const divCounter = document.querySelector("#counter");
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
        listItem.classList.add("inline-block", "li-styles");
        listItem.addEventListener('click', deleteListItem);
        // listItem.addEventListener('mouseover', showDelete);
        // listItem.addEventListener('mouseout', revert);
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

function incrementCounter () {

    techCounter++;
    divCounter.textContent = techCounter;

}

function decrementCounter() {

    techCounter--;
    divCounter.textContent = techCounter;

}

function saveStack (e) {

    e.preventDefault();

    let savedStack = []; // (Collects the technologies entered by the user when the save button is pressed)

    if (divCounter.textContent === "0") {

      return;

    } else {

      const stack = ul.childNodes;
      stack.forEach((node) => savedStack.push(node.textContent));
      console.log(savedStack);
      ul.innerHTML = "";
      // showStackSavedModal();
      divCounter.style.fontSize = "50px";
      divCounter.innerText = "Stack Saved."
      hideSaveButton();
      return;

    }

}

/*

function showStackSavedModal () {

}

*/

/*

 NOTE: When you sort out the above functionality (i.e. divCounter.innerText)
 in a modal, don't forget to change the "or" condition in hideSaveButton()

*/

// function showDelete() {
//     listItem.innerText = "X";
// }
//
// function revert() {
//   listItem.innerText = input.value;
// }

// class Stack {
//
//     constructor() {
//
//     }
//
//   sortStack() {
//     savedStack.sort();
//   }
// }

// import { useState } from 'react'
// import React from 'react'
//
// export default function HomePage (props) {
//
// const [name, setName] = useState('Olly');
//
//     return (
//       <div className="dr-stone">
//         <nav className="navBar">
//           <ul>
//               <li>About</li>
//               <li>Contact</li>
//           </ul>
//         </nav>
//       </div>
//     )
//
// }
