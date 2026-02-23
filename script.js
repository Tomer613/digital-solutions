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

// Optional: Automatically detect browser language on first load or set default
document.addEventListener("DOMContentLoaded", () => {
    // Set default language to Hebrew (or detect it dynamically)
    document.getElementById('languageSelect').value = 'he';
    changeLanguage('he');
});