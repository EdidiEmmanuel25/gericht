import React, { useState } from "react";
import {video} from '../../assets/image'
import {FaPauseCircle} from "react-icons/fa";
import {FaPlayCircle} from "react-icons/fa";
import './intro.css'


const Intro= () => {
    const [playVideo ,setPlayVideo] = useState(false)
    const vidRef = React.useState();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo){
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }


    return(
        <div className="video">
            <video src={video}
            ref={vidRef}
             type="video/mp4"
             loop 
             controls={false}
              muted />
              <div className="video-overlay flex_center">
                  <div className="video-overlay_circle" onClick={handleVideo}>
                      {playVideo ? (
                        <FaPauseCircle color="#fff" fontSize={34} />
                      ) : <FaPlayCircle color="#fff" fontSize={34} />}
                  </div>
              </div>
        </div>
    );
}


export default Intro;