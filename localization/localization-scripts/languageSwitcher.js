document.addEventListener("DOMContentLoaded", () => {
    loadLocalization('en');

    const languageOptions = document.querySelectorAll('#language-switcher .dropdown li');
    languageOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const langCode = event.target.getAttribute('data-lang');
            console.log(`Language selected: ${langCode}`); 
            loadLocalization(langCode); 
        });
    });
});

function loadLocalization(langCode) {
    console.log(`Loading localization for: ${langCode}`);
    fetch(`${langCode}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Localization data loaded:', data); 
            updateText(data);
        })
        .catch(error => console.error('Error loading localization:', error));
}

function updateText(data) {
    document.title = data.title;

    const navLinks = document.querySelectorAll('nav ul li a');
    if (navLinks.length >= 4) { 
        navLinks[0].textContent = data.header.home;
        navLinks[1].textContent = data.header.play;
        navLinks[2].textContent = data.header.train;
        navLinks[3].textContent = data.header.lessons;
    } else {
        console.error('Not enough navigation links found in the document.');
    }

    const navItemLinks = document.querySelectorAll('.nav-item ul li a');
    if (navItemLinks.length >= 3) { 
        navItemLinks[0].textContent = data.header.search;
        navItemLinks[1].textContent = data.header.friends;
        navItemLinks[2].textContent = data.header.account;
    } else {
        console.error('Not enough nav item links found in the document.');
    }

    const historyHeading = document.querySelector('.history h2');
    if (historyHeading) {
        historyHeading.textContent = data.lobby.history;
    } else {
        console.error('History heading element not found.');
    }

    const gridItems = document.querySelectorAll('.grid-item .content');
    if (gridItems.length >= 4) { 
        gridItems[0].textContent = data.lobby.play;
        gridItems[1].textContent = data.lobby.puzzles;
        gridItems[2].textContent = data.lobby.gameReview;
        gridItems[3].textContent = data.lobby.learning;
    } else {
        console.error('Not enough grid items found in the document.');
    }

    const footerItems = document.querySelectorAll('.footer ul .footer-item');
    if (footerItems.length >= 4) { 
        footerItems[0].textContent = data.footer.support;
        console.log(footerItems);
        footerItems[1].textContent = data.footer.language; 
        footerItems[2].textContent = data.footer.about;
        footerItems[3].textContent = data.footer.links; 
    } else {
        console.error('Not enough footer items found in the document.');
    }

    const languageSwitcher = document.querySelector('#language-switcher');
    languageSwitcher.textContent = data.footer.language;

    const dropdown = document.createElement('ul');
    dropdown.classList.add('dropdown');

    data.footer.languageOptions.forEach(option => {
        const li = document.createElement('li');
        li.setAttribute('data-lang', option.langCode);
        li.textContent = option.label;
        dropdown.appendChild(li);
    });

    languageSwitcher.appendChild(dropdown);

    const languageItems = dropdown.querySelectorAll('li');
    languageItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const langCode = event.target.getAttribute('data-lang');
            loadLocalization(langCode);
        });
    });
}