const projects = [
    {
        title: "TCarry",
        description: "TCarry is made easy to config. This resource was made in the standalone framework",
        github: "https://github.com/dummy3344434/TCarry"
    },

    {
        title: "TEngine",
        description: "TEngine was made easy to config. This resource was made in the standalone framework",
        github: "https://github.com/dummy3344434/TEngine/releases/tag/V0.0.2"
    },

    {
        title: "TEConomy",
        description: "Simple Economy system for fivem. This resource was made in the standalone framework",
        github: "https://github.com/dummy3344434/TEConomy/releases/tag/V0.0.1"
    }
];

function loadProjects() {
    const container = document.getElementById("projectContainer");

    projects.forEach(p => {
        container.innerHTML += `
        <div class="project">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.github}" target="_blank">View on GitHub</a>
        </div>
        `;
    });
}

loadProjects();
