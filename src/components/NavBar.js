import React from "react";
import {NavLink} from 'react-router-dom'
import '../css/root.css'
import '../css/navbar.css'
import logo from '../images/logo.png'
import {ABOUT_ROUTE, BLOG_ROUTE, COOPERATION_ROUTE, MAIN_ROUTE} from '../utils/consts'

const NavBar = () => {

        
    
        const click =  () => {
            const mobNav = document.querySelector('.primary-nav')
            const navToggle = document.querySelector('.nav-toggle') 

            const visibility = mobNav.getAttribute('data-visible')
    
            if (visibility === 'false') {
                mobNav.setAttribute('data-visible', true)
                navToggle.setAttribute('aria-expanded', true)
            } else {
                mobNav.setAttribute('data-visible', false)
                navToggle.setAttribute('aria-expanded', false)
            }
        }
    
    return (
        <div className='header'>   
            <h1 className="title"><NavLink to = {MAIN_ROUTE}>ОД "СОСЕДИ"</NavLink></h1>
            <img src={logo} className="logo" width="70" alt=""/>
            <button className="nav-toggle" aria-controls="primary-nav" aria-expanded="false" onClick={click}><span className="sr-only">Menue</span></button>
            <nav  data-visible='false' className="primary-nav" id="navigation">
                <ul>
                    <li><NavLink to = {MAIN_ROUTE} >Главная</NavLink></li>
                    <li><NavLink to = {BLOG_ROUTE} activeclassname="active">Блог</NavLink></li>
                    <li><NavLink to = {COOPERATION_ROUTE} activeclassname="active">Сотрудничество</NavLink></li>
                    <li><NavLink to = {ABOUT_ROUTE} activeclassname="active">О проекте</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;