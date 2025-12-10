document.addEventListener('DOMContentLoaded', function() {


    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-menu a"); 
    
    
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            document.body.classList.toggle('no-scroll'); 
        });
    }

    
    navLinks.forEach(link => link.addEventListener("click", () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove('no-scroll');
        }
    }));

   
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });


    const textElement = document.querySelector('.typewriter-text');
    const texts = ["Cybersecurity", "Security Systems Technician"];
    let count = 0;
    let index = 0;
    let currentText = '';

    function type() {
        if (!textElement) return;

        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        
        if (index < currentText.length) {
            const letter = currentText.slice(0, ++index);
            textElement.textContent = letter;
            setTimeout(type, 80); 
        } else {
            setTimeout(erase, 2500); 
        }
    }

    function erase() {
        if (!textElement) return;
        
        if (index > 0) {
            const letter = currentText.slice(0, --index);
            textElement.textContent = letter;
            setTimeout(erase, 40); 
        } else {
            count++;
            setTimeout(type, 500);
        }
    }
    
    if (textElement) {
        type();
    }


 
    const sections = document.querySelectorAll('section[id]'); 

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    const sectionId = entry.target.id;
                    const linkHref = link.getAttribute('href').substring(1);
                    
                    if (linkHref === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});