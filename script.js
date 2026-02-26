// Scroll ke Contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// Animasi Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});

// Dark Light Mode
function toggleMode() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}
