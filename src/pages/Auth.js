import React, { useState, useContext } from 'react'
import {Context} from "../index"
import '../css/auth.css'
import { login } from '../http/userAPI'
import { observer } from 'mobx-react-lite'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE} from "../utils/consts";

const Auth = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            user.setUser(data)
            user.setIsAuth(true)
            navigate(ADMIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <main className='auth_main'>
            <div className='auth_form'>
                <h2>Авторизация</h2>
                <div className='auth_input'>
                    <input 
                        className='auth_login'
                        placeholder='Логин'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        className='auth_password'
                        placeholder='Пароль'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className='auth_send' onClick={click}>Войти</button>
            </div>
        </main>
    )
  })

export default Auth;