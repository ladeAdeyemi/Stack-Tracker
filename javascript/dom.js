
/* IDEAS FOR APP

// Change the name and purpose of the App to Stack Tracker.

Let it be an application that is used to track web technologies that the user wants to learn or is learning

 1. Let the user be able to enter details about each technology they want to learn or are learning. make sure they can also update this data

 2. Add functionality that let's users keep track of their level of proficiency in a technology e.g. 50% proficiency 
 
 3. Look into preventing users from entering the same technology more than once (Form Validation 2)

 4. Let there be a "Finish" Button which appears after the first technology has been entered. When the button is clicked, let the program calculate the number of technologies and display a message to the user depending on how many tech have been added

 */

/* DOM SELECTIONS */

//Button
const btn = document.querySelector("#btn");

//Unordered Lists
const ul = document.querySelector("#ul");

//Empty Divs
const divCounter = document.querySelector("#counter");

//Form Input Fields
const input = document.querySelector("#input");

// Tech Counter
let techCounter = 0;

/* EVENT LISTENERS */

btn.addEventListener("click", createListItem);

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
    techCounter++;
    divCounter.textContent = techCounter;
    
}


/*switch(techCounter.textContent) {

    case 0: innerHTML = "You know nuthin', John Snow!";

    break;

    case 5: innerHTML = "Busy little bee, aren't you?";

    break;

    case 10: innerHTML = "A true dreamer. Good luck with that.";

    break;

    case 15: innerHTML = "Please refer to our Toll-Free Burnout Helpline.";

    break;

    default: innerHTML = "You know nuthin', Jon Snow!";
}*/
