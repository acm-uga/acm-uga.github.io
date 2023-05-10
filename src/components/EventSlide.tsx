import ReactDOM  from "react-dom/client";
import React from "react";
import ACMEvent from "../types/ACMEvent";

type EventSlideProps = {
    event: ACMEvent
    pos: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

const EventSlide = function({event, pos, onClick}: EventSlideProps) {
    return (<div onClick={onClick} className={`event-item ${pos}`}>
        <img src={event.img}></img>
        <h3>{event.title}</h3>
        <p className="event-date">{event.date}</p>
        <p className="event-short">{event.short}</p>
    </div>)
}

export default EventSlide;