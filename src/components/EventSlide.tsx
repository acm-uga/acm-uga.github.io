import ReactDOM  from "react-dom/client";
import React from "react";
import ACMEvent from "../types/ACMEvent";

type EventSlideProps = {
    event: ACMEvent
    pos: string
}

/**
 * 
 * const listItem = document.createElement("li");
        const link = document.createElement("a");
        const title = document.createElement("h3");
        const short = document.createElement("p");
        const date = document.createElement("p");
        const img = document.createElement("img");

        listItem.className = "event-item";

        listItem.append(link);
        link.append(img, title, date, short);
        img.src = eventInfo[count]['img'];
        title.appendChild(document.createTextNode(eventInfo[count]["title"]));
        short.appendChild(document.createTextNode(eventInfo[count]["short"]));
        date.appendChild(document.createTextNode(eventInfo[count]["date"]));
        short.className = "event-short";
        date.className = "event-date";
        listItem.dataset.index = count + "";
 */

const EventSlide = function({event, pos}: EventSlideProps) {
    return (<div className={`event-item ${pos}`}>
        <img src={event.img}></img>
        <h3>{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-short">{event.short}</p>
    </div>)
}

export default EventSlide;