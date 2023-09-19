import eventInfo from "./info/eventInfo.json";
import memberInfo from "./info/memberInfo.json"
import ReactDOM from "react-dom/client";
import React from "react";
import EventCarousel from "./components/EventCarousel";
import MemberCard from "./components/MemberCard";
import { Calendar } from "@fullcalendar/core";
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';


// Load events into react EventCarousel
const events: ReactDOM.Root = ReactDOM.createRoot(document.getElementById("event-carousel-root") as HTMLElement);
events.render(
    <React.StrictMode>
       <EventCarousel events={eventInfo}/>
    </React.StrictMode>
)

document.addEventListener('DOMContentLoaded', function() {
        // Calendar
        const calendarEl = document.getElementById("calendar"); 
        let calendar = new Calendar(calendarEl as HTMLElement, {
            plugins: [googleCalendarPlugin, dayGridPlugin],
            initialView: 'dayGridMonth',
            displayEventTime: false,
            googleCalendarApiKey: "AIzaSyBOzDpEY7_2EH4sKB6GxT5Ws33dsKc_BVs",
            events: {
                googleCalendarId: "3cg57t8hfac7ig1j4fgpmrmd18@group.calendar.google.com"
            }
        });

        calendar.render();
});


// Load officers into react MemberCard
const acmOfficers: ReactDOM.Root = ReactDOM.createRoot(document.querySelector('#acm-officers') as HTMLElement);
acmOfficers.render(
    <React.StrictMode>
        {memberInfo.map(member => <MemberCard member={member}/>)}
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
