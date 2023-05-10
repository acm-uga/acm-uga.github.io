import React from "react";
import ACMEvent from "../types/ACMEvent";
import EventSlide from "./EventSlide";
import { useState, useEffect } from "react";

type EventCarouselProps = {
    events: ACMEvent[]
}

/** Modifies the @param index to stay in range of the array with @param length. */
const shiftIndex = function (index: number, length: number) {
    if (index > length - 1) {
        return index % length
    }
    else if (index < 0) {
        return length - Math.abs(index) % length
    }
    return index
}

const EventCarousel = function ({ events }: EventCarouselProps) {
    const positions = ['outer outer-left', 'inner inner-left', 'center', 'inner inner-right', 'outer outer-right'];

    const [shift, setShift] = useState(0);

    /** Change shift by @param change. */
    const changeShift = function (change: number) {
        if (Math.abs(shift + change) >= positions.length) {
            setShift((shift + change) % positions.length);
        }
        else {
            setShift(shift + change);
        }
    }

    return (
        <div id="event-carousel-container">
            <div id="event-carousel-heading">Come to Our Events!</div>
            <div className="carousel-controls">
                <div onClick={(e) => changeShift(1)} className="decrement-carousel"><div className="left-arrow arrow"></div></div>
                <div id="event-carousel">{events.map((event, index) => {
                    let shiftedIndex = shiftIndex(index + shift, positions.length);
                    return <EventSlide pos={`${positions[shiftedIndex]}`} event={event} onClick={() => setShift(2 - index)} />
                })}</div>
                <div onClick={(e) => changeShift(-1)} className="increment-carousel"><div className="right-arrow arrow"></div></div>
            </div>
        </div>
    )
}

export default EventCarousel;