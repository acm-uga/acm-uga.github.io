import { renderEventSlide } from "./scripts/event-slide";

// Render slide
renderEventSlide();

// Hamburger menu
const expandedMenu = document.querySelector('#expanded-menu');
let opening = false;
document.querySelector('body').addEventListener('click', (e) => {
    if (!opening && expandedMenu.classList.contains('opened')) {
        document.querySelector('#expanded-menu').classList.remove('opened');
    }
    opening = false;
});
document.querySelector('#hamburger').addEventListener('click', (e) => {
    opening = true;
    expandedMenu.classList.add('opened');
});
