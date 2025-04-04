const hero = document.querySelector('.hero-section');

const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            heroObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

heroObserver.observe(hero);

const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // kun en gang
        }
    });
}, {
    threshold: 0.1,
});

items.forEach(item => {
    observer.observe(item);
});
const scrollBtn = document.getElementById("scrollDownBtn");
function scrollDown() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    scrollBtn.style.display = (scrollTop + windowHeight < documentHeight - 50) ? "block" : "none";
});