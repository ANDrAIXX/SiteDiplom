import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-message.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import FooterPages from './Dublicates/FooterPages';
import MenuPages from './Dublicates/MenuPages';
import HeaderPages from './Dublicates/HeaderPages';
import { Mes } from '../utils/constanta';

const ProfilePage = () => {
    return (
        <div>
            <HeaderPages />

            <div id="Main-Width" className="DisplayFlex-row">
                <div id = "Left-Buttons">
                    <MenuPages />
                </div>

                <div id = "Right-Content">
                    <div className="Otstup-top"></div>
                    <div className="DisplayFlex-row FlexAlign-center">
                        <p className="TextSize-kilo MarginNone Width-midle"> Сообщения </p>
                        <form className="Form-poisk">
                            <input placeholder="Поиск..." type="text" className="Poisk MarginNone TextSize-santi"/>
                            <button type="submit" className="Button-poisk"> <img alt="lupa" src = {require('../components/Images/lupa.png')} className="ImgSize-cover Width-midle Margin-Left"/> </button>
                        </form>
                        <Link to="" className="BittonBlue MarginNone TextSize-santi Button-sort"> Сначало </Link>
                    </div>

                    <Link to={Mes} className="MessageBlock DisplayFlex-row">
                        <div className="DisplayFlex-row FlexJustify-start">
                            <div className="NormalAvatar-block FlexJustify-center TextSize-santi DisplayFlex-row"> 
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/12.jpg')} className="ImgSize-cover Width-full ImgSize-normal"/>
                            </div>
                            <div className="NonButton DisplayFlex-column NewsAvatar-text">
                                <p className="TextSize-normal MarginNone"> Минка Татьяна Антоновна </p>
                                <p className="TextSize-mili Margin-Top-1em MarginNone Text-gray"> Новости? </p>
                            </div>
                        </div>
                        <p className="TextSize-mili MarginNone"> 22 мая 2024 </p>
                    </Link>

                    <div className="Margin-Top-2em">
                        <Link to="" className="BittonBlue TextSize-santi Button-sort"> Сегодня лучший день, чтобы начать новое общение! </Link>
                    </div>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;