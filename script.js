document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const delay =
                        entry.target.dataset.delay || 0;

                    setTimeout(() => {
                        entry.target.classList.add("visible");
                    }, delay);

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element, index) => {

        if (!element.dataset.delay) {
            element.dataset.delay = (index % 5) * 90;
        }

        observer.observe(element);
    });


    /* =========================
       MOBILE NAV
    ========================= */

    const navLinks = document.querySelectorAll(".navbar a");
    const navMenu = document.querySelector("#navMenu");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (navMenu.classList.contains("show")) {

                const collapse =
                    bootstrap.Collapse.getInstance(navMenu);

                if (collapse) {
                    collapse.hide();
                }

            }

        });

    });


    /* =========================
       MOUSE CARD EFFECT
    ========================= */

    const cards = document.querySelectorAll(
        ".skill-card, .info-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width;

            const y =
                (event.clientY - rect.top) /
                rect.height;

            const rotateX = (0.5 - y) * 4;
            const rotateY = (x - 0.5) * 4;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });


    /* =========================
       PROJECT CARD EFFECT
    ========================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const center =
                rect.width / 2;

            if (x > center) {
                card.style.transform =
                    "translateX(8px) rotate(.4deg)";
            } else {
                card.style.transform =
                    "translateX(-3px) rotate(-.4deg)";
            }

        });

        card.addEventListener("mouseleave", () => {

            if (card.classList.contains("tilted")) {
                card.style.transform = "rotate(-1deg)";
            } else {
                card.style.transform = "";
            }

        });

    });


    /* =========================
       BUTTON RIPPLE
    ========================= */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .nav-button, .project-link"
        );

    buttons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const ripple =
                document.createElement("span");

            ripple.classList.add("click-ripple");

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("section[id]");

    const navigationLinks =
        document.querySelectorAll(".navbar li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        navigationLinks.forEach((link) => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    });


    /* =========================
       PARALLAX HERO
    ========================= */

    const hero =
        document.querySelector(".hero");

    const profile =
        document.querySelector(".profile-card");

    window.addEventListener("scroll", () => {

        if (!hero || !profile) return;

        const scroll =
            window.scrollY;

        if (scroll < hero.offsetHeight) {

            profile.style.transform =
                `rotate(3deg)
                 translateY(${scroll * 0.06}px)`;

        }

    });


    /* =========================
       FLOATING TAGS
    ========================= */

    const tags =
        document.querySelectorAll(".floating-tag");

    tags.forEach((tag, index) => {

        const duration =
            3 + index * 0.7;

        const delay =
            index * 0.4;

        tag.style.animation =
            `floatingTag
             ${duration}s
             ease-in-out
             ${delay}s
             infinite alternate`;

    });


    /* =========================
       STAT NUMBER HOVER
    ========================= */

    const stats =
        document.querySelectorAll(".hero-stats div");

    stats.forEach((stat) => {

        stat.addEventListener("mouseenter", () => {
            stat.style.transform =
                "translateY(-4px)";
        });

        stat.addEventListener("mouseleave", () => {
            stat.style.transform = "";
        });

    });


    /* =========================
       CONTACT LINK ARROW
    ========================= */

    const contactLinks =
        document.querySelectorAll(".contact-right a");

    contactLinks.forEach((link) => {

        const arrow =
            link.querySelector("b");

        link.addEventListener("mouseenter", () => {

            if (arrow) {
                arrow.style.transform =
                    "translate(4px, -4px)";
            }

        });

        link.addEventListener("mouseleave", () => {

            if (arrow) {
                arrow.style.transform = "";
            }

        });

    });

});