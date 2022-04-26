import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import coop_image from '../images/coop.png'
import '../css/coop.css'
import { createMessage } from '../http/messageAPI'

const Coop = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [message, setMessage] = useState('')
    
  
    const addMessage = () => {
      const messageForm = new FormData()
      messageForm.append('firs_name', firstname)
      messageForm.append('last_name', lastname)
      messageForm.append('email', email)
      messageForm.append('telephone', telephone)
      messageForm.append('message_info', message)
      try {  
          createMessage(messageForm).then(data => {
            setFirstName('')
            setLastName('')
            setEmail('')
            setTelephone('')
            setMessage('')

            var modal = document.getElementById("modal");
            modal.style.display = "block";
        })
      } catch (error) {
        alert(error.response.data.message)
      }
    }

    window.onclick = function(event) {
      var modal = document.getElementById("modal");
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    return (
      <main className='main_coop'>
        <Helmet>
          <title> ОД «СОСЕДИ» | Сотрудничество</title>
        </Helmet>
        <div className="content_coop">
          <h2 className="content-title_coop">СОТРУДНИЧЕСТВО</h2>
          <div className="col-1_coop">*Текст про покупку рекламы + приложу пдф-прайслист*</div>
          <img src={coop_image} className='content-img_coop' width='500' alt='' />
          <h2 className="coop-title_coop">Свяжитесь с нами</h2>
          <p className="coop-info-tf_coop"> <span className="tf_coop">Телефон</span><br/> +7 (977) 362-20-01 </p>
          <p className="coop-info-mail_coop"><span className="tf_coop">E-mail</span> <br/>ara07.99@icloud.com</p>

          <div className="coop-form_coop">
            <div className="coop-form-grid_coop">
              <input 
                id="firstname_coop" 
                className="input_coop firstname_coop" 
                type="text" 
                placeholder=" "
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor="firstname_coop" className="placeholder_coop firstname_coop">Фамилия</label>
    
              <input 
                id="lastname_coop" 
                className="input_coop lastname_coop" 
                type="text" 
                placeholder=" "
                value={lastname} 
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor="lastname_coop" className="placeholder_coop lastname_coop">Имя</label>
              
              <input 
                id="mail_coop" 
                className="input_coop mail_coop" 
                type="email " 
                placeholder=" "
                value={email}
                onChange={e => setEmail(e.target.value)} 
              />
              <label htmlFor="mail_coop" className="placeholder_coop mail_coop">Почта</label>
    
              <input 
                id="telephone_coop" 
                className="input_coop telephone_coop" 
                type="tel" 
                placeholder=" "
                value={telephone}
                onChange={e => setTelephone(e.target.value)} 
              />
              <label htmlFor="telephone_coop" className="placeholder_coop telephone_coop">Телефон</label>
    
              <textarea 
                id="message_coop" 
                className="input_coop message_coop" 
                type="text" 
                placeholder=" " 
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="message_coop" className="placeholder_coop message_coop">Сообщение</label>
            
              <button 
                id="btn" 
                type="text" 
                className="send_coop" 
                onClick={addMessage}
                
              >
                Отправить сообщение
              </button>
            </div>
            <div id="modal" className="modal_coop">
              <div className="modal-content_coop"> 
                <p className='message_coop_p'>Сообщение отправленно</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

export default Coop;