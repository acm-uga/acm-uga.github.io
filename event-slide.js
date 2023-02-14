
var event_info = [ 
    
    {"title":"CSIP", "short": "Come join us to prepare for your interviews in all things related from technical to behavioral.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/csip.png", "date":"Every Tuesday at 6:00PM"},
    {"title":"Open Source Project", "short": "Join us for our first ever open source project! Add to your resumè and create something great!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/open-source-project.png", "date":"Every Thursday at 5:30PM"},  
    {"title":"Fluter Foreward Extended", "short": "ACM and GDG Athens present a workshop on Flutter, Google's cross-platform development framework! Join us and learn how you can code your first Flutter app!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/FLutter workshop.png", "date":"02/16/23"},
    {"title":"ACM Research Panel", "short": "Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/Reasearch GBM 3 (2).png", "date":"02/09/23"},
    {"title":"Company Speaker: StateFarm", "short": "ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.", "long":"This is event 1's super long description!", "img": "resources/event_imgs/gmb-2-statefarm.png", "date":"01/26/23"},
    {"title":"Full Stack Developement for Hackathons", "short": "Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!", "long": "This is event 2's super long description!", "img":"resources/event_imgs/Full_Stack_Graphic.png", "date":"01/19/23"},
   
    
   
      
    
];

function renderEventSlide() { 
    var elem = document.getElementById("event-list"); //The container for the inserted links
    var count = 0;
    while (count < event_info.length) { 
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var short = document.createElement("p");
        var date = document.createElement("p");
        var img = document.createElement("img");

        listItem.className = "ev-li";

        listItem.append(link);
        link.append(img,title,date, short);
        img.src=event_info[count]['img'];
        title.appendChild(document.createTextNode(event_info[count]["title"]));
        short.appendChild(document.createTextNode(event_info[count]["short"]));
        date.appendChild(document.createTextNode(event_info[count]["date"]));
        short.className = "eventDate"

        elem.appendChild(listItem);
        count = count + 1;
    } 
}