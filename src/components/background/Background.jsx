import React from "react";
import { useMediaQuery } from "react-responsive";
import defaultBackground from "../../media/Default-Background.png";
import mobileBackground from "../../media/Mobile-Background.png"; 
import tabletBackground from "../../media/Tablet-Background.png"; 

const Background = () => {
    const isDesktop = useMediaQuery({ minWidth: 1025 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    let backgroundImage;
    if (isMobile) {
        backgroundImage = mobileBackground;
    } else if (isTablet) {
        backgroundImage = tabletBackground;
    } else if (isDesktop) {
        backgroundImage = defaultBackground;
    }

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', // Breite des Hintergrunds
        height: '100vh', // Höhe des Hintergrunds
    };

    return <div style={backgroundStyle}></div>;
};

export default Background;