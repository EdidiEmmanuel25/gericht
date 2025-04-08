import React from "react";

const Lau = ({image,title,subtitle}) => {
    return(
        <div className="l1">
            <img src={image} alt="kcns" />
            <p>{title}</p>
            <p>{subtitle}</p>
            
        </div>
    );
}


export default Lau;