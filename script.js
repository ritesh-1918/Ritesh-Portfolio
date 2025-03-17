// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    try {
        AOS.init({
            duration: 800,
            once: true,
            offset: 120
        });
    } catch (e) {
        console.warn('AOS failed to initialize:', e);
    }

    // Dark Mode Toggle
    const toggle = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    toggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Animate skill bars
    document.querySelectorAll('.skill').forEach(skill => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const percent = entry.target.dataset.percent;
                    entry.target.querySelector('.progress').style.width = `${percent}%`;
                }
            });
        });
        observer.observe(skill);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        try {
            formStatus.textContent = 'Sending your message...';
            formStatus.style.color = 'var(--primary)';

            // Simulate form submission (replace with actual API call)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            formStatus.textContent = 'Message sent successfully! 🎉';
            formStatus.style.color = 'green';
            contactForm.reset();
        } catch (error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.style.color = 'red';
        }
    });
});
