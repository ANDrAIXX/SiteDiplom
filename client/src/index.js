import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/UserStore';
import GroupStore from './store/JournalStore';
import ScrollToTop from './components/ScrollTo';
import { Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null);

root.render(

  <Context.Provider value={{
    user: new UserStore(),
    group: new GroupStore()
    }}>
    <App />
  </Context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
