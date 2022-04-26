import React from 'react'
import {Helmet} from 'react-helmet'
import image_about from '../images/about-ph.png'
import '../css/about.css'

const About = () => {
    return (
        <main className='main_about'>
            <Helmet>
                <title> ОД «СОСЕДИ» | О проекте</title>
            </Helmet>
            <div className="text_about">
                <h2 className="title_about">О проекте</h2>
                <h3 className="sub_title_about">С чего все начиналось</h3>
                <p className="text_about">
                    На мой взгляд, в современном мире важны такие качества, 
                    как самоотдача, индивидуальность, 
                    чувство юмора и доброта.
                </p>
                <p>
                    Чтобы иметь возможность их проявить, 
                    я создал(а) блог «СОСЕДИ» в 2000 году.
                </p>
                <p className="p-last_about">
                    Благодаря регулярным публикациям он быстро нашел свою аудиторию. 
                    Здесь вы сможете не только узнать о моих увлечениях, 
                    но и лучше понять, что интересно вам самим.
                </p>
            </div>
            <img className="img_about" src={image_about} alt=''/>
            <div className='future_projects_about'>
                <h2>Будущие проекты</h2>
                <ul className='plans_about'>
                    <li><p>Проект 1</p></li>
                    <li><p>Проект 2</p></li>
                    <li><p>Проект 3</p></li>
                    <li><p>Проект 3</p></li>
                </ul>
            </div>
    </main>
    )
  }

export default About;