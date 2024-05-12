// getDates.js

// Function to set copyright year and last modified date
function setFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Colton Egbert, USA";
    document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;
}

// Call the function when the document is loaded
window.onload = setFooterInfo;

// Get dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Add click event listener to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    // Toggle dark mode class on <main>
    document.body.classList.toggle('dark-mode');
});

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
