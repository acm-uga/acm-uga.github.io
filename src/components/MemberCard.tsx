import React from "react";
import ACMExecutive from "../types/ACMExecutive";

type MemberCardProps = {
    member: ACMExecutive
}

/** Renders an ACMExecutive member. */
const MemberCard = function({member}: MemberCardProps) {
    return (
        <div className="member-div">
            <div className="officer-role">{member.role}</div>
            <div className="officer-name">{member.name}</div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img 
            className="linkedin-icon" 
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
            alt="LinkedIn Profile"
            width={24} height={24}
            />
            </a>
            <img className="member-photo" src={member.img}></img>
        </div>
    )
}

export default MemberCard;