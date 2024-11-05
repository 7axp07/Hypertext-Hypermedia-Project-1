const toggleButton = document.createElement("b");
toggleButton.setAttribute("id", "darkModeSwitch");
const toggleImg = document.createElement("img");
toggleImg.setAttribute("src", "darkmode.svg");
toggleButton.appendChild(toggleImg);
const darkDiv = document.getElementById("darkModeDiv");
darkDiv.appendChild(toggleButton);

const back = document.getElementById("content");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    back.classList.add("dark");
    toggleButton.classList.remove("dark-mode-toggle");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    back.classList.remove("dark");
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