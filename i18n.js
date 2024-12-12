const translations = {
    en: {
        title: "Better Call Shawn",
        subtitle: "Assistant at Service",
        contact: "Call"
    },
    zh: {
        title: "Better Call Shawn",
        subtitle: "随时为您服务",
        contact: "拨打"
    },
    es: {
        title: "Better Call Shawn",
        subtitle: "Asistente a su Servicio",
        contact: "Llamar"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang][key];
    });
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(preferredLanguage);
}); 