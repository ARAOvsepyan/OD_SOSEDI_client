import React, {useContext, useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'
import image from '../images/logo.png'
import '../css/main.css'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import BlogList from "../components/BlogList";
import {fetchLastBlog} from '../http/blogApi'
import {fetchAdress} from '../http/adressApi'
import { BLOG_ROUTE } from '../utils/consts'
import { NavLink } from 'react-router-dom'
import { AddressSuggestions } from "react-dadata";

const API_TOKEN = '844ced12ad72812592a1ae37bd5a2439912cd9eb'

const Main = observer(() => {
    const [addreses, setAdress] = useState('')
    const {blog} = useContext(Context)
    const [button_1_value, setButton_1_value] = useState('')
    const [button_2_value, setButton_2_value] = useState('')
    const [button_3_value, setButton_3_value] = useState('')
    const [button_1_link, setButton_1_link] = useState('')
    const [button_2_link, setButton_2_link] = useState('')
    const [button_3_link, setButton_3_link] = useState('')

    useEffect(() => {
        fetchLastBlog().then(data => {blog.setBlog(data.rows)})
    }, [])

    const findAdress = () =>{
        fetchAdress(addreses.split('/').join(' ')).then(data => {
            if (data[0].name == null) {
                setButton_1_value(' ')
            } else {
                setButton_1_value('🌃 СОСЕДИ ' + data[0].name)
                setButton_1_link(data[0].link)  
            }
            
            if (data[1].name == null) {
                setButton_2_value(' ')
            } else {
                setButton_2_value('🌆 СОСЕДИ ' + data[1].name)
                setButton_2_link(data[1].link)
            }

            if (data[2].name == null) {
                setButton_3_value(' ')
            } else {
                setButton_3_value('🌇 СОСЕДИ ' + data[2].name)
                setButton_3_link(data[2].link)
            }
            
            document.getElementById('button').style.zIndex = '2'
        })
    }
    
    return (
        <main className='main_main'>
            <Helmet>
                <title> ОД «СОСЕДИ» | Главная</title>
            </Helmet>
            <div className="content_main">
                <h2 className="content-title_main">ОД "СОСЕДИ" объединяет!</h2>
                <div className="col-1_main">Здесь мы делимся советами, проблемами, инсайдами и новостями. <br />
                </div>
                <div className="col-2_main">Оперативное информирование о событиях нашего города, только важные новости и полезная информация.
                </div>
                <img src={image} className='content-img_main' width='500' alt='' />
            </div>
            <div className="search-bar_main">
                <h2 className="search-title_main">Найди своих <span className="color-main-text_main">СОСЕДЕЙ</span></h2>
                <lable className="info_main">Введи свой адрес и найди <span className="color-main-text_main">телеграм каналы своего района.</span></lable>
                <AddressSuggestions
                    token={API_TOKEN}
                    deferRequestBy={300}
                    onChange={e => setAdress(e.value)} 
                    count={5}
                    maxChars={5}
                />
                <button type="button_main" className="search_main" onClick={findAdress}>Поиск</button>
                <div className="btn_main" id='button'>
                    <button
                        type="button" 
                        className="button-1_main"
                    ><a className='adress_link' href={button_1_link} rel="noopener noreferrer"  target='_blank'>
                        {button_1_value}</a>
                    </button>
                    <button 
                        type="button"
                        className="button-2_main" 
                    ><a className='adress_link' href={button_2_link} rel="noopener noreferrer"  target='_blank'>
                        {button_2_value}</a>
                    </button>
                    <button 
                        type="button"
                        className="button-3_main" 
                    ><a className='adress_link' href={button_3_link} rel="noopener noreferrer"  target='_blank'>
                        {button_3_value}</a>
                    </button>
                </div>
            </div>
            <div className="blog_main">
                <h2>Последние новости</h2>
                <div class="container_blog">
                        <BlogList/>
                </div>
                <NavLink to = {BLOG_ROUTE}>
                    <button className='view_blog'>Еще</button>
                </NavLink>
            </div>
        </main>
    )
});

export default Main;