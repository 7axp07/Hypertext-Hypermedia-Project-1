const toggleButton = document.getElementById('darkModeSwitch');
const back = document.getElementById("content");
const icon = document.getElementById("galleryIcon");

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    back.classList.add("dark");
    icon.classList.add("dark");
    toggleButton.classList.remove("dark-mode-toggle");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    back.classList.remove("dark");
    icon.classList.remove("dark");
    toggleButton.classList.add("dark-mode-toggle");
    localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode(); 
}

toggleButton.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode === "disabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});