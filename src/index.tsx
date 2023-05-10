import { renderEventSlide } from "./eventSlide";
import eventInfo from "./info/eventInfo.json"
import renderMemberDivs from "./members";
import ReactDOM from "react-dom/client";
import React from "react";
import EventSlide from "./components/EventSlide"
import EventCarousel from "./components/EventCarousel"

// Render slide
renderMemberDivs();

const events: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("event-carousel-root") as HTMLElement);

events.render(
    <React.StrictMode>
       <EventCarousel events={eventInfo}/>
    </React.StrictMode>
)

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
