document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();
    document.getElementById("contactForm").addEventListener("submit", submitContactForm);
});

function fetchProjects() {
    fetch("/api/project/all")
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById("project-list");
            projectList.innerHTML = "";
            data.forEach(project => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project");
                projectElement.innerHTML = `
                    <h3>${project.titel}</h3>
                    <p>${project.description}</p>
                    <a href="${project.githubLink}" target="_blank">GitHub</a>
                `;
                projectList.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Error fetching projects:", error));
}

function submitContactForm(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("/api/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => console.error("Error sending message:", error));
}
