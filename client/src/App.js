//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './components/AppRoute';
import ScrollToTop from './components/ScrollTo';

function App() {
  return (
    
    <BrowserRouter>
      <ScrollToTop />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
