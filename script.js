document.addEventListener('DOMContentLoaded', function() {

    /* ---------------------------------- */
    /* 1. Navbar Functionality (Hamburger Menu & Scroll Effect) */
    /* ---------------------------------- */
    
    // تعريف العناصر
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".navbar");
    // يجب تحديد كل الروابط النشطة في القائمة
    const navLinks = document.querySelectorAll(".nav-menu a"); 
    
    // 1. تفعيل زر القائمة (Hamburger Menu)
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
            // تحسين: منع التمرير في الخلفية عند فتح القائمة (لمنع ظهور المحتوى بالخلف)
            document.body.classList.toggle('no-scroll'); 
        });
    }

    // 2. إغلاق القائمة عند الضغط على أي رابط
    navLinks.forEach(link => link.addEventListener("click", () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove('no-scroll');
        }
    }));

    // 3. تغيير لون الخلفية عند التمرير (Sticky Effect)
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    /* ---------------------------------- */
    /* 2. Typewriter Effect */
    /* ---------------------------------- */
    const textElement = document.querySelector('.typewriter-text');
    const texts = ["Cybersecurity Specialist", "Security Systems Technician", "Tech Enthusiast"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (!textElement) return; // توقف إذا لم يتم العثور على العنصر

        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        // التأكد من عدم تجاوز طول النص
        if (index < currentText.length) {
            letter = currentText.slice(0, ++index);
            textElement.textContent = letter;
            setTimeout(type, 100); // سرعة الكتابة
        } else {
            // انتظار ثم البدء في مسح الكلمة
            setTimeout(erase, 2000); // انتظار ثانيتين
        }
    }

    function erase() {
        if (!textElement) return;
        
        if (index > 0) {
            letter = currentText.slice(0, --index);
            textElement.textContent = letter;
            setTimeout(erase, 50); // سرعة المسح
        } else {
            count++;
            setTimeout(type, 500); // انتظار نصف ثانية قبل كتابة الكلمة التالية
        }
    }
    
    // تشغيل الدالة
    if (textElement) {
        type();
    }


    /* ---------------------------------- */
    /* 3. Active Link Highlighter (IntersectionObserver) */
    /* ---------------------------------- */
    const sections = document.querySelectorAll('section[id]'); // تحديد الأقسام التي لديها ID
    // استخدام نفس الـ navLinks التي تم تعريفها في الأعلى
    // const navItems = document.querySelectorAll('.nav-menu a'); 

    const observerOptions = {
        threshold: 0.3 // عندما يظهر 30% من القسم
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    // إزالة 'active' من كل الروابط
                    link.classList.remove('active');
                    
                    // مقارنة ID القسم الظاهر مع رابط الـ href
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

    /* ---------------------------------- */
    /* 4. Initialize AOS (if used) */
    /* ---------------------------------- */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});

// ملاحظة مهمة للـ CSS:
// تأكد من إضافة هذا الكلاس البسيط في ملف style.css لمنع تمرير الخلفية عند فتح القائمة:
// .no-scroll { overflow: hidden; }