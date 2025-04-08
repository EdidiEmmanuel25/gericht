import React from "react";
import './findus.css'
import { SubHeading } from "../../components";
import { findus } from "../../assets/image";


const FindUs = () => {
    return(
        <div className="find app_bg" id="contact">
            <div className="find-info">
                <SubHeading title='contact' />
                <h1>Find Us</h1>
                <div className="find-content">
                    <p>"Follow the aroma, turn left at flavor street, and enter taste paradise now!"</p>
                    <p>Opening Hours</p>
                    <p>Mon-fri 10.00AM-2.00PM</p>
                    <p>sat-sun 10.00AM-2.00PM</p>
                </div>
                <button type="button">Visit Us</button>
            </div>
            <div className="find-image">
                <img src={findus} alt="" />
            </div>
        </div>
    );
}


export default FindUs;