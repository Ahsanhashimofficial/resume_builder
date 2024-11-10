// Access the DOM elements
const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;
const skillsContainer = document.getElementById('skills-container') as HTMLElement;

// Function to toggle the visibility of the skills section
function toggleSkills(): void {
    // Toggle the display property between 'none' and 'block'
    if (skillsContainer.style.display === "none" || skillsContainer.style.display === "") {
        skillsContainer.style.display = "block";
    } else {
        skillsContainer.style.display = "none";
    }
}

// Add event listener to the toggle button
toggleButton.addEventListener('click', toggleSkills);
