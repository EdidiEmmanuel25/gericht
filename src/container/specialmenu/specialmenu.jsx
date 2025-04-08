import React from "react";
import './special.css'
import { SubHeading, Details } from "../../components";
import {menu} from '../../assets/image'


const SpecialMenu = () => {
    return(
        <div className="special flex_center " id="menu">
            <div className="special_title">
                <SubHeading title="M-6peal That Fits Your Taste" />
                <h1>Today's Special</h1>
            </div>
            <div className="special_menu">
                <div className="special_menu-wine flex_center">
                    <h2>Wine & Beer</h2>
                    <div className="special_menu-items">
                        <Details title='catena Malbee' price='$16' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                    </div>
                </div>
                <div className="special_menu-img">
                    <img src={menu} alt="" />
                </div>
                <div className="special_menu-cocktail flex_center">
                <h2>Cocktail & Fresh</h2>
                    <div className="special_menu-items">
                        <Details title='catena Malbee' price='$16' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                        <Details title='La Vieille Rose' price='$59' />
                    </div>
                </div>
                </div>
                <div className="special_button">
                    <button>Yous Now</button>
                </div>
        </div>
    );
}


export default SpecialMenu;