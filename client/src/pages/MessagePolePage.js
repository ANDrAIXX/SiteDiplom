import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-message.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import FooterPages from './Dublicates/FooterPages';
import MenuPages from './Dublicates/MenuPages';
import HeaderPages from './Dublicates/HeaderPages';
import { FileButtonAdd} from './JS/MessagePoleScript';

const ProfilePage = () => {
    return (
        <div>
            <HeaderPages />

            <div id="Main-Width" className="DisplayFlex-row">
                <div id = "Left-Buttons">
                    <MenuPages />
                </div>

                <div id = "Right-Content" className="PaddingNone DisplayFlex-ColumnReverse FlexJustify-end RightContent-message">
                    <div className="Message-block DisplayFlex-column">
                        <form action="" className="DisplayFlex-row FlexAlign-center Width-full">
                            <div className="DisplayFlex-column Width-full FlexAlign-center">
                                <div className="DisplayFlex-row Width-full">
                                    <textarea id="MessageForTextArea" name="story" rows="1" cols="33" className="TextAreaMessage TextSize-mili Width-full"></textarea>
                                    <button type="submit" className="NonButton" value="">
                                        <img alt="Home-Carusel-1" src = {require("../components/Images/enter.png")} className="ImgSize-cover ImgSize-normal"/>
                                    </button>
                                </div>
                                <div className="DisplayFlex-row FlexWrap-wrap FlexJustify-center" id="ForFileButton">
                                    <label className="input-file Height-FitContent padding-top-05em margin-top-05em" id="FileLable0">
                                        <input type="file" onClick={FileButtonAdd} name="file[]" id="FileButton0"/>		
                                    </label>
                                    <label className="input-file Height-FitContent padding-top-05em NoneBlock margin-top-05em" id="FileLable1">
                                        <input type="file" onClick={FileButtonAdd} name="file[]" id="FileButton1"/>		
                                    </label>
                                    <label className="input-file Height-FitContent padding-top-05em NoneBlock margin-top-05em" id="FileLable2">
                                        <input type="file" onClick={FileButtonAdd} name="file[]" id="FileButton2"/>		
                                    </label>
                                    <label className="input-file Height-FitContent padding-top-05em NoneBlock margin-top-05em" id="FileLable3">
                                        <input type="file" onClick={FileButtonAdd} name="file[]" id="FileButton3"/>		
                                    </label>
                                    <label className="input-file Height-FitContent padding-top-05em NoneBlock margin-top-05em" id="FileLable4">
                                        <input type="file" onClick={FileButtonAdd} name="file[]" id="FileButton4"/>		
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="DisplayFlex-row FlexJustify-end">
                        <div className="DataForMe">
                            <p className="TextSize-Mili MarginNone"> 28.04.04 </p>
                            <p className="TextSize-Mili MarginNone"> 11:45 </p>
                        </div>
                        <div className="MessageForMe">
                            <p className="Text-MiliBold MarginNone"> Новости </p>
                        </div>
                    </div>

                    <div className="DisplayFlex-row FlexJustify-start">
                        <div className="MessageNotForMe">
                            <p className="Text-MiliBold MarginNone"> Новости? </p>
                        </div>
                        <div className="DataNotForMe DisplayFlex-column">
                            <p className="TextSize-Mili MarginNone"> 28.04.04 </p>
                            <p className="TextSize-Mili MarginNone"> 11:45 </p>
                        </div>
                    </div>

                    <div className="Otstup-6em"></div>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;