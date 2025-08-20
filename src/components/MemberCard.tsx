import React from "react";
import ACMExecutive from "../types/ACMExecutive";

type MemberCardProps = {
    member: ACMExecutive
}

/** Renders an ACMExecutive member. */
const MemberCard = function({member}: MemberCardProps) {
    return (
        <div className="member-div"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <div className="officer-role">{member.role}</div>
            <div className="officer-name">{member.name}</div>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <img 
                className="linkedin-icon" 
                src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" 
                alt="LinkedIn Profile"
                width={28} height={28}
                style={{ marginBottom: "8px" }}
            />
            </a>
            <img className="member-photo" src={member.img}></img>
        </div>
    )
}

export default MemberCard;