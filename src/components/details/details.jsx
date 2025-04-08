import React from "react";
import  './details.css'



const Details = ({title, price}) => {
    return(
        <div className="details">
            <div className="details_head">
                <p>{title}</p>
            </div>
            <div className="dash" />
            <div className="details_bottom">
                <p> {price}</p>
                </div>
            
        </div>
    );
}


export default Details;
