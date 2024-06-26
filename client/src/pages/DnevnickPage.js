import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-dnevnick.css';
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
                    <p className="TextSize-kilo MarginNone"> Электронный дневник </p>
                    <p className="TextSize-normal MarginNone"> Информационные системы и сети </p>
                </div>
                <div className="TableBlock">
                    <table className="Table-Dnevnick">
                        <tbody>
                            <tr className="TStroka-Dnevnick Background-red">
                                <th className="TStolbec-Dnevnick Background-blue PaddingNone"> <div className="triangle-top"></div> </th>
                                <th className="TStolbec-DnevnickFirst"> <p className="TextSize-mili MarginNone">Фамилия И. О.</p> </th>
                                <th className="TStolbec-Dnevnick"> <p className="TextSize-mili MarginNone">22.04</p> </th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                                <th className="TStolbec-Dnevnick"></th>
                            </tr> 
                            <tr className="TStroka-Dnevnick">
                                <td className="TStolbec-Dnevnick Background-blue"> <p className="TextSize-santi MarginNone"> 1 </p> </td>
                                <td className="TStolbec-DnevnickFirst"> <p className="TextSize-mili MarginNone">Хлабустин А. А.</p> </td>
                                <td className="TStolbec-Dnevnick"> <p className="TextSize-santi MarginNone"> 5 </p> </td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                                <td className="TStolbec-Dnevnick"></td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div className="DisplayFlex-row FlexAlign-end">
                    <p className="TextSize-normal MarginNone"> Группа: П-20 </p>
                    <p className="TextSize-kilo MarginNone"> <span className="Text-blue"> &lt; </span> <span className="Text-red"> &gt; </span> </p>
                </div>
            </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;