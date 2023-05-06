import ACMEvent from './types/ACMEvent'
import events from './info/eventInfo.json';

/** Stores the ACM Events */
const eventInfo: ACMEvent[] = events;

/** Initialize the eventNodes (Cards) */
let eventNodes: NodeListOf<HTMLDivElement>;

/** Render event slides from event_info */
export function renderEventSlide() {
    var elem = document.getElementById("event-carousel"); // The container for the inserted links

    // Null check elem
    if (!elem) {
        throw new Error("No .event-carousel element");
    }

    var count = 0;
    while (count < eventInfo.length) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var short = document.createElement("p");
        var date = document.createElement("p");
        var img = document.createElement("img");

        listItem.className = "event-item";

        listItem.append(link);
        link.append(img, title, date, short);
        img.src = eventInfo[count]['img'];
        title.appendChild(document.createTextNode(eventInfo[count]["title"]));
        short.appendChild(document.createTextNode(eventInfo[count]["short"]));
        date.appendChild(document.createTextNode(eventInfo[count]["date"]));
        short.className = "event-short";
        date.className = "event-date";

        // Save index of event
        listItem.dataset.index = count + "";

        elem.appendChild(listItem);
        count = count + 1;
    }
    eventNodes = document.querySelectorAll('.event-item');

    // Carousel setup
    initializeCarousel();
    setJumpToListeners();
    // Set up button events
    const incrementButton = document.querySelector('.increment-carousel');
    const decrementButton = document.querySelector('.decrement-carousel');
    // Null check buttons
    if (!(incrementButton && decrementButton)) {
        throw new Error("Increment or decrement buttons are null.");
    }

    incrementButton.addEventListener('click', incrementCarousel);
    decrementButton.addEventListener('click', decrementCarousel);

}

let currentCenter = 2;

/**Initialize carousel on events, place each element on the carousel
 * according to its index in eventNodes, centering on currentCenter.
*/
const initializeCarousel = function () {
    // Initialize with center index
    carouselFromCenter(currentCenter);
}

/** Remove the inner/outer right/left classes from each
 * event node.
 */
const removeClass = function () {
    eventNodes.forEach(node => {
        node.classList.remove('outer', 'inner', 'inner-right', 'outer-right', 'center', 'inner-left', 'outer-left');
    })
}

/** Takes the given index and gives the proper
 * classes to each event card to generate a
 * carousel with the n-th index as the center
 */
const carouselFromCenter = function (n: number) {
    // Set classes to default values
    removeClass();
    // Add classes to appropriate index
    eventNodes.item(circularIndex(n - 2)).classList.add('outer', 'outer-left');
    eventNodes.item(circularIndex(n - 1)).classList.add('inner', 'inner-left');
    eventNodes.item(circularIndex(n)).classList.add('center');
    eventNodes.item(circularIndex(n + 1)).classList.add('inner', 'inner-right');
    eventNodes.item(circularIndex(n + 2)).classList.add('outer', 'outer-right');
}

/** Take the given number, checks if
 * it is in range of the index, and returns it, or reduces
 * it to an indexable value
 */
const circularIndex = function (index: number) {
    if (index >= 0 && index < eventNodes.length) {
        index = index;
    } else if (index < 0) {
        index = circularIndex(index + eventNodes.length);
    } else {
        index = circularIndex(index % eventNodes.length);
    }
    return index;
}

const incrementCarousel = function () {
    currentCenter++;
    initializeCarousel();
}

const decrementCarousel = function () {
    currentCenter--;
    initializeCarousel();
}

/** Set event listeners to jump to each event */
const setJumpToListeners = function () {
    eventNodes.forEach(node => {
        node.addEventListener('click', (e) => {
            const index = node.dataset.index;
            if (index == undefined) {
                throw new Error("Event node has undefined index.");
            }
            currentCenter = parseInt(index);
            initializeCarousel();
        })
    })
}