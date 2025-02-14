document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.getElementById("themeToggle");
        const body = document.body;
        const icon = toggleButton.querySelector("i");
    
        // Apply stored theme
        if (localStorage.getItem("theme") === "light") {
            body.classList.add("light-mode");
            icon.classList.replace("fa-moon", "fa-sun");
        } else {
            body.classList.remove("light-mode"); 
            icon.classList.replace("fa-sun", "fa-moon");
        }
    
        // Toggle theme on button click
        toggleButton.addEventListener("click", function () {
            body.classList.toggle("light-mode");
    
            if (body.classList.contains("light-mode")) {
                icon.classList.replace("fa-moon", "fa-sun");
                localStorage.setItem("theme", "light");
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
                localStorage.setItem("theme", "dark");
            }
        });
    });
    