import React from "react";
import './chef.css'
import {SubHeading} from '../../components/index'
import {chef,quote,sign} from '../../assets/image'


const Chef = () => {
    return(
        <div className="chef app_bg ">
                <div className="chef_img">
                    <img src={chef} alt="" />
                </div>

                <div className="chef_info">
                    <SubHeading title='Chef Word' />
                    <h1>What WE Belive In</h1>

                    <div className="chef_content">
                        <div className="chef_content-qoute">
                            <img src={quote} alt="" />
                            <p>Chef Kelvin, the heart of **La Bella Cucina**, crafts exquisite dishes with passion. His secret? Fresh ingredients,</p>
                        </div>
                            <p> masterful techniques, and a sprinkle of magic—turning every meal into an unforgettable culinary experience.</p>
                    </div>
                    <div className="chef_sign">
                        <p>Kelvin Luo</p>
                        <p>Chef & Founder</p>
                        <img src={sign} alt="" />
                    </div>
                </div>
        </div>
    );
}


export default Chef;