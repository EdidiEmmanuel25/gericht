import React from "react";
import './AboutUs.css'
import {G, knife, spoon} from '../../assets/image'


const AboutUs = () => {
    return(
        <div className="aboutus app_bg flex_center" id="about">
            <div className="aboutus-overlay flex_center">
                <img src={G} alt="G letter" />
            </div>
            <div className="aboutus-content flex_center">
                <div className="aboutus-content_about">
                    <h1>About Us</h1>
                    <img src={spoon} alt="spoon" />
                    <p>"Welcome to our restaurant, where great flavors, warm hospitality, and unforgettable moments come together. Enjoy your meal!"</p>
                    <button>Know More</button>
                </div>
                <div className="aboutus-content_knife">
                    <img src={knife} alt="knife" />
                </div>
                <div className="aboutus-content_history">
                    <h1>History</h1>
                    <img src={spoon} alt="spoon" />
                    <p>Founded in 2010, our restaurant began as a small family kitchen, growing into a beloved community dining destination. </p>
                    <button>Know More</button>
                </div>
            </div>
            </div>
    );
}


export default AboutUs;