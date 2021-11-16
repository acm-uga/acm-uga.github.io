var event_info = [ 
    {"title":"Space Night", "short": "A meeting w/ the Small Satellite Research Laboratory and Big Satellite Club!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/space_04_01_21.PNG", "date":"04/01/21"},
    {"title":"Climate and CS", "short": "A look at UGA Climateology's WeatherSTEM API!", "long": "This is event 2's super long description!", "img":"resources/event_imgs/climate_cs_04-18-21.png", "date":"03/18/21"},
    {"title":"Blackrock @ ACM", "short": "A UGAHacks pre-event featuring BlackRock!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/blackrock_02_04_21.png", "date":"02/04/21"},
    {"title":"Research Panel", "short": "A research panel with professors and labs!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_research.png", "date":"04/15/21"},
    {"title":"UGAHacks @ ACM", "short": "A UGAHacks team-building event!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_ugahacks.png", "date":"01/21/21"},
    {"title":"New Student Orientations", "short": "Come find us at orientations!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_tabling.png", "date":"05/15/21"}
];

function renderEventSlide() { 
    var elem = document.getElementById("upcomingEvents"); //The container for the inserted links
    var count = 0;
    while (count < event_info.length && count < 4) { 
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        var title = document.createElement("h3");
        var short = document.createElement("p");
        var date = document.createElement("p");
        var img = document.createElement("img");

        listItem.className = "upcoming-li"

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