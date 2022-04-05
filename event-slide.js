var event_info = [ 
    {"title":"Game Night", "short": "Relax and unwind during midterms with games including Smash, Mario Kart, and more!", "long": "long", "img":"resources/event_imgs/question_11_17_21.png", "date":"11/17/2021"},
    {"title":"Question Heir", "short": "Join us in this collab meet with Girls.Code() for pizza, games, and a place to ask your questions!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/question_11_17_21.png", "date":"11/17/2021"},
    {"title":"Climate and CS", "short": "In this meeting we took a look at UGA Climateology's WeatherSTEM API as well as the power of a Jupyter Notebook.", "long": "This is event 2's super long description!", "img":"resources/event_imgs/climate_cs_04-18-21.png", "date":"03/18/21"},
    {"title":"Blackrock @ ACM", "short": "Come meet BlackRock to see learn about their company, what they do, and their innovative technologies. This is A UGAHacks pre-event featuring BlackRock!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/blackrock_02_04_21.png", "date":"02/04/21"},
    {"title":"New Student Orientations", "short": "Come find us at orientations!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_tabling.png", "date":"05/15/21"},
    {"title":"Research Panel", "short": "Meet our featured professers Hollingsworth, Keshtgari, Cotterell, and Dashi. Here we will ask them questions pertaining to research, how to get involved, and their presence in the computer science community", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_research.png", "date":"04/15/21"},
    {"title":"CSIP", "short": "Come join us to prepare for your interviews in all things related from technical to behavioral.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/csip.png", "date":"Every Tuesday at 6:00"},
];

function renderEventSlide() { 
    var elem = document.getElementById("event-list"); //The container for the inserted links
    var count = 0;
    while (count < event_info.length || count < 3) { 
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