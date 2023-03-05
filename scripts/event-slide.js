
var event_info = [ 
    
    {"title":"Open Source Project", "short": "Join us for our first ever open source project! Add to your resumè and create something great!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/open-source-project.png", "date":"Every Wednesday at 5:30PM"},  
    {"title":"Flutter Foreward Extended", "short": "ACM and GDG Athens present a workshop on Flutter, Google's cross-platform development framework! Join us and learn how you can code your first Flutter app!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/FLutter workshop.png", "date":"02/16/23"},
    {"title":"ACM Research Panel", "short": "Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/Reasearch GBM 3 (2).png", "date":"02/09/23"},
    {"title":"Company Speaker: StateFarm", "short": "ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.", "long":"This is event 1's super long description!", "img": "resources/event_imgs/gmb-2-statefarm.png", "date":"01/26/23"},
    {"title":"Fullstack Development", "short": "Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!", "long": "This is event 2's super long description!", "img":"resources/event_imgs/Full_Stack_Graphic.png", "date":"01/19/23"},
   
    
   
      
    
];

/** Render event slides from event_info */
function renderEventSlide() { 
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

        elem.appendChild(listItem);
        count = count + 1;
    }
    initializeCarousel();
}

/**Initialize carousel on events, place each element on the carousel
 * according to its index in eventNodes.
*/
const initializeCarousel = function() {
    //Get nodes
    const eventNodes = document.querySelectorAll('.event-item');
    console.log(eventNodes);
    eventNodes.item(0).classList.add('outer', 'outer-left');
    eventNodes.item(1).classList.add('inner', 'inner-left');
    eventNodes.item(2).classList.add('center');
    eventNodes.item(3).classList.add('inner', 'inner-right');
    eventNodes.item(4).classList.add('outer', 'outer-right');
}