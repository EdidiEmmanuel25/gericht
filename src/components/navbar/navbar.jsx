import React, {useState} from "react";
import './navbar.css'
import { gericht,open,close } from "../../assets/image";


const NavBar = () => {
    const [toggleMenu , setToggelMenu] = useState(false)
    const Menu = () =>(
        <>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </>
    )

    return(
        <div className="navbar">
            <div className="navbar_logo">
                <img src={gericht} alt="gericht" />
            </div>
            <div className="navbar_menu">
                <Menu/>
            </div>
            <div className="navbar_sign">
                <a href="#log in">Log in/Register</a>
                <div/>
                <a href="#book teb">Book Table</a>
            </div>
            <div className="navbar_pho">
            <img src={open} alt="gericht" onClick={() => setToggelMenu(true)} />
            {toggleMenu  && (
             <div className="navbar_pho-overlay flex_center">
                  <img src={close} alt="close" sizes={27} className="overlay_close" onClick={() => setToggelMenu(false)}/>
                  <div className="navbar_pho-links">
                      <Menu  /> 
                    </div>  
                </div>    
                )}
            </div>
        </div>
    );
}


export default NavBar;