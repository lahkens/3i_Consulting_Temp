import React from "react";
import HeroSection from '../../Components/HeroSection/HeroSection';
import contactBg from '../../Assets/Images/Group 11671.png';
import HomeContactUs from '../Home/HomeContactUs';

function Contact(){


    return(<>
    <HeroSection img={contactBg} />
    <HomeContactUs/>
    </>)
}

export default React.memo(Contact)