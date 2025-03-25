document.addEventListener("DOMContentLoaded", () => {
    console.log("Jekyll site is running smoothly!");

    // Example: Highlight active navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Example: Alert message for important updates
    const alertMessage = document.createElement("div");
    alertMessage.textContent = "Welcome to Rosamby Royal Classroom! Stay updated with the latest results.";
    alertMessage.style.backgroundColor = "#ffdb4d";
    alertMessage.style.padding = "10px";
    alertMessage.style.textAlign = "center";
    alertMessage.style.fontWeight = "bold";
    document.body.insertBefore(alertMessage, document.body.firstChild);

    // Example: Dynamic Year Display in Footer
    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML += `<p>&copy; ${new Date().getFullYear()} Rosamby Royal Classroom. All rights reserved.</p>`;
    }

    // Example: Smooth scrolling for internal links
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Example: Toggle dark mode
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.margin = "10px";
    document.body.insertBefore(toggleButton, document.body.firstChild);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// Additional CSS for dark mode (if using the toggle button)
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .dark-mode {
            background-color: #333;
            color: #fff;
        }
        .dark-mode a {
            color: #4dc3ff;
        }
        .dark-mode p {
            color: #dcdcdc;
        }
    </style>
`);
