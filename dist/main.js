(()=>{"use strict";var e=[{title:"Open Source Project",short:"Join us for our first ever open source project! Add to your resumè and create something great!",long:"This is event 1's super long description!",img:"../resources/event_imgs/open-source-project.png",date:"Every Wednesday at 5:30PM"},{title:"Flutter Foreward Extended",short:"ACM and GDG Athens present a workshop on Flutter, Google's cross-platform development framework! Join us and learn how you can code your first Flutter app!",long:"This is event 1's super long description!",img:"../resources/event_imgs/FLutter workshop.png",date:"02/16/23"},{title:"ACM Research Panel",short:"Come to the research panel to discuss research oportunities at UGA. Ask questions and explore your specific research interests.",long:"This is event 1's super long description!",img:"../resources/event_imgs/Reasearch GBM 3 (2).png",date:"02/09/23"},{title:"Company Speaker: StateFarm",short:"ACM is proud to host a guest speaker from StateFarm! Join us for exciting insight from the technology side of insurance buisness.",long:"This is event 1's super long description!",img:"../resources/event_imgs/gmb-2-statefarm.png",date:"01/26/23"},{title:"Fullstack Development",short:"Join ACM, GDG Athens, and UGAHacks for a crash course on full stack developement in preparation for the upcoming hackathon!",long:"This is event 2's super long description!",img:"../resources/event_imgs/Full_Stack_Graphic.png",date:"01/19/23"}];let t=null,n=2;const r=function(){s(n)},s=function(e){t.forEach((e=>{e.classList.remove("outer","inner","inner-right","outer-right","center","inner-left","outer-left")})),t.item(o(e-2)).classList.add("outer","outer-left"),t.item(o(e-1)).classList.add("inner","inner-left"),t.item(o(e)).classList.add("center"),t.item(o(e+1)).classList.add("inner","inner-right"),t.item(o(e+2)).classList.add("outer","outer-right")},o=function(e){return e>=0&&e<t.length||(e=o(e<0?e+t.length:e%t.length)),e};!function(){for(var s=document.getElementById("event-carousel"),o=0;o<e.length;){var i=document.createElement("li"),a=document.createElement("a"),c=document.createElement("h3"),l=document.createElement("p"),d=document.createElement("p"),u=document.createElement("img");i.className="event-item",i.append(a),a.append(u,c,d,l),u.src=e[o].img,c.appendChild(document.createTextNode(e[o].title)),l.appendChild(document.createTextNode(e[o].short)),d.appendChild(document.createTextNode(e[o].date)),l.className="event-short",d.className="event-date",i.dataset.index=o,s.appendChild(i),o+=1}t=document.querySelectorAll(".event-item"),r(),t.forEach((e=>{e.addEventListener("click",(t=>{n=parseInt(e.dataset.index),r()}))}))}()})();