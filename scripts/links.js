const baseURL = "https://ctegbert.github.io/wdd230/";
const linksURL = "https://ctegbert.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

function displayLinks(weeks) {
    const learningActivities = document.getElementById("learning-activities");
    learningActivities.innerHTML = ""; // Clear existing content

    weeks.forEach(week => {
        const weekElement = document.createElement("div");
        weekElement.classList.add("week");

        const weekHeading = document.createElement("h3");
        weekHeading.textContent = `Week ${week.week}`;

        const activitiesList = document.createElement("ul");
        week.links.forEach(activity => {
            const activityItem = document.createElement("li");
            const activityLink = document.createElement("a");
            activityLink.href = baseURL + activity.url;
            activityLink.textContent = activity.title;
            activityItem.appendChild(activityLink);
            activitiesList.appendChild(activityItem);
        });

        weekElement.appendChild(weekHeading);
        weekElement.appendChild(activitiesList);

        learningActivities.appendChild(weekElement);
    });
}
