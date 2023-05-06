import { renderEventSlide } from "./eventSlide";

// Render slide
renderEventSlide();

// Hamburger menu
const expandedMenu = document.querySelector('#expanded-menu');
let opening = false;
const body = document.querySelector('body');
// Null check body
if (body && expandedMenu) {
    body.addEventListener('click', (e) => {
        if (!opening && expandedMenu.classList.contains('opened')) {
            expandedMenu.classList.remove('opened');
        }
        opening = false;
    });
}

const hamburger = document.querySelector('#hamburger');

if (hamburger && expandedMenu) {
    hamburger.addEventListener('click', (e) => {
        opening = true;
        expandedMenu.classList.add('opened');
    });
}
