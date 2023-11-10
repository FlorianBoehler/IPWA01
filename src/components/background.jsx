import React from "react";
import videoBackground from "../media/videoBackground.mp4"


const Background = () => {
    return(<div className="background">
        <video src={videoBackground} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my side.</p>
        </div>
    </div>)

}

export default Background