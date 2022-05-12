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
                <h2 className="title_about">Подробная информация о "CОСЕДЯХ"</h2>
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
            <p className="coop-info-tf_coop"> <span className="tf_coop">Телефон</span><br/> +7 (977) 362-20-01 </p>
            <p className="coop-info-mail_coop"><span className="tf_coop">E-mail</span> <br/>ara07.99@icloud.com</p>
            
    </main>
    )
  }

export default About;