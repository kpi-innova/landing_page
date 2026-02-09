import { ui, defaultLang } from '../i18n/ui';

const LANG_STORAGE_KEY = 'kpi-innova-lang';

// Get initial language from storage or default
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || defaultLang;

function updateDOM() {
    // Update all text elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (ui[currentLang][key]) {
            let text = ui[currentLang][key];
            if (text.includes('{year}')) {
                text = text.replace('{year}', new Date().getFullYear());
            }

            // Check if element has children that are not text nodes 
            // (simple check: if it has innerHTML structure for rich text like marks)
            if (el.innerHTML.includes('<') && (key.includes('whoweare.text1') || key.includes('br'))) {
                el.innerHTML = text;
            } else {
                el.innerText = text; // Safer for most text
            }
        }
    });

    // Update toggle UI
    const toggle = document.getElementById('language-toggle');
    const slider = document.getElementById('toggle-slider');
    const esLabel = document.getElementById('label-es');
    const enLabel = document.getElementById('label-en');

    if (toggle && slider && esLabel && enLabel) {
        if (currentLang === 'es') {
            slider.style.transform = 'translateX(0)';
            esLabel.classList.add('text-primary');
            esLabel.classList.remove('text-gray-500');
            enLabel.classList.remove('text-primary');
            enLabel.classList.add('text-gray-500');
        } else {
            slider.style.transform = 'translateX(100%)';
            slider.style.left = '4px'; // Adjustment for padding
            esLabel.classList.remove('text-primary');
            esLabel.classList.add('text-gray-500');
            enLabel.classList.add('text-primary');
            enLabel.classList.remove('text-gray-500');
        }
    }
}

// Initialize on load
// Initialize on load and after navigation (View Transitions)
document.addEventListener('astro:page-load', () => {
    // Update DOM with current language
    updateDOM();

    const toggle = document.getElementById('language-toggle');
    if (toggle) {
        // Clone element to remove existing listeners (safeguard)
        const newToggle = toggle.cloneNode(true);
        toggle.parentNode.replaceChild(newToggle, toggle);

        newToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem(LANG_STORAGE_KEY, currentLang);
            updateDOM();
        });
    }
});
