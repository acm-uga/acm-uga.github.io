
var event_info = [ 
    
    {"title":"Open Source Project", "short": "Join us for our first ever open source project! Add to your resumè and create something great!", "long": "This is event 1's super long description!", "img":"../resources/event_imgs/open-source-project.png", "date":"Every Wednesday at 5:30PM"},  
    {"title":"Flutter Foreward Extended", "short": "ACM and GDG Athens present a workshop on Flutter, Google's cross-platform development framework! Join us and learn how you can code your first Flutter app!", "long": "This is event 1's super long description!", "img":"../resources/event_imgs/FLutter workshop.png", "date":"02/16/23"},
    {"title":"ACM Research Panel", "short": "Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.", "long": "This is event 1's super long description!", "img":"../resources/event_imgs/Reasearch GBM 3 (2).png", "date":"02/09/23"},
    {"title":"Company Speaker: StateFarm", "short": "ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.", "long":"This is event 1's super long description!", "img": "../resources/event_imgs/gmb-2-statefarm.png", "date":"01/26/23"},
    {"title":"Fullstack Development", "short": "Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!", "long": "This is event 2's super long description!", "img":"../resources/event_imgs/Full_Stack_Graphic.png", "date":"01/19/23"},
   
    
   
      
    
];

let eventNodes = null;

/** Render event slides from event_info */
export function renderEventSlide() { 
    var elem = document.getElementById("event-carousel"); //The container for the inserted links
    var count = 0;
    while (count < event_info.length) { 
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var short = document.createElement("p");
        var date = document.createElement("p");
        var img = document.createElement("img");

        listItem.className = "event-item";

        listItem.append(link);
        link.append(img,title,date, short);
        img.src=event_info[count]['img'];
        title.appendChild(document.createTextNode(event_info[count]["title"]));
        short.appendChild(document.createTextNode(event_info[count]["short"]));
        date.appendChild(document.createTextNode(event_info[count]["date"]));
        short.className = "event-short";
        date.className = "event-date";

        // Save index of event
        listItem.dataset.index = count;

        elem.appendChild(listItem);
        count = count + 1;
    }
    eventNodes = document.querySelectorAll('.event-item');

    // Carousel setup
    initializeCarousel();
    setJumpToListeners();
}

let currentCenter = 2;

/**Initialize carousel on events, place each element on the carousel
 * according to its index in eventNodes, centering on currentCenter.
*/
const initializeCarousel = function() {
    // Initialize with center index
    carouselFromCenter(currentCenter);
}

/** Remove the inner/outer right/left classes from each
 * event node.
 */
const removeClass = function() {
    eventNodes.forEach(node => {
        node.classList.remove('outer', 'inner', 'inner-right', 'outer-right', 'center', 'inner-left', 'outer-left'); 
    })
}

/** Takes the given index and gives the proper
 * classes to each event card to generate a
 * carousel with the n-th index as the center
 */
const carouselFromCenter = function(n) {
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
const circularIndex = function (index) {
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
    eventNodes.forEach( node => {
        node.addEventListener('click', (e) => {
            currentCenter = parseInt(node.dataset.index);
            initializeCarousel();
        })
    })
}