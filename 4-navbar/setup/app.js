// Elements
const toggleElement = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.links');

// State
let show = false;

// Event Listeners
toggleElement.addEventListener('click', toggle);

// Functions
function toggle() {
  navLinks.classList.toggle('show-links');
}
