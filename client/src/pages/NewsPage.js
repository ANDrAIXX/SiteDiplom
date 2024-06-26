import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-news.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import HeaderPages from './Dublicates/HeaderPages';
import FooterPages from './Dublicates/FooterPages';
import MenuPages from './Dublicates/MenuPages';

const ProfilePage = () => {
    return (
        <div>
            <HeaderPages/>

            <div id="Main-Width" className="DisplayFlex-row">
                <div id = "Left-Buttons">
                    <MenuPages />
                </div>

                <div id = "Right-Content">
                    <div className="Otstup-top"></div>
                    <div className="DisplayFlex-row FlexAlign-center">
                        <p className="TextSize-kilo MarginNone Width-midle"> Новости </p>
                        <form className="Form-poisk">
                            <input placeholder="Поиск..." type="text" className="Poisk MarginNone TextSize-santi"/>
                            <button type="submit" className="Button-poisk"> <img alt="lupa" src = {require('../components/Images/lupa.png')} className="ImgSize-cover Width-midle Margin-Left"/> </button>
                        </form>
                        <a href="" className="BittonBlue MarginNone TextSize-santi Button-sort"> Сначало </a>
                    </div>

                    <div className="NewsBlock DisplayFlex-column">
                        <div className="DisplayFlex-row FlexJustify-start">
                            <div className="MiniAvatar-block FlexJustify-center TextSize-santi DisplayFlex-row"> 
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/12.jpg')} className="ImgSize-cover ImgSize-normal"/>
                            </div>
                            <div className="NonButton DisplayFlex-column NewsAvatar-text">
                                <p className="TextSize-mili MarginNone"> Минка Татьяна Антоновна </p>
                                <p className="TextSize-mili MarginNone Text-gray"> 22 мая 2024 </p>
                            </div>
                        </div>
                        <p className="TextSize-mili MarginNone padding-top-05em"> День здоровья! Группа рада и я тоже. </p>
                        <div className="NewsImg-block DisplayFlex-row FlexJustify-center">
                            <div className="ImgNews DisplayFlex-row FlexJustify-center">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (4).jpg')} className="ImgSize-contain z-index-1"/>
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (4).jpg')} className="ImgSize-contain Position-Absolute Width-full blur-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;