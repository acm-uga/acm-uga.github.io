/**Get nodes
const eventNodes = document.querySelectorAll('.event-item');
console.log(eventNodes);

/**Initialize carousel on events, place each element on the carousel
 * according to its index in eventNodes.

const initializeCarousel = function() {
    eventNodes.item(4).classList.add('outer');
    eventNodes.item(3).classList.add('inner');
    eventNodes.item(0).classList.add('center');
    eventNodes.item(1).classList.add('inner');
    eventNodes.item(2).classList.add('outer');
}*/