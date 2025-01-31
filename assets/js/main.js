document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-section");

    function revealOnScroll() {
        sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.classList.add("visible");
        }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
    });


    
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        const navbarToggler = document.querySelector('.navbar-toggler');
        
        
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});



    window.history.replaceState(null, null, window.location.href); 
