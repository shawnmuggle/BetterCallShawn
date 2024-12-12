let currentLang = 'en';

function switchLanguage(lang) {
    currentLang = lang;
    updateContent();
    updateActiveButton();
    localStorage.setItem('preferred-language', lang);
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLang][key];
    });
}

function updateActiveButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(currentLang)) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language.toLowerCase();
        currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    switchLanguage(currentLang);
}); 