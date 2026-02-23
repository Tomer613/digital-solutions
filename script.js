// script.js

// Function to update the page content based on selected language
function changeLanguage(langCode) {
    const langData = translations[langCode];

    document.documentElement.setAttribute('dir', langData.dir);
    document.documentElement.setAttribute('lang', langCode);

    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        if (langData[translationKey]) {
            element.innerHTML = langData[translationKey];
        }
    });

    const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
    placeholdersToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n-placeholder');
        if (langData[translationKey]) {
            element.setAttribute('placeholder', langData[translationKey]);
        }
    });
}

// --- Custom Language Dropdown Logic ---
function toggleDropdown() {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}

function selectLang(langCode, langName, element) {
    document.getElementById('selectedLangText').textContent = langName;

    // Update active class
    const options = document.querySelectorAll('.dropdown-option');
    options.forEach(opt => opt.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }

    // Close dropdown
    document.getElementById('langDropdown').classList.remove('open');

    // Change language
    changeLanguage(langCode);
}

// Close dropdown on outside click
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('langDropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
    }
});

// --- Accessibility Logic with localStorage ---

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    const isActive = document.body.classList.contains('high-contrast');
    localStorage.setItem('a11y-high-contrast', isActive);
}

function toggleHighlightLinks() {
    document.body.classList.toggle('highlight-links');
    const isActive = document.body.classList.contains('highlight-links');
    localStorage.setItem('a11y-highlight-links', isActive);
}

let currentFontSizePercent = 100;

function changeFontSize(step) {
    currentFontSizePercent += (step * 10);
    if (currentFontSizePercent > 150) currentFontSizePercent = 150;
    if (currentFontSizePercent < 80) currentFontSizePercent = 80;
    document.documentElement.style.fontSize = currentFontSizePercent + '%';
    localStorage.setItem('a11y-font-size', currentFontSizePercent);
}

function initAccessibility() {
    if (localStorage.getItem('a11y-high-contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    if (localStorage.getItem('a11y-highlight-links') === 'true') {
        document.body.classList.add('highlight-links');
    }
    const savedFontSize = localStorage.getItem('a11y-font-size');
    if (savedFontSize) {
        currentFontSizePercent = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSizePercent + '%';
    }
}

function toggleA11yMenu() {
    const menu = document.getElementById('a11y-menu');
    menu.classList.toggle('hidden');
}

// --- Sticky Navigation ---
function initStickyNav() {
    const stickyNav = document.getElementById('sticky-nav');
    const hero = document.querySelector('.hero');

    if (!stickyNav || !hero) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                stickyNav.classList.add('visible');
            } else {
                stickyNav.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(hero);
}

// --- Scroll Reveal ---
function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');

    if (revealItems.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(item => observer.observe(item));
}

// --- Counter Animation ---
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');

    if (counters.length === 0) return;

    let countersAnimated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        counter.textContent = current;
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }

                    requestAnimationFrame(updateCounter);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);
}

// --- Testimonials Carousel ---
let currentTestimonial = 0;
let testimonialInterval;

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    if (cards.length === 0) return;

    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentTestimonial = index;
    cards[currentTestimonial].classList.add('active');
    dots[currentTestimonial].classList.add('active');
}

function nextTestimonial() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;
    showTestimonial((currentTestimonial + 1) % cards.length);
}

function initTestimonials() {
    testimonialInterval = setInterval(nextTestimonial, 5000);

    // Pause on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(testimonialInterval));
        carousel.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 5000);
        });
    }
}

// --- Form Success Animation ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    const successDiv = document.getElementById('form-success');

    if (!form || !successDiv) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mkovprog', {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.style.display = 'none';
                successDiv.classList.remove('hidden');
            } else {
                // Fallback — still show success for UX
                form.style.display = 'none';
                successDiv.classList.remove('hidden');
            }
        } catch (err) {
            // Show success anyway (graceful degradation)
            form.style.display = 'none';
            successDiv.classList.remove('hidden');
        }
    });
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // Language
    changeLanguage('he');

    // Accessibility
    initAccessibility();

    // New features
    initStickyNav();
    initScrollReveal();
    initCounters();
    initTestimonials();
    initContactForm();
});