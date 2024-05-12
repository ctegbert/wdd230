// getDates.js

// Function to set copyright year and last modified date
function setFooterInfo() {
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = "&copy; " + currentYear + " Colton Egbert, USA";
    document.getElementById("lastModified").innerHTML = "Last modified: " + document.lastModified;
}

// Call the function when the document is loaded
window.onload = setFooterInfo;
