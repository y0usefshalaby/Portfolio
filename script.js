document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تعريف العناصر
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".navbar");

    // 2. فتح وإغلاق القائمة عند الضغط
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 3. إغلاق القائمة عند اختيار رابط
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // 4. تغيير لون الخلفية عند التمرير (Sticky Effect)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
    // -------------------------
    // 3. Typewriter Effect
    // -------------------------
    const textElement = document.querySelector('.typewriter-text');
    const texts = ["Cybersecurity Specialist", "Security Systems Technician", "Tech Enthusiast"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        if(textElement) {
            textElement.textContent = letter;
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait before typing next word
        } else {
            setTimeout(type, 100); // Typing speed
        }
    }());

    // -------------------------
    // 4. Active Link Highlighter (IntersectionObserver)
    // -------------------------
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // -------------------------
    // 5. Initialize AOS (if used)
    // -------------------------
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});