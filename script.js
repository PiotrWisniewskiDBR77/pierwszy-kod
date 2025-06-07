document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.language-buttons button');
    const aboutSections = document.querySelectorAll('.about-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            aboutSections.forEach(section => {
                if (section.getAttribute('lang') === lang) {
                    section.removeAttribute('hidden');
                } else {
                    section.setAttribute('hidden', '');
                }
            });
        });
    });
});
