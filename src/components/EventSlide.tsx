import React from "react";
import ACMEvent from "../types/ACMEvent";

type EventSlideProps = {
    event: ACMEvent
    pos: string
    onClick: React.MouseEventHandler<HTMLDivElement>
}

/** Renders an ACMEvent. */
const EventSlide = function({event, pos, onClick}: EventSlideProps) {
    return (<div onClick={onClick} className={`event-item ${pos}`}>
        <img src={event.img}></img>        
        <p className="event-date">{event.date}</p>
        <p className="event-short">{event.short}</p>
    </div>)
}

export default EventSlide;