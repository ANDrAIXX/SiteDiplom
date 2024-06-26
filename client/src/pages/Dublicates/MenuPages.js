import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { JournalPageRoute, ProfilePageRoute, ListPageRoute, MessagePageRoute, NewsPageRoute, AdminPanelRoute } from "../../utils/constanta"

const MenuPages = () => {
    return (
        <div>
            <div className="LeftButtons-sled">
                <Link to={ProfilePageRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center ">
                            <p className="TextSize-santi Text-white MarginNone"> Профиль </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/profile.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
                <Link to={JournalPageRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center ">
                            <p className="TextSize-santi Text-white MarginNone"> Журнал </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/journal.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
                <Link to={MessagePageRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center ">
                            <p className="TextSize-santi Text-white MarginNone"> Связь </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/connection.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
                <Link to={ListPageRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center ">
                            <p className="TextSize-santi Text-white MarginNone"> Списки </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/list.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
                <Link to={NewsPageRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center ">
                            <p className="TextSize-santi Text-white MarginNone"> Новости </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/news.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
                <Link to={AdminPanelRoute} className="DisplayFlex-row ButtonMenu-block">
                    <div className="ButtonMenu DisplayFlex-row">
                        <div className="ButtonMenu-text DisplayFlex-row FlexElement-center Background-red">
                            <p className="TextSize-santi Text-white MarginNone"> Админ </p>
                        </div>
                    </div>
                    <img alt="Home-Carusel-1" src = {require('../../components/Images/news.jpg')} className="ImgSize-cover Width-midle Margin-Left"/>
                </Link>
            </div>
        </div>
    );
}
        
export default MenuPages;