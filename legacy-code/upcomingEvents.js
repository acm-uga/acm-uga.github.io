var event_info = [ 
    {"title":"CSSIP", "short": "Come join us to prepare for your interviews in all things related from technical to behavioral.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/csip.png", "date":"Every Tuesday at 6:00"},
    {"title":"Compose Camp", "short": "ACM and GDG Athens teach you to create android UIs with Jetpack Compose!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/studyhall.png", "date":"10/20/22"},    
    {"title":"Hacktober", "short": "Learn to build Discord bots with APIs! ", "long": "This is event 1's super long description!", "img":"resources/event_imgs/space_04_01_21.PNG", "date":"10/06/22"},
    {"title":"Google @UGA", "short": "Uga Alumni from Google give vital tips to help you build your technical career!", "long": "This is event 2's super long description!", "img":"resources/event_imgs/climate_cs_04-18-21.png", "date":"09/28/22"},
    {"title":"Technical Interview Prep", "short": "CSIP and Google help prepare you for interviewing!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/blackrock_02_04_21.png", "date":"09/27/22"},
    {"title":"Hackathon Team-Building", "short": "UGAHacks and ACM help you prepare for the hackathon!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_research.png", "date":"09/22/22"},
    {"title":"Google Cloud Workshop", "short": "ACM and GDG Athens give Google Cloud tips and tricks!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_ugahacks.png", "date":"09/15/22"},
    {"title":"Tech Organizations Showcase", "short": "Learn about different tech organizations at UGA!", "long": "This is event 3's super long description!", "img":"resources/event_imgs/acm_tabling.png", "date":"08/25/22"}
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