    let notificationBool = 0;
    let alertDiv = document.querySelector("#alert");
    let userInfoCard = document.querySelector("#userInfoCard");
    let leftPanel = document.querySelector("#leftPanel");
    let infoCards = document.querySelector("#infoCards");
    let userCardBox = '<div id="profilePicture"><img class="circleCrop" src="default_photo.jpeg" width="100" height="100"></div><br>' + 
                      '<b>Name:</b> <p id="name">LOADING</p>' + 
                      '<b>UGA Email:</b> <p id="email">LOADING@uga.edu</p>' +
                      '<b>Total Attendance Hours:</b> <p id="totalHours">Loading...</p>' + 
                      '<b>Membership Status:</b>* <p id="membershipStatus">Loading...</p>' + 
'<hr>* Note: Membership status may take up to 1 week to update. If your membership status is not updated after 1 week of payment, please contact us at <a href="mailto:ugaacm@uga.edu">ugaacm@uga.edu</a>. Your membership status shown is for ACM only. ACM-W Girls.Code() is our sister organization and only uses our portal for EL hour tracking.'
    let signInButton = document.querySelector(".signInButton");
    
    // fetching the login credential data, validating the uga.edu, and then sending it to database to take care of the rest
    function login(response) {
      const responsePayLoad = decodeJwtResponse(response.credential);
      signInButton.innerHTML = "<a href='javascript:location.reload();'>Logout</a>";
      if (responsePayLoad.hd != "uga.edu") {
        userInfoCard.innerHTML = "Please log in with your UGA email (MyID@uga.edu)";
      } else {
        userInfoCard.innerHTML = userCardBox;
        let profilePicture = document.querySelector("#profilePicture");
        let name = document.querySelector("#name");
        let email = document.querySelector("#email");
        let membershipStatus = document.querySelector("#membershipStatus");
        name.innerHTML = responsePayLoad.name;
        email.innerHTML = responsePayLoad.email;
        attendance = generateAttendance(responsePayLoad.email, responsePayLoad.given_name, responsePayLoad.family_name);
        profilePicture.innerHTML = '<img class="circleCrop" src="' + responsePayLoad.picture + '" width="100" height="100">';
      } // if
    } // login
    
    // check for if member paid dues
    function checkPayingMember(email) {
      return false;
    } // checkPayingMember
    
    function checkMemberStatus(email) {
      let memPaid = 0;
      let memForm = 0;
      return httpGetSync("https://script.google.com/macros/s/AKfycbyYNnp9nrUGVJJW-jN1wEsmflkd2jtsIR-qjEK-a7-8AjmMYQOSceTLCBWkNL5ihQqnrw/exec?myid=" + email, function(data){memPaid = data.memPaid; memForm = data.memForm});
    }

    // check if membership form is filled out
    function checkMembershipForm(email) {
      return false;
    } // checkMembershipForm
    
    function generateAttendance(email, fName, lName) {
      infoCards.innerHTML = "<div id='attendance' class = 'infoCard'><b>Attandance:</b><br><br><table id='attendanceTable'></table><br>This updates automatically! If you checked-in to a meeting or filled out a reflection and it does not show up here, please contact <a href='mailto:ugaacm@uga.edu'>ugaacm@uga.edu</a>.<br>If you would like to submit hours for ACM Open Source contributions, <a href='https://docs.google.com/forms/d/e/1FAIpQLSeXK0UvywJg2zSchh15h0UbqFU4NlAX0NsxBu2sJhpV3T4iyw/viewform?usp=pp_url&entry.1046101656=" + fName + "&entry.2100067491=" + lName + "&entry.2018225173=" + email + "'>click here</a>.</div></div>" +
"<div id='elInfo' class = 'infoCard'><b>About UGAHacks Experiential Learning</b> [<a href='javascript:showELInfo();'>show</a>]</div>"
      httpGetAsync("https://script.google.com/macros/s/AKfycbyYNnp9nrUGVJJW-jN1wEsmflkd2jtsIR-qjEK-a7-8AjmMYQOSceTLCBWkNL5ihQqnrw/exec?myid=" + email.split("@")[0], function(data){
  	dataParsed = JSON.parse(data);
        console.log(dataParsed);
        let attendanceTable = document.querySelector("#attendanceTable");
        initAttendanceTable(attendanceTable);
        fillAttendance(attendanceTable, dataParsed);
        //return dataParsed

        //const memberInfo = checkMemberInfo(email);        

	var payingMember = 0;
        var membershipForm = 1;
        if (0) {
          //membershipStatus.innerHTML = "Paying Member";
          //payingMember = 1;
        } else {
          //membershipStatus.innerHTML = "General Attendee (dues not paid)"
        } //if
        if (0) {
          //notificationBool = 1;
          //membershipForm = 0;
        } // if
          var hourCounter = 0;
        for (i = 0; i < dataParsed.length; i++) {
          hourCounter = hourCounter + dataParsed[i].hours;
          if (dataParsed[i].elAvailable && dataParsed[i].el == 0) {
            notificationBool = 1;
          } // if
        } // for
        document.querySelector("#totalHours").innerHTML = hourCounter;
        if (notificationBool) {
          alertDiv.innerHTML = '<div id="notifications" class="infoCard"></div>'
          let notifications = document.querySelector("#notifications");
          notifications.innerHTML = "<b>Notifications:</b>"
          // addMembershipNotifications(notifications, payingMember, membershipForm);
          addReflectionNotifications(notifications, dataParsed);
        } // if
      });
    } // generateAttendance

    function initAttendanceTable(table) {
      table.innerHTML += "<tr><th>Attendance ID (AID)</th><th>Date</th><th>Program</th><th>Hours</th><th>Reflection Status</th><th>Notes</th></tr>"
    } // initAttendanceTable

    function fillAttendance(table, attendance) {
      for (i = 0; i < attendance.length; i++) {
        table.innerHTML += "<tr><td>" + attendance[i].aid + "</td><td>" + attendance[i].month + "-" + attendance[i].day + "-" + attendance[i].year + "</td><td>" + attendance[i].program + "</td><td>" + attendance[i].hours + "</td><td>" + generateReflectionStatus(attendance[i]) + "</td><td>" + attendance[i].note + "</td></tr>"
      } // for
    } //fillAttendance

    function generateReflectionStatus(attendanceInfo) {
      if (attendanceInfo.elAvailable == 1 && attendanceInfo.el == 0) {
        return "Not Submitted";
      } else if (attendanceInfo.el > 0) {
        return "Submitted";
      } else {
        return "Not Submitted";
      } // if
    } // generateReflectionStatus

    function showELInfo() {
      document.querySelector("#elInfo").innerHTML = "<b>About UGAHacks Experiential Learning</b> [<a href='javascript:hideELInfo();'>hide</a>]<br>";
      document.querySelector("#elInfo").innerHTML += '<p id="elPara"><b>UGAHacks</b> (University Hackathons) is a 501(c)3 non-profit organization with the purpose of hosting large scale hackathon events every year for college students on the UGA campus. As a UGA student, you are eligible to earn Experiential Learning credit through UGAHacks by attending the flagship event hosted by the organization each year, along with completing several requirements as outlined by the UGAHacks Experiential Learning packet.' +
'<br><br>For a portion of this requirement, students must attend at least 3-hours of student organization activities through the UGA chapter of Association for Computing Machinery, ACM-W Girls.Code(), or Society for Cyber Security. There is an additional 9-hours of involvement that can also be fulfilled by student organization activities, adding up to a total of 12-hours in campus involvement. You can either choose to fulfill all 12 of your involvement hours through the same student organization, or complete your requirement by completing a combination of different activities through the various student organizations.' +
'<br><br>For any event to count towards your UGAHacks Experiential Learning requirement, you must fill out a <b>100-word</b> reflection within <b>1 week</b> of the event. You can submit your reflection and track your progress for ACM-related hours through your membership portal. You <b>DO NOT</b> need to be a paying member for your attendance to count towards UGAHacks EL.' +
'<br><br>Some examples of what you can put in your reflection include, but are not limited to:</p>' + '<ul>' +
'<li>Highlighting anything that you found valuable during a particular workshop or speaker event</li>' +
'<li>Discussing a topic or problem solving strategy that you learned during a particular CSIP or Competitive Programming session with examples from the meeting</li>' + 
'<li>Pointing out difficult concepts or misconceptions you encountered during a workshop</li>' + 
'<li>Making connections between something that you learned during a workshop and either something you encountered in class, or during a personal project</li>' +
'<li>Evaluating your strengths and weaknesses from participating in a programming competition, and brainstorming ways you can improve your skillset</li>' + '</ul>' +
"<p id='elPara'>For the <b>ACM Open Source Program</b>, simply attending meetings will not earn you UGAHacks Experiential Learning hours. However, you can submit your contribution hours for UGAHacks EL through your membership portal. For your ACM Open Source contributions to count towards UGAHacks EL, you must submit a <b>100-word</b> reflection for <b>every 3 hours</b> of contribution time (100 words for 1-3 hours, 200 words for 4-6 hours, 300 words for 7-9 hours, etc.) outlining your contributions along with manual hour tracking within <b>2 weeks</b> of your contribution through an approved commit or pull request on from the project GitHub repository, <b>NOT from a personal fork of the project</b>. If the work contributed was not submitted through your GitHub account, the account owner must cite you as a contributor somewhere on the commit or pull request. The change from your GitHub commit or pull request does not have to be present in the final OSP project, but should be a contribution to the development progress on the main project repository at some point of time. You may choose to submit reflections for multiple GitHub commits or pull requests at once. However, if you plan to do so, your oldest commit or pull request on the submission must not be older than 2 weeks. For your reflection to be approved, your contribution must be reasonable for the amount of claimed contribution hours. Although it is possible to submit 12-hours through ACM-OSP for simply correcting a minor typo on the README document, it's highly unlikely that the reflection will be approved for UGAHacks Experiential Learning during the final approval process. You may include your brainstorming process, an explanation of your implementation, or group discussion during the OSP meetings in your reflection, as long as it is relevant to the contributions made in your commit or pull request.<br><br>" +
"<br>* Please email <a href='mailto:hello@ugahacks.com'>hello@ugahacks.com</a> for any additional questions relating to UGAHacks Experiential Learning credit!</p>"
    } // showELInfo
    
    function hideELInfo() {
      document.querySelector("#elInfo").innerHTML = "<b>About UGAHacks Experiential Learning</b> [<a href='javascript:showELInfo();'>show</a>]";
    } // hideELInfo

    function addMembershipNotifications(notifications, paid, formBool) {
      if (!paid) {
        notifications.innerHTML += "<p><u>Membership Dues</u> - It looks like you have not paid for your membership dues! If you are interested in becoming a paid member, <a href='https://ugapac.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3AUGAARTS%3ATATE2324%3AMEM.ACM%3A&linkID=ta-ugaarts&shopperContext=&pc=&caller=&appCode=&groupCode=PAY&cgc=&dataAccId=157&locale=en_US&siteId=ev_ta-ugaarts'>click here</a> to pay for your membership dues! Please keep in mind that your membership status displayed on this portal is for ACM only. ACM-W Girls.Code() is our sister organization and only uses our portal for EL hour tracking.</p>"
      } else if (!formBool) {
        notifications.innerHTML += "<p><u>Membership Form</u> - It looks like you have not filled out your membership form! To ensure you recieve all of your membership benefits, <a href='https://forms.gle/k8o7NLeUJuiehQGf8'>click here</a> to fill out the membership form!</p>"
      } // if
    } // addMembershipNotifications

    function addReflectionNotifications(notification, attendance) {
      for (i = 0; i < attendance.length; i++) {
        if (attendance[i].elAvailable && attendance[i].elReflection.length == 0) {
          notification.innerHTML += "<p><u>EL Reflection</u> - It looks like you have not filled out a reflection from <i>" + attendance[i].month + "-" + attendance[i].day + "-" + attendance[i].year + "</i> yet. If you would like for your attendance to count towards UGAHacks Experiential Learning, please fill out your reflection <a href='" + attendance[i].elLink + "'>here</a>.</p>"
        } // if
      } // for
    } // addReflectionNotifications
    
    // parsing the login auth
    function decodeJwtResponse(data) {
      var tokens = data.split(".");
      return JSON.parse(atob(tokens[1]));
    } // decodeJwtResponse

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
} // httpGetAsync

function httpGetSync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, false); // true for asynchronous 
    xmlHttp.send(null);
} // httpGetAsync
