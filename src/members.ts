/**<div class="member-div">
            <p class="officer-role">Website</p>
            <p class="officer-name">Vansh Arora</p>
            <img src="./resources/member_img/vansh-arora.png" class="member-photo">
        </div>
*/
import ACMExecutive from './types/ACMExecutive'
import membersInfo from './info/memberInfo.json'

const members: ACMExecutive[] = membersInfo;
const acmOfficers = document.querySelector('#acm-officers');

/** Render the executive board members. */
const renderMemberDivs = function () {
    members.forEach(member => {
        const outerDiv = document.createElement("div");
        outerDiv.classList.add("member-div");

        const role = document.createElement("p");
        role.classList.add("officer-role");
        role.textContent = member.role;

        const name = document.createElement("p");
        name.classList.add("officer-name");
        name.textContent = member.name;

        const memberPhoto = document.createElement("img");
        memberPhoto.classList.add("member-photo");
        memberPhoto.src = member.img;

        outerDiv.append(role, name, memberPhoto);

        acmOfficers?.append(outerDiv);

    })

};

export default renderMemberDivs;

