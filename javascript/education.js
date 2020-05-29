// Functions that shows the classes and hides the projects
function showClasses() {
    let classes = document.getElementById('classes');
    let projects = document.getElementById('projects');

    projects.style.display = 'none';
    classes.style.display = 'block';
}

// Functions that hides the classes and shows the projects
function showProjects() {
    let classes = document.getElementById('classes');
    let projects = document.getElementById('projects');

    classes.style.display = 'none';
    projects.style.display = 'block';
}

document.getElementById('class-selector').addEventListener('click', showClasses);
document.getElementById('project-selector').addEventListener('click', showProjects);