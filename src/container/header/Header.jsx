import React from "react";
import './header.css'
import{welcome} from '../../assets/image'
import {SubHeading} from "../../components";


const Header = () => {
    return(
        <div className="header">
            <div className="header_details">
                <SubHeading title='Chase The New Flavour' />
                <h1>THE KEY TO FINE DINNING</h1>
                <p>"Welcome to Gericht Fine DINNING, where delicious flavors, fresh ingredients, and warm hospitality create unforgettable dining experiences. Taste perfection today!"</p>
                <div className="button">
                    <button>Explore Now</button>
                </div>
            </div>
            <div className="header_image">
                <img src={welcome} alt="welcom" />
            </div>
        </div>
    );
}


export default Header;