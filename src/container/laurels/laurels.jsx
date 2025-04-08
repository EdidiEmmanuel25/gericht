import React from "react";
import {SubHeading,Lau} from '../../components/index'
import { award01,award02,award03,award05, laurels } from "../../assets/image";
import './laurels.css'


const Laurels = () => {
    return(
        <div className="lau app_bg "id="awards">
            <div className="lau-info">
                <SubHeading title="Awards & Regconnitions"/>
                <h1>Our Laurels</h1>
            </div>

            <div className="lau-award">
                <div className="lau-award_card">
                <Lau image={award01} title="Rising star" subtitle="European rating system"/>
                </div>
                <div className="lau-award_card">
                <Lau image={award02} title="Michelin Stars" subtitle="The ultimate recognition" />
                </div>
                <div className="lau-award_card">
                <Lau image={award03} title="Outstanding Chef" subtitle="The ultimate recognition" />
                </div>
                <div className="lau-award_card">
                <Lau image={award05} title="Gault & Millau Awards" subtitle="European rating system" />
                </div>
                </div>
                <div className="lau-img">
                    <img src={laurels} alt="" />
                </div>


        </div>
    );
}


export default Laurels;