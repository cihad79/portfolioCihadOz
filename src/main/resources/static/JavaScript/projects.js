document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();

    const projectForm = document.getElementById("projectForm");
    if (projectForm) {
        projectForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const newProject = {
                titel: document.getElementById("title").value,
                description: document.getElementById("description").value,
                technologies: document.getElementById("technologies").value,
                githubLink: document.getElementById("githubLink").value
            };

            fetch("/project/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProject)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to add project");
                    }
                    return response.json();
                })
                .then(() => {
                    alert("Project added successfully!");
                    projectForm.reset();
                    fetchProjects(); // Opdatér listen
                })
                .catch(error => {
                    console.error("Error adding project:", error);
                    alert("Something went wrong. Please try again.");
                });
        });
    }
});

function fetchProjects() {
    fetch("/project/all")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const projectList = document.getElementById("project-list");
            projectList.innerHTML = "";

            if (data.length === 0) {
                projectList.innerHTML = "<p class='text-muted'>No projects available.</p>";
                return;
            }

            data.forEach(project => {
                const projectItem = document.createElement("div");
                projectItem.classList.add("project-card");

                projectItem.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-1">${project.titel}</h5>
                        <button class="btn btn-sm btn-outline-info" onclick="toggleProjectDetails(${project.id}, this)">
                            More Info
                        </button>
                    </div>
                    <div id="details-${project.id}" class="ml-3 mt-2" style="display: none;">
                        <p><strong>Description:</strong> ${project.description}</p>
                        <p><strong>Technologies:</strong> ${project.technologies}</p>
                        <p><a href="${project.githubLink}" target="_blank">View on GitHub</a></p>
                    </div>
                `;

                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error("Error fetching projects:", error);
            document.getElementById("project-list").innerHTML = "<p class='text-danger'>Failed to load projects. Please try again later.</p>";
        });
}

function toggleProjectDetails(id, btn) {
    const detailsDiv = document.getElementById(`details-${id}`);
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
        btn.textContent = "Hide Info";
    } else {
        detailsDiv.style.display = "none";
        btn.textContent = "More Info";
    }
}
