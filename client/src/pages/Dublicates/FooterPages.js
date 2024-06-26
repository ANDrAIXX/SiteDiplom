import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { ParentsOn, StudentOn, TeacherOn } from '../JS/HomePageScript';


const FooterPages = () => {

    return (
        <div>
            <section id = "FoterInformation" className="DisplayFlex-column FlexAlign-center">
                <div className="FoterUp DisplayFlex-row">
                    <div className="FooterCards">
                        <p className="TextSize-normal TextAlign-justify"> Контакты </p>
                        <p className="TextSize-santi MarginNone TextAlign-justify"> Телефон:  </p>
                        <p className="TextSize-santi  TextAlign-justify"> 8(951)-516-08-06 </p>

                        <p className="TextSize-santi "> Если не дозвонились: 8(951)-516-02-07 </p>

                        <p className="TextSize-santi  TextAlign-justify"> Электронная-почта: resurs.dobro@mail.ru </p>
                    </div>
                    <div className="FooterCards">
                        <p className="TextSize-normal TextAlign-justify"> О компании </p>
                        <HashLink to="/homepage/#About-Us"> <p className="TextSize-santi TextAlign-justify Text-white"> О нас </p> </HashLink>

                        <p className="TextSize-santi  TextAlign-justify"> Новости </p>

                    </div>
                    <div className="FooterCards">
                        <p className="TextSize-normal TextAlign-justify"> Возможности </p>
                        <HashLink to="/homepage/#Opportunities"> <p className="TextSize-santi  TextAlign-justify Text-white"> Студентам </p> </HashLink>

                        <HashLink to="/homepage/#Opportunities"> <p className="TextSize-santi  TextAlign-justify Text-white"> Родителям </p> </HashLink>

                        <HashLink to="/homepage/#Opportunities"> <p className="TextSize-santi  TextAlign-justify Text-white"> Преподавателям </p> </HashLink>
                    </div>
                    <div className="FooterCards-bolshe DisplayFlex-row FlexElement-center">
                        <div className="DisplayFlex-column FlexAlign-center">
                            <img alt="Home-Carusel-1" src = {require("../../components/Images/Logotype-2.png")} className="ImgSize-contain"/>
                            <br/>
                            <p className="TextSize-santi TextAlign-center MarginNone TextAlign-justify"> &#169; 2024 год ООО "Классный Руководитель" </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "FoterDop" className=" DisplayFlex-column FlexAlign-center">
                <div className="FoterDown DisplayFlex-row FlexAlign-center">
                    <div className="FooterCards-dop DisplayFlex-row FlexAlign-center">
                        <p className="TextSize-santi MarginNone Width-full TextAlign-justify Width-midle-chetvert"> Электронно-образовательный ресурс "Классный Руководитель" </p>
                        <div className="DisplayFlex-row Width-chetvert FlexJustify-end">
                           
                        </div>
                    </div>
                    <div className="FooterCards-dop-bolshe DisplayFlex-row FlexAlign-center">
                        <p className="TextSize-santi MarginNone"> Ищи нас в соцсетях: </p>
                        <div className="DisplayFlex-row">
                            <img alt="Home-Carusel-1" src = {require("../../components/Images/vk.png")} className="ImgSize-contain ImgSize-mini Margin-lr"/>
                            <img alt="Home-Carusel-1" src = {require("../../components/Images/tg.png")} className="ImgSize-contain ImgSize-mini Margin-lr"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
        
export default FooterPages;