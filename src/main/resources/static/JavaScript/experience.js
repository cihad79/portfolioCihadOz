async function loadData() {
    try {
        const educationRes = await fetch('http://localhost:8090/School/all');
        const experienceRes = await fetch('http://localhost:8090/Experience/all');

        const education = await educationRes.json();
        const experience = await experienceRes.json();

        const eduContainer = document.getElementById("education-container");
        const expContainer = document.getElementById("experience-container");

        // Education: vis som cards
        education.forEach(item => {
            eduContainer.innerHTML += createCard(item);
        });

        // Experience: vis som list items
        experience.forEach(item => {
            expContainer.innerHTML += createListItem(item);
        });

    } catch (error) {
        console.error("Error loading data:", error);
    }
}

function createCard(item) {
    return `
    <div class="card">
        <div class="year">${item.yearComplete}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    </div>
    `;
}

function createListItem(item) {
    return `
    <li class="list-group-item">
        <strong>${item.title}</strong><br>
        <small>${item.yearComplete}</small>
        <p class="mt-1 mb-0">${item.description}</p>
    </li>
    `;
}

loadData();
