const toggleButton = document.getElementById('darkModeSwitch');
const back = document.getElementById("content");

// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode) {
    back.classList.add('dark');
}

toggleButton.onclick = function () {
    back.classList.toggle('dark');

    // Save the current preference to localStorage
    localStorage.setItem('darkMode', back.classList.contains('dark'));
}