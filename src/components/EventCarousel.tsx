import React from "react";
import ACMEvent from "../types/ACMEvent";
import EventSlide from "./EventSlide"

type EventCarouselProps = {
    events: ACMEvent[]
}

const EventCarousel = function ({ events }: EventCarouselProps) {
    let count = 0;
    const positions = ['inner inner-right', 'outer outer-right', 'center', 'inner inner-left', 'outer outer-left'];
    const renderedEvents = events.map(event => {
        count++;
        return <EventSlide pos={`${positions[count - 1]}`} event={event} />
    })
    return (
        <div id="event-carousel-container">
            <div id="event-carousel-heading">Come to Our Events!</div>
            <div className="carousel-controls">
                <div className="decrement-carousel"><div className="left-arrow arrow"></div></div>
                <div id="event-carousel">{renderedEvents}</div>
                <div className="increment-carousel"><div className="right-arrow arrow"></div></div>
            </div>
        </div>
    )
}

export default EventCarousel;