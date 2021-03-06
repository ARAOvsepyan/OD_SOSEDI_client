import React, {useContext, useEffect, useState} from 'react'
import {Helmet} from 'react-helmet'
import image from '../images/0000-0250.gif'
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
                setButton_1_value('馃寖 小袨小袝袛袠 ' + data[0].name)
                setButton_1_link(data[0].link)  
            }
            
            if (data[1].name == null) {
                setButton_2_value(' ')
            } else {
                setButton_2_value('馃寙 小袨小袝袛袠 ' + data[1].name)
                setButton_2_link(data[1].link)
            }

            if (data[2].name == null) {
                setButton_3_value(' ')
            } else {
                setButton_3_value('馃寚 小袨小袝袛袠 ' + data[2].name)
                setButton_3_link(data[2].link)
            }
            
            document.getElementById('button').style.zIndex = '2'
        })
    }
    
    return (
        <main className='main_main'>
            <Helmet>
                <title> 袨袛 芦小袨小袝袛袠禄 | 袚谢邪胁薪邪褟</title>
            </Helmet>
            <div className="content_main">
                <h2 className="content-title_main">袨袛 "小袨小袝袛袠" 芯斜褗械写懈薪褟械褌!</h2>
                <div className="col-1_main">袟写械褋褜 屑褘 写械谢懈屑褋褟 褋芯胁械褌邪屑懈, 锌褉芯斜谢械屑邪屑懈, 懈薪褋邪泄写邪屑懈 懈 薪芯胁芯褋褌褟屑懈. <br />
                </div>
                <div className="col-2_main">袨锌械褉邪褌懈胁薪芯械 懈薪褎芯褉屑懈褉芯胁邪薪懈械 芯 褋芯斜褘褌懈褟褏 薪邪褕械谐芯 谐芯褉芯写邪, 褌芯谢褜泻芯 胁邪卸薪褘械 薪芯胁芯褋褌懈 懈 锌芯谢械蟹薪邪褟 懈薪褎芯褉屑邪褑懈褟.
                </div>
                <img src={image} className='content-img_main' width='500' alt='' />
            </div>
            <div className="search-bar_main">
                <h2 className="search-title_main">袧邪泄写懈 褋胁芯懈褏 <span className="color-main-text_main">小袨小袝袛袝袡</span></h2>
                <lable className="info_main">袙胁械写懈 褋胁芯泄 邪写褉械褋 懈 薪邪泄写懈 <span className="color-main-text_main">褌械谢械谐褉邪屑 泻邪薪邪谢褘 褋胁芯械谐芯 褉邪泄芯薪邪.</span></lable>
                <AddressSuggestions
                    token={API_TOKEN}
                    deferRequestBy={300}
                    onChange={e => setAdress(e.value)} 
                    count={5}
                    maxChars={5}
                />
                <button type="button_main" className="search_main" onClick={findAdress}>袩芯懈褋泻</button>
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
                <h2>袩芯褋谢械写薪懈械 薪芯胁芯褋褌懈</h2>
                <div class="container_blog">
                        <BlogList/>
                </div>
                <NavLink to = {BLOG_ROUTE}>
                    <button className='view_blog'>袝褖械</button>
                </NavLink>
            </div>
        </main>
    )
});

export default Main;