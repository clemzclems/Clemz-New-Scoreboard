document.addEventListener("DOMContentLoaded", () => {
    console.log("Clemz Student Scoreboard is running smoothly!");

    // 1. Dark Mode Toggle
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
    });

    // 2. Active Link Highlight
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // 3. Dynamic Year in Footer
    document.getElementById("footer-year").textContent += ` © ${new Date().getFullYear()}`;

    // 4. Smooth Scrolling for Internal Links
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 5. Scroll-to-Top Button
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "↑";
    scrollButton.id = "scroll-top";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px";
    scrollButton.style.fontSize = "20px";
    scrollButton.style.display = "none";
    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 6. Animated Typing Effect for Header Text
    const headerText = document.querySelector("header h1");
    if (headerText) {
        const text = headerText.textContent;
        headerText.textContent = "";
        let index = 0;

        function typeEffect() {
            if (index < text.length) {
                headerText.textContent += text[index];
                index++;
                setTimeout(typeEffect, 100);
            }
        }
        typeEffect();
    }

    // 7. Dynamic Greeting Based on Time
    const alertMessage = document.querySelector(".alert-message");
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    if (alertMessage) {
        alertMessage.textContent = `${greeting} Welcome to Clemz Student Scoreboard! Stay updated with the latest results.`;
    }

    // 8. Pop-up Modal for Announcements
    const modal = document.createElement("div");
    modal.id = "announcement-modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#fff";
    modal.style.padding = "20px";
    modal.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    modal.style.zIndex = "1000";

    const modalContent = `
        <h3>Special Announcement!</h3>
        <p>Check out the latest updates on the Clemz Student Scoreboard.</p>
        <button id="close-modal">Close</button>
    `;

    modal.innerHTML = modalContent;
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.display = "block";
    }, 3000);

    document.getElementById("close-modal").addEventListener("click", () => {
        modal.style.display = "none";
    });

    // 9. Responsive Navigation Toggle for Mobile
    const navMenu = document.querySelector(".nav-menu");
    const toggleNav = document.createElement("button");
    toggleNav.textContent = "☰";
    toggleNav.style.fontSize = "24px";
    toggleNav.style.backgroundColor = "transparent";
    toggleNav.style.border = "none";
    toggleNav.style.cursor = "pointer";

    document.querySelector("header").appendChild(toggleNav);

    toggleNav.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });

    // 10. Form Validation Example (for future forms)
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", event => {
            const requiredFields = form.querySelectorAll("[required]");
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value) {
                    isValid = false;
                    field.style.border = "2px solid red";
                } else {
                    field.style.border = "1px solid #ccc";
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    });
});
                
