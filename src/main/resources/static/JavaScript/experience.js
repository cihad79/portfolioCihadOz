async function loadData() {
    try {
        const educationRes = await fetch('http://localhost:8090/School/all');
        const experienceRes = await fetch('http://localhost:8090/Experience/all');

        const education = await educationRes.json();
        const experience = await experienceRes.json();

        const eduContainer = document.getElementById("education-container");
        const expContainer = document.getElementById("experience-container");

        education.forEach(item => {
            eduContainer.innerHTML += createCard(item);
        });

        experience.forEach(item => {
            expContainer.innerHTML += createCard(item);
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

loadData();