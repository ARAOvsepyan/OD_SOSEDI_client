import React, {useContext, useEffect, useState} from 'react';
import {check} from "./http/userAPI";
import {Context} from "./index";
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import {Spinner} from "react-bootstrap";

const App = () => {
  const {user} = useContext(Context)

  const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
            console.log(user);
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
