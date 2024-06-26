import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-journal.css';
import '../components/Css/Css-list.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import FooterPages from './Dublicates/FooterPages';
import HeaderPages from './Dublicates/HeaderPages';
import MenuPages from './Dublicates/MenuPages';
import { Lis } from '../utils/constanta';

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
                    <div className="MenuJournal-block dis">
                        <div className="DisplayFlex-row padding-1em">
                            <p className="TextSize-kilo MarginNone Width-full"> Студенты </p>
                            <form className="JournalPoisk Width-midle">
                                <input placeholder="Поиск..." type="text" className="Poisk MarginNone TextSize-mili"/>
                                <button type="submit" className="Button-poisk ImgSize-15"> <img alt="lupa" src = {require('../components/Images/lupa.png')} className="ImgSize-cover Width-midle Margin-Left"/> </button>
                            </form>
                            <Link to="" className="BittonBlue MarginNone TextSize-mili"> Семестр </Link>
                        </div>
                        <div className="DisplayFlex-row CardsJournal-block">
                            <Link to={Lis} className="CardsJournal DisplayFlex-column">
                                <p className="Text-MiliBold Text-white MarginNone"> П-20, Русский язык, </p>
                                <p className="Text-MiliBold Text-white MarginNone"> 1 семестр </p>
                            </Link> 
                        </div>
                    </div>

                    <Link to = "Documentation.html#yakor" className="MenuDocumentation DisplayFlex-row FlexAlign-center">
                        <p className="TextSize-kilo MarginNone Text-white Width-full"> Преподаватели </p>
                        <div className="DisplayFlex-column Width-full FlexAlign-end">
                            <p className="TextSize-normal MarginNone Text-white TextAlign-end"> Список преподавательского </p>
                            <p className="TextSize-normal MarginNone Text-white TextAlign-end"> состава </p>
                        </div>
                    </Link>

                    <div className="MenuJournal-block dis Margin-Top-1em">
                        <div className="DisplayFlex-row padding-1em">
                            <p className="TextSize-kilo MarginNone Width-full"> Родители  </p>
                            <form className="JournalPoisk Width-midle">
                                <input placeholder="Поиск..." type="text" className="Poisk MarginNone TextSize-mili"/>
                                <button type="submit" className="Button-poisk ImgSize-15"> <img alt="lupa" src = {require('../components/Images/lupa.png')} className="ImgSize-cover Width-midle Margin-Left"/> </button>
                            </form>
                            <Link to="" className="BittonBlue MarginNone TextSize-mili"> Семестр </Link>
                        </div>
                        <div className="DisplayFlex-row CardsJournal-block">
                        <Link to="Dnevnick.html" className="CardsJournal DisplayFlex-column">
                                <p className="Text-MiliBold Text-white MarginNone"> П-20, Русский язык, </p>
                                <p className="Text-MiliBold Text-white MarginNone"> 1 семестр </p>
                            </Link>
                        </div>
                    </div>

                    <Link to = "Documentation.html#yakor" className="MenuDocumentation DisplayFlex-row FlexAlign-center Margin-Top-1em">
                        <p className="TextSize-kilo MarginNone Text-white Width-midle"> Специальности </p>
                        <div className="DisplayFlex-column Width-midle-chetvert FlexAlign-end">
                            <p className="TextSize-normal MarginNone Text-white TextAlign-end"> Полный перечень программ среднего </p>
                            <p className="TextSize-normal MarginNone Text-white TextAlign-end"> проффисионального образования </p>
                        </div>
                    </Link>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;