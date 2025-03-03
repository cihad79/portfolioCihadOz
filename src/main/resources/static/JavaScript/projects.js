document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();
});

function fetchProjects() {
    fetch("/project/all") // Ensure this matches your backend URL
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
                const projectCard = document.createElement("div");
                projectCard.classList.add("col-md-4", "mb-4");
                projectCard.innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">${project.titel}</h5>
                            <button class="btn btn-info" onclick="showProjectDetails(${project.id})">More Info</button>
                            <div id="details-${project.id}" class="project-details" style="display:none; margin-top:10px;">
                                <p><strong>Description:</strong> ${project.description}</p>
                                <p><strong>Technologies:</strong> ${project.technologies}</p>
                                <a href="${project.githubLink}" class="btn btn-primary" target="_blank">View on GitHub</a>
                            </div>
                        </div>
                    </div>
                `;
                projectList.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error("Error fetching projects:", error);
            document.getElementById("project-list").innerHTML = "<p class='text-danger'>Failed to load projects. Please try again later.</p>";
        });
}

function showProjectDetails(id) {
    const detailsDiv = document.getElementById(`details-${id}`);
    if (detailsDiv.style.display === "none") {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
}
