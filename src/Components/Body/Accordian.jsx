import React from "react";
import "./Accordian.css";

function Accordian(props) {
    return (
        <div
            className={
                props.accordian
                    ? "accordian-container--active"
                    : "accordian-container"}
                    onMouseEnter={props.accordianClick}
                    onMouseLeave={props.accordianClick}
        >
            <div className="services">
                <div className="services-heading">Services</div>
                <li>Experience Design</li>
                <li>Software Engineering</li>
                <li>Digital Accelerators</li>
            </div>
            <div className="technologies">
            <div className="technologies-heading">Technologies</div>
            <li>Experience Design</li>
                <li>Software Engineering</li>
                <li>Digital Accelerators</li>
            </div>
        </div>
    );
}

export default Accordian;
