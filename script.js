// script.js

// Function to update the page content based on selected language
function changeLanguage(langCode) {
    // 1. Get the current language dictionary
    const langData = translations[langCode];

    // 2. Change the document direction (RTL or LTR) and lang attribute
    document.documentElement.dir = langData.dir;
    document.documentElement.lang = langCode;

    // 3. Update all regular texts and HTML elements
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n');
        // Check if the key exists in our translation dictionary
        if (langData[translationKey]) {
            element.innerHTML = langData[translationKey];
        }
    });

    // 4. Update placeholders for input fields in forms
    const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
    placeholdersToTranslate.forEach(element => {
        const translationKey = element.getAttribute('data-i18n-placeholder');
        if (langData[translationKey]) {
            element.setAttribute('placeholder', langData[translationKey]);
        }
    });
}

// --- Accessibility Logic with localStorage ---

// Toggle High Contrast Mode and save state
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    const isActive = document.body.classList.contains('high-contrast');
    localStorage.setItem('a11y-high-contrast', isActive);
}

// Toggle Highlight Links Mode and save state
function toggleHighlightLinks() {
    document.body.classList.toggle('highlight-links');
    const isActive = document.body.classList.contains('highlight-links');
    localStorage.setItem('a11y-highlight-links', isActive);
}

// Global variable to keep track of font size percentage
let currentFontSizePercent = 100;

// Change Font Size and save state
function changeFontSize(step) {
    // Positive step increases by 10%, negative step decreases by 10%
    currentFontSizePercent += (step * 10);

    // Limits: maximum 150%, minimum 80%
    if (currentFontSizePercent > 150) currentFontSizePercent = 150;
    if (currentFontSizePercent < 80) currentFontSizePercent = 80;

    // Change the font size of the HTML tag (affects all rem units on the site)
    document.documentElement.style.fontSize = currentFontSizePercent + '%';

    // Save to localStorage
    localStorage.setItem('a11y-font-size', currentFontSizePercent);
}

function initAccessibility() {
    // Check and apply High Contrast
    if (localStorage.getItem('a11y-high-contrast') === 'true') {
        document.body.classList.add('high-contrast');
    }

    // Check and apply Highlight Links
    if (localStorage.getItem('a11y-highlight-links') === 'true') {
        document.body.classList.add('highlight-links');
    }

    // Check and apply Font Size
    const savedFontSize = localStorage.getItem('a11y-font-size');
    if (savedFontSize) {
        currentFontSizePercent = parseInt(savedFontSize);
        document.documentElement.style.fontSize = currentFontSizePercent + '%';
    }
}

// --- Initialization ---

// Add this to your existing DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () => {
    // Existing language initialization
    document.getElementById('languageSelect').value = 'he';
    changeLanguage('he');

    // Load saved accessibility preferences
    initAccessibility();
});

// Function to toggle the accessibility menu visibility
function toggleA11yMenu() {
    const menu = document.getElementById('a11y-menu');
    // מוסיף או מסיר את המחלקה 'hidden' שמסתירה את התפריט
    menu.classList.toggle('hidden');
}