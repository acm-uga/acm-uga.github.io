    // {"title":"TITLE", "short": "SHORT", "long": "long", "img":"resources/event_imgs/IMG", "date":"DATE"},

var event_info = [ 
    /*
    {"title":"Google + UGA CS", "short": "Join ACM at UGA's streaming of Google's CS-wide talk to learn more about how to prepare for careers in technology!", "long": "long", "img":"resources/event_imgs/googleuga6.png", "date":"MAR 31, 2022"},
    {"title":"Game Night", "short": "Relax and unwind during midterms with games including Smash, Mario Kart, and more!", "long": "long", "img":"resources/event_imgs/Game_Night.png", "date":"MAR 3, 2022"},
    {"title":"Guide to UGAHacks", "short": "Find out what it means to be a hacker with a breakdown of past events and winning projects!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/BeginnerGuide_1.png", "date":"FEB 17, 2022"},
    {"title":"Question Heir", "short": "Join us in this collab meet with Girls.Code() for pizza, games, and a place to ask your questions!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/question_11_17_21.png", "date":"NOV 18, 2021"},
    {"title":"AT&T + ACM", "short": "Representatives from AT&T come to speak with us about life at AT&T and in their Technology Development Program!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/att.png", "date":"OCT 16, 2021"},
    {"title":"CSIP", "short": "Join us in Boyd 328 to learn more about how to ace your technical and behavioral interviews.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/csip.png", "date":"Every Tuesday at 6:00"},
    */
   
    {"title":"CSIP", "short": "Come join us to prepare for your interviews in all things related from technical to behavioral.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/csip.png", "date":"Every Tuesday at 6:00"},
    {"title":"Machine Learning Tensorflow", "short": "ACM and GDG Athens present a workshop on Machine Learning and Tensorflow.", "long": "This is event 1's super long description!", "img":"resources/event_imgs/Machine_Learning_and_Tensorflow_1 (1).png", "date":"11/17/22"},
    {"title":"Figma Workshop", "short": "Learn to create stunning graphics and prototypes with Figma!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/Figma_Workshop_22.png", "date":"11/10/22"},
    {"title":"Makerspace Workshop", "short": "Learn how Makerspaces can bring your designs into reality!", "long":"This is event 1's super long description!", "img": "resources/event_imgs/makerspace22.png", "date":"11/03/22"},
    {"title":"Compose Camp", "short": "ACM and GDG Athens teach you to create android UIs with Jetpack Compose!", "long": "This is event 1's super long description!", "img":"resources/event_imgs/Compose_Camp_2022.png", "date":"10/20/22"},    
    {"title":"Game Night Social", "short": "Meet up with fellow ACM members for a night of videogames, card games, and board games! (+free food)", "long": "This is event 2's super long description!", "img":"resources/event_imgs/Game_night_social_7.png", "date":"09/29/22"},
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