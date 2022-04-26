import React from "react";
import '../css/root.css'
import '../css/footer.css'
import {MAIN_ROUTE} from '../utils/consts'
import { NavLink } from "react-router-dom";


import icons_1 from '../images/icons/icons_16px/001-vk.png'
import icons_2 from '../images/icons/icons_16px/002-telegram.png'
import icons_3 from '../images/icons/icons_16px/004-youtube.png'
import icons_4 from '../images/icons/icons_16px/003-whatsapp.png'
import icons_5 from '../images/icons/icons_16px/005-telegram-1.png'

const Footer = () => {
    return (
    <div className="footer">
        <div className="icons">
            <p><a rel="noopener noreferrer"  href=" "><img src={icons_1} alt=''/></a></p>
            <p><a rel="noopener noreferrer"  href=" "><img src={icons_2} alt=''/></a></p>
            <p><a rel="noopener noreferrer"  href=" "><img src={icons_3} alt=''/></a></p>
            <p><a rel="noopener noreferrer"  href=" "><img src={icons_4} alt=''/></a></p>
            <p><a rel="noopener noreferrer"  href=" "><img src={icons_5} alt=''/></a></p>
        </div>
       
        <h1 className="footer-text"><NavLink to = {MAIN_ROUTE}>ОД "СОСЕДИ"</NavLink></h1>
    </div>
    );
}

export default Footer;