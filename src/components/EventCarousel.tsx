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

/** Renders ACMEvent items in a carousel. */
const EventCarousel = function ({ events }: EventCarouselProps) {
    /** Stores the position classes on the carousel. */
    const positions = ['outer outer-left', 'inner inner-left', 'center', 'inner inner-right', 'outer outer-right'];

    if (events.length < 5) {
        
    }

    /** Store the shift from default the current carousel items are at. */
    const [shift, setShift] = useState(0);

    /** Change shift by @param change. */
    const changeShift = function (change: number) {
        if (Math.abs(shift + change) >= positions.length) {
            setShift(() => (shift + change) % positions.length);
        }
        else {
            setShift(() => shift + change);
        }
    }

    // return (
    //     <div id="event-carousel-container">
    //         <div id="event-carousel-heading">Come to Our Events!</div>
    //         <div className="carousel-controls">
    //             <button onClick={(e) => changeShift(1)} className="decrement-carousel"><div className="left-arrow arrow"></div></button>
    //             <div id="event-carousel">{events.map((event, index) => {
    //                 let shiftedIndex = shiftIndex(index + shift, positions.length);
    //                 return <EventSlide pos={`${positions[shiftedIndex]}`} event={event} onClick={() => setShift(2 - index)} />
    //             })}</div>
    //             <button onClick={(e) => changeShift(-1)} className="increment-carousel"><div className="right-arrow arrow"></div></button>
    //         </div>
    //     </div>
    // )

    return (
        <div id="event-carousel-container">
            <div id="event-carousel-heading">Come to Our Events!</div>
            <div className="carousel-controls">
                <button onClick={() => changeShift(1)} className="decrement-carousel">
                    <div className="left-arrow arrow"></div>
                </button>

                <div id="event-carousel">
                    {events.map((event, index) => {
                        if (events.length < 5) {
                            return (
                                <EventSlide
                                    key={index}
                                    pos="center"
                                    event={event}
                                    onClick={() => setShift(2 - index)}
                                />
                            );
                        }
                        let shiftedIndex = shiftIndex(index + shift, positions.length);
                        return (
                            <EventSlide
                                key={index}
                                pos={`${positions[shiftedIndex]}`}
                                event={event}
                                onClick={() => setShift(2 - index)}
                            />
                        );
                    })}
                </div>

                <button onClick={() => changeShift(-1)} className="increment-carousel">
                    <div className="right-arrow arrow"></div>
                </button>
            </div>
        </div>
    )
}



export default EventCarousel;


