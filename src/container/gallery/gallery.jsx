import React from "react";
import './gallery.css'
import { SubHeading } from "../../components";
import { gallery01,gallery02,gallery03,gallery04} from "../../assets/image";
import {FaArrowAltCircleRight, FaArrowCircleRight} from "react-icons/fa";
import {FaArrowAltCircleLeft} from "react-icons/fa";

const images = [gallery01, gallery02, gallery03,gallery04];

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const scroll = (diretion) => {
        const { current } = scrollRef;

        if (diretion === 'left'){
            current.scrollLeft -= 300
        }else{
            current.scrollLeft += 300
        }
    }


    return(
        <div className="gallery flex_center"> 
            <div className="gallery_content">
                <SubHeading title="Instagram" />
                <h1>Photo Gallery</h1>
                <p style={{color :'#AAA', marginTop:'2rem'}}>Sizzling steaks, juicy burgers, fresh seafood, crisp salads, homemade pasta, delightful desserts!</p>
                <button type="button">View More</button>
            </div>
            <div className="gallery-image">
                <div className="gallery-image_container" ref={scrollRef}>
                    {images.map((image,index) => (
                        <div className="gallery-images_card flex_center" key={'image' + index + 1}>
                            <img src={image} alt="Gallery" />
                        </div>
                    )
                    )}
                </div>
                <div className="gallery-image_arrow">
                    <div>
                    <FaArrowAltCircleLeft color="#fff" fontSize={20} className="gallery_arrow-icon" onClick={() => scroll('left')}/>
                    </div>
                   <div>
                   <FaArrowAltCircleRight color="#fff" fontSize={20} className="gallery_arrow-icon" onClick={() => scroll('right')}/>
                   </div>
                 
                </div>
            </div>
        </div>
    );
}


export default Gallery;