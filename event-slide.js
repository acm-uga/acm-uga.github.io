var event_info = [ 
    {"title":"Space Night", "short": "This is event 1's short description!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/space_04_01_21.PNG", "date":"04/01/21"},
    {"title":"Climate and CS", "short": "This is event 2's short description!", "long": "This is event 2's super long description!", "img":"resources/event_imgs/climate_cs_04-18-21.png", "date":"03/18/21"},
    {"title":"Blackrock @ ACM", "short": "This is event 3's short description!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/blackrock_02_04_21.png", "date":"02/04/21"}


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

        elem.appendChild(listItem);
        count = count + 1;
    } 
}