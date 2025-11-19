// nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMobile = document.getElementById('nav-mobile');
navToggle?.addEventListener('click', () => {
    navMobile.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();

            const headerOffset = document.querySelector('header')?.offsetHeight || 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            navMobile.classList.add('hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const detailsList = document.querySelectorAll(".faq-item");

    detailsList.forEach((el) => {
        const content = el.querySelector(".faq-content");

        el.addEventListener("toggle", () => {
            if (el.open) {
                const startHeight = 0;
                const endHeight = content.scrollHeight;
                content.style.height = `${startHeight}px`;
                content.style.overflow = "hidden";
                content.style.transition = "height 0.35s ease";
                requestAnimationFrame(() => {
                    content.style.height = `${endHeight}px`;
                });
                content.addEventListener(
                    "transitionend",
                    () => {
                        content.style.height = "auto";
                    },
                    { once: true }
                );
            } else {
                const startHeight = content.scrollHeight;
                const endHeight = 0;
                content.style.height = `${startHeight}px`;
                requestAnimationFrame(() => {
                    content.style.transition = "height 0.35s ease";
                    content.style.height = `${endHeight}px`;
                });
            }
        });
    });
});
