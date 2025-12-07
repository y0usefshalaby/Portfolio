document.addEventListener('DOMContentLoaded', function() {
    // Initialize the AOS animation library (included in HTML)
    
    // 1. Smooth scroll function for the main CTA button
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    const projectsSection = document.getElementById('projects');

    if (viewProjectsBtn && projectsSection) {
        viewProjectsBtn.addEventListener('click', function() {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Active Navigation Link on Scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight; 

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current) && current !== '') {
                link.classList.add('active');
            }
        });
    });
});