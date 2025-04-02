const sections = [
  {
    title: "About Me",
    content: `
      <p>
        I'm a dedicated <strong>Datamatiker graduate</strong> with a strong passion for <strong>software development</strong> and <strong>problem-solving</strong>.
        I thrive in environments where I can apply my skills and learn through collaboration.
      </p>
      
      <p>
        My experience spans both <strong>frontend and backend development</strong>, including working with
        <strong>CI/CD pipelines</strong>, <strong>RESTful APIs</strong>, and <strong>cloud-based systems</strong>.
      </p>

      <p>
        I'm committed to continuous learning and enjoy exploring the latest tools, frameworks, and technologies
        to stay up to date in an ever-evolving tech world.
      </p>
    `
  },
  {
    title: "Skills",
    content: `
      <div class="mb-3">
        <h5 class="mb-2">Proficient</h5>
        <span class="badge badge-primary mr-2 mb-2">Java</span>
        <span class="badge badge-primary mr-2 mb-2">JavaScript</span>
        <span class="badge badge-primary mr-2 mb-2">HTML</span>
      </div>

      <div class="mb-3">
        <h5 class="mb-2">Experienced</h5>
        <span class="badge badge-info mr-2 mb-2">Node.js</span>
        <span class="badge badge-info mr-2 mb-2">React</span>
        <span class="badge badge-info mr-2 mb-2">Groovy</span>
        <span class="badge badge-info mr-2 mb-2">CSS</span>
      </div>

      <div>
        <h5 class="mb-2">Learning</h5>
        <span class="badge badge-light border mr-2 mb-2">Python</span>
      </div>
    `
  },
  {
    title: "Tools & Technologies",
    content: `
      <div class="mb-4">
        <h5>🧱 Frameworks</h5>
        <span class="badge badge-dark mr-2 mb-2">Spring Boot</span>
        <span class="badge badge-dark mr-2 mb-2">Express.js</span>
        <span class="badge badge-dark mr-2 mb-2">Thymeleaf</span>
        <span class="badge badge-dark mr-2 mb-2">Pandas</span>
        <span class="badge badge-dark mr-2 mb-2">Matplotlib</span>
        <span class="badge badge-dark mr-2 mb-2">Keras</span>
      </div>

      <div class="mb-4">
        <h5>🗄️ Databases</h5>
        <span class="badge badge-success mr-2 mb-2">MySQL</span>
        <span class="badge badge-success mr-2 mb-2">MongoDB</span>
      </div>

      <div class="mb-4">
        <h5>🛠️ Tools</h5>
        <span class="badge badge-secondary mr-2 mb-2">IntelliJ</span>
        <span class="badge badge-secondary mr-2 mb-2">VS Code</span>
        <span class="badge badge-secondary mr-2 mb-2">Git</span>
        <span class="badge badge-secondary mr-2 mb-2">Jenkins</span>
        <span class="badge badge-secondary mr-2 mb-2">Bitbucket</span>
        <span class="badge badge-secondary mr-2 mb-2">Jira</span>
        <span class="badge badge-secondary mr-2 mb-2">Docker</span>
        <span class="badge badge-secondary mr-2 mb-2">Azure</span>
      </div>

      <div>
        <h5>💻 Operating Systems</h5>
        <span class="badge badge-light border mr-2 mb-2">Windows</span>
        <span class="badge badge-light border mr-2 mb-2">macOS</span>
      </div>
    `
  },
  {
    title: "Languages & Interests",
    content: `
      <h5 class="mt-3">🗣️ Languages</h5>
      <ul>
        <li>🇩🇰 Danish – Native</li>
        <li>🇬🇧 English – Fluent</li>
        <li>🇹🇷 Turkish – Fluent</li>
      </ul>

      <h5 class="mt-4">💡 Interests</h5>
      <ul>
        <li>👨‍💻 Exploring new technologies & frameworks</li>
        <li>🌐 Participating in tech communities & networking</li>
        <li>⚙️ Building side projects & experimenting with code</li>
        <li>⚽ Watching & playing football</li>
        <li>👫 Quality time with friends and my fiancée</li>
      </ul>
    `
  },
  {
    title: "Why Work With Me?",
    content: `
      <p>
        I bring <strong>passion</strong>, <strong>consistency</strong>, and a <strong>growth mindset</strong> to every project.
        Whether working in a team or independently, I take pride in writing clean, maintainable code and always strive to improve.
      </p>
      <p>
        If you're looking for someone who is <strong>curious</strong>, <strong>reliable</strong>, and <strong>full of energy</strong> — I'm your guy!
      </p>
    `
  }
];

let currentIndex = 0;
const contentDiv = document.getElementById("infoContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const stepLabel = document.getElementById("stepLabel");

function updateContent() {
  const section = sections[currentIndex];

  // Fade animation
  contentDiv.classList.remove("fade-in");
  void contentDiv.offsetWidth; // trigger reflow
  contentDiv.classList.add("fade-in");

  contentDiv.innerHTML = `<h3>${section.title}</h3><div>${section.content}</div>`;
  contentDiv.style.minHeight = "220px";

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === sections.length - 1;

  const progressPercent = ((currentIndex + 1) / sections.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressBar.setAttribute("aria-valuenow", progressPercent);

  stepLabel.textContent = `Step ${currentIndex + 1} of ${sections.length}`;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateContent();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    updateContent();
  }
});

// First load
updateContent();
