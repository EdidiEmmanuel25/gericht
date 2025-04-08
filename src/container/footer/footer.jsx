import React from "react";
import { NewsLetter } from "../../components";
import './footer.css'


const Footer = () => {
    return(
        <div className="footer">
            <NewsLetter/>

            <div className="footer-links">
                <div className="footer-links_contact">
                    <div className="first">
                        <h4>contact</h4>
                        <p>Stay connected, reach out, let's talk today!</p>
                        <p>09047446474647</p>
                    </div>
                </div>
                <div className="footer-links_logo"></div>
            </div>
        </div>
    );
}


export default Footer;