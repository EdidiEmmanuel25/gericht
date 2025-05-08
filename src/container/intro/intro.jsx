import React, { useState } from "react";
import {video} from '../../assets/image'
import './intro.css'


const Intro= () => {


    return(
        <div className="video">
            <video src={video}
             autoPlay 
             muted 
             loop 
             playsInline 
               />
              
        </div>
    );
}


export default Intro;