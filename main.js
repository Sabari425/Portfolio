document.addEventListener('DOMContentLoaded', () => {
    // Initialize Typed.js
    new Typed('.text', {
        strings: ['Student', 'Frontend Developer', 'Programmer', 'Web Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });

    // Hamburger menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });

    // Show/hide back-to-top button
    const topButton = document.querySelector('.top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            topButton.classList.add('show');
        } else {
            topButton.classList.remove('show');
        }
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-item, .services-box, .row');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();

        // Enhanced client-side validation
        if (!name || name.length < 2) {
            alert('Please enter a valid name (at least 2 characters).');
            return;
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!message || message.length < 10) {
            alert('Please enter a message (at least 10 characters).');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', { name, email, subject, message });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});