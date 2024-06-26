import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-message.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import FooterPages from './Dublicates/FooterPages';
import MenuPages from './Dublicates/MenuPages';
import HeaderPages from './Dublicates/HeaderPages';

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

                    <div className="MessageBlock DisplayFlex-row MarginNone Margin-Bottom-1em">
                        <div className="DisplayFlex-row FlexJustify-start Width-full">
                            <div className="NormalAvatar-block FlexJustify-center TextSize-santi DisplayFlex-row AvatarList"> 
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Data-Base/12.jpg")} className="ImgSize-cover Width-full ImgSize-normal"/>
                            </div>
                            <div className="NonButton DisplayFlex-row NewsAvatar-text FlexAlign-center FlexJustify-start">
                                <div className="DisplayFlex-column">
                                    <div className="DisplayFlex-column  Margin-Right">
                                        <p className="TextSize-mili Text-gray MarginNone"> Фио </p>
                                        <p className="TextSize-normal MarginNone"> Минка Татьяна Антоновна </p>
                                    </div>
                                    
                                    <div className="DisplayFlex-column Margin-Right">
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Куратор группы </p>
                                        <p className="TextSize-normal MarginNone"> П-20 </p>
                                    </div>
                                </div>
                                <div className="DisplayFlex-column">
                                    <div className="DisplayFlex-column Margin-Right">
                                        <p className="TextSize-mili Text-gray MarginNone"> Должность </p>
                                        <p className="TextSize-normal MarginNone"> Преподователь по информатике </p>
                                    </div>
                                    <div className="DisplayFlex-column Margin-Right">
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Е-mail </p>
                                        <p className="TextSize-normal MarginNone"> t.minka@mail.ru </p>
                                    </div>
                                </div>
                            </div>
                            <p className="TextSize-normal Text-gray Margin-Left"> 1 </p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;