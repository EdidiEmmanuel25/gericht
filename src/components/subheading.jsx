import React from "react";
import{spoon} from '../assets/image'



const SubHeading = ({title}) => {
    return(
        <div style={{marginBottom:'1rem'}}>
            <p>{title}</p>
            <img src={spoon} alt="spoon" className="spoon_img" />
        </div>
    );
}


export default SubHeading;
