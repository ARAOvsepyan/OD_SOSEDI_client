import React, {createContext} from 'react';
import App from './App';
import UserStore from "./store/UserStore";
import BlogStore from './store/BlogStore';
import MessageStore from './store/MessageStore';
import AdressStore from './store/AdressStore'
import { createRoot } from 'react-dom/client';

export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Context.Provider value={{
      user: new UserStore(),
      blog: new BlogStore(),
      message: new MessageStore(),
      adress: new AdressStore()
    }}>
    <App />
</Context.Provider>,
);



