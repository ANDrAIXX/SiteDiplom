import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-documentation.css';
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
                    <div className="DisplayFlex-row FlexAlign-end">
                        <form className="Form-poisk">
                            <input placeholder="Поиск..." type="text" className="Poisk MarginNone TextSize-santi"/>
                            <button type="submit" className="Button-poisk"> <img alt="lupa" src = {require('../components/Images/lupa.png')} className="ImgSize-cover Width-midle Margin-Left"/> </button>
                        </form>
                        <Link to="" className="BittonBlue MarginNone TextSize-santi Button-sort"> Сортировать по </Link>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end padding-top-1em">
                        <p className="TextSize-kilo MarginNone"> Документация </p>
                        <p className="TextSize-normal MarginNone"> Классного руководителя </p>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Описание</p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone">Примечания</p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Приклепленные файлы</p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst"></td>
                                    </tr>
                                </tbody>  
                            </table>
                        </div>
                        <div className="DisplayFlex-column FlexJustify-center padding-noRight-1em">
                            <img alt="Home-Carusel-1" src = {require("../components/Images/musor.png")} className="ImgSize-cover ImgSize-macro"/>
                            <img alt="Home-Carusel-1" src = {require("../components/Images/redact.png")} className="ImgSize-cover padding-top-1em ImgSize-macro"/>
                        </div>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Описание</p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone">Примечания</p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Приклепленные файлы</p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst"></td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                        <div className="DisplayFlex-column FlexJustify-center padding-noRight-1em">
                            <img alt="Home-Carusel-1" src = {require("../components/Images/musor.png")} className="ImgSize-cover ImgSize-macro"/>
                            <img alt="Home-Carusel-1" src = {require("../components/Images/redact.png")} className="ImgSize-cover padding-top-1em ImgSize-macro"/>
                        </div>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end">
                        <Link to="" className="BittonBlue MarginNone TextSize-santi"> Добавить документы </Link>
                        <p className="TextSize-kilo MarginNone"> <span className="Text-blue"> &lt; </span> <span className="Text-red"> &gt; </span> </p>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end padding-top-1em">
                        <p className="TextSize-kilo MarginNone"> Образцы для заполнения </p>
                        <Link to="" className="BittonBlue MarginNone TextSize-santi"> Редактирование </Link>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row Width-full">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end border-top-lightgray Margin-Top-1em">
                        <p className="TextSize-kilo MarginNone"> Документация </p>
                        <p className="TextSize-normal MarginNone"> Преподавателя </p>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Описание</p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone">Примечания</p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Приклепленные файлы</p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst"></td>
                                    </tr>
                                </tbody>  
                            </table>
                        </div>
                        <div className="DisplayFlex-column FlexJustify-center padding-noRight-1em">
                            <img alt="Home-Carusel-1" src = {require("../components/Images/musor.png")} className="ImgSize-cover ImgSize-macro"/>
                            <img alt="Home-Carusel-1" src = {require("../components/Images/redact.png")} className="ImgSize-cover padding-top-1em ImgSize-macro"/>
                        </div>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Описание</p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone">Примечания</p> </th>
                                        <th className="TStolbec-DocFirst TextAlign-center"> <p className="TextSize-mili MarginNone">Приклепленные файлы</p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-DocFirst"></td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                        <div className="DisplayFlex-column FlexJustify-center padding-noRight-1em">
                            <img alt="Home-Carusel-1" src = {require("../components/Images/musor.png")} className="ImgSize-cover ImgSize-macro"/>
                            <img alt="Home-Carusel-1" src = {require("../components/Images/redact.png")} className="ImgSize-cover padding-top-1em ImgSize-macro"/>
                        </div>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end">
                        <Link to="" className="BittonBlue MarginNone TextSize-santi"> Добавить документы </Link>
                        <p className="TextSize-kilo MarginNone"> <span className="Text-blue"> &lt; </span> <span className="Text-red"> &gt; </span> </p>
                    </div>
                    <div className="DisplayFlex-row FlexAlign-end padding-top-1em">
                        <p className="TextSize-kilo MarginNone"> Образцы для заполнения </p>
                        <Link to="" className="BittonBlue MarginNone TextSize-santi"> Редактирование </Link>
                    </div>
                    <div className="DisplayFlex-row">
                        <div className="TableBlock DisplayFlex-row Width-full">
                            <table className="Table-Doc">
                                <tbody>
                                    <tr className="TStroka-Doc Background-red">
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                        <th className="TStolbec-Doc TextAlign-center"> <p className="TextSize-mili MarginNone"> Наименование </p> </th>
                                    </tr> 
                                    <tr className="TStroka-Doc">
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                        <td className="TStolbec-Doc">  </td>
                                    </tr>  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;