// Get the progress bar element
const progressBar = document.querySelector('.progress-bar');

// Set the skill level (for example, 80%)
const skillLevel = 80;

// Update the width of the progress bar dynamically
progressBar.style.width = 80 + '%';

// Update the skill level text
document.querySelector('.skill-level').textContent = skillLevel + '%';
