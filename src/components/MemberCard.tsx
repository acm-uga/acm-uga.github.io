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
            <div className="member-photo">{member.img}</div>
        </div>
    )
}

export default MemberCard;