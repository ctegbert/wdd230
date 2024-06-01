// JavaScript for directory.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from members.json
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Once data is fetched, call function to populate directory
            populateDirectory(data);

            // Add event listener for toggle button
            const toggleButton = document.getElementById("toggleView");
            toggleButton.addEventListener("click", function () {
                toggleDirectoryView();
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function populateDirectory(members) {
    const directoryElement = document.getElementById("directory");
    directoryElement.innerHTML = ''; // Clear previous content

    // Iterate through each member and create HTML elements to display their information
    members.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.classList.add("member");

        // Construct member HTML content
        memberElement.innerHTML = `
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level}</p>
            <p>${member.other_information}</p>
        `;

        directoryElement.appendChild(memberElement);
    });
}

function toggleDirectoryView() {
    const directoryElement = document.getElementById("directory");
    const toggleButton = document.getElementById("toggleView");

    // Toggle between grid and list views
    directoryElement.classList.toggle("directory-grid");
    directoryElement.classList.toggle("directory-list");

    // Update toggle button text
    if (directoryElement.classList.contains("directory-grid")) {
        toggleButton.textContent = "Switch to List View";
    } else {
        toggleButton.textContent = "Switch to Grid View";
    }
}
