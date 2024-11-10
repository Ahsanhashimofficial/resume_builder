// Access the DOM elements
var toggleButton = document.getElementById('toggle-button');
var skillsContainer = document.getElementById('skills-container');
// Function to toggle the visibility of the skills section
function toggleSkills() {
    // Toggle the display property between 'none' and 'block'
    if (skillsContainer.style.display === "none" || skillsContainer.style.display === "") {
        skillsContainer.style.display = "block";
    }
    else {
        skillsContainer.style.display = "none";
    }
}
// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleSkills);
