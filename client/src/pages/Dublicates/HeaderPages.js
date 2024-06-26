import React, {useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HomePageRoute } from '../../utils/constanta';
import { MenuOff, MenuOn } from '../JS/ProfileMenuScript'
import { Context } from '../../index';




const HeaderPages = () => {
    const {user} = useContext(Context)

    const DropAuth = async () => {
        window.localStorage.clear('idUser');
        //window.location.assign("/")
    }

    return (
        <div>
            <div className="HeaderHome MarginNone DisplayFlex-row Position-Fixed">
                <div id="Main-Width" className="DisplayFlex-row">
                    <Link to={HomePageRoute} className="Width-midle FlexJustify-start DisplayFlex-row">
                        <img alt="Home-Carusel-1" src = {require('../../components/Images/Logotype-2.png')} className="ImgSize-contain"/>
                    </Link>
                    <div className="DisplayFlex-row Width-midle FlexElement-center">
                        <p className="TextSize-santi TextLine"> Контакты </p>
                        <p className="TextSize-santi TextLine"> О нас </p>
                        <p className="TextSize-santi TextLine"> Возможности </p>
                    </div>
                    <div className="DisplayFlex-row Width-midle FlexAlign-center FlexJustify-end">
                        <div className="MiniAvatar-block FlexJustify-center TextSize-santi DisplayFlex-row"> 
                            <img alt="Home-Carusel-1" src = {require('../../components/Images/Data-Base/12.jpg')} className="ImgSize-cover ImgSize-normal"/>
                        </div>
                        <button id="ProfileButtonMenuOn" onClick={MenuOn} className="NonButton DisplayFlex-column TextAlign-center">
                            <p className="TextSize-mili MarginNone"> Минка Татьяна </p>
                            <p className="TextSize-mili MarginNone"> Антоновна </p>
                        </button>
                        <button id="ProfileButtonMenuOff" className="NonButton disnone DisplayFlex-column TextAlign-center">
                            <p className="TextSize-mili MarginNone"> Минка Татьяна </p>
                            <p className="TextSize-mili MarginNone"> Антоновна </p>
                        </button>
                        <div id="ProfileMenu" className="MenuProfile otstup-6em-top  disnone TextAlign-center">
                            <Link to ="/profile" className="TextSize-mili Text-black MarginNone"> Профиль </Link>
                            <hr/>
                            <p className="TextSize-mili MarginNone"> Редактировать профиль </p>
                            <hr/>
                            <Link to="/">
                                <button type="submit" onClick={DropAuth} className="NonButton TextSize-mili MarginNone"> Выход </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
        
export default HeaderPages;