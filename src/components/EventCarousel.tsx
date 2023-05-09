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
        <div id="event-carousel">
            {renderedEvents}
        </div>
    )
}

export default EventCarousel;