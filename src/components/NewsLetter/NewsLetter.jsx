import React from "react";
import SubHeading from "../subheading";
import './newsletter.css'



const NewsLetter = ({title}) => {
    return(
        <div className="newsletter">
            <div className="newsletter-heading">
                <SubHeading title='NewsLetter' />
                <h1>Subscribe To Our NewsLetter</h1>
                <p>And Never miss latest update</p>
            </div>
            <div className="newsletter-input">
                <input type="email" placeholder="Enter your E-mail Address" />
                <button type="button">Subscribe</button>
            </div>
        </div>
    );
}


export default NewsLetter;
