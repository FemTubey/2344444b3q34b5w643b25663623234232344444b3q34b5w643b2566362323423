const projects = [
    {
        title: "TCarry",
        description: "TCarry is made easy to config. This resource was made in the standalone framework",
        github: "https://github.com/FemTubey/TCarry/releases/download/V0.0.1/TCarry.zip"
    },

    {
        title: "TEngine",
        description: "TEngine was made easy to config. This resource was made in the standalone framework",
        github: "https://github.com/FemTubey/TEngine/releases/download/V0.0.2/TEngine.zip"
    },

    {
        title: "TEConomy",
        description: "Simple Economy system for fivem. This resource was made in the standalone framework",
        github: "https://github.com/FemTubey/TEConomy/releases/download/V0.0.1/TEConomy.zip"
    },

    {
        title: "TloadingScreen",
        description: "Loadingscreen with preset audio, video background. This resource was made in the standalone framework",
        github: "https://github.com/FemTubey/TLoadingScreen/releases/download/V0.0.1/TLoadingscreen.zip"
    },

    {
        title: "TAfk",
        description: "Simple Afk disconnect resource. This resource was made in the standalone framework",
        github: "https://github.com/FemTubey/TAfk/releases/download/V0.0.1/TAfk.zip"
    }
];

function loadProjects() {
    const container = document.getElementById("projectContainer");

    projects.forEach(p => {
        container.innerHTML += `
        <div class="project">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <a href="${p.github}" target="_blank">Download</a>
        </div>
        `;
    });
}

loadProjects();
