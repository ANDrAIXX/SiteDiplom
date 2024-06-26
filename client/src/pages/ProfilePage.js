import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-news.css';
import '../components/Css/Css-message.css';
import '../components/Css/Css-profile.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import { FileButtonAdd} from './JS/MessagePoleScript';
import MenuPages from './Dublicates/MenuPages';
import FooterPages from './Dublicates/FooterPages';
import HeaderPages from './Dublicates/HeaderPages';
import { Context } from '../index';
import $ from 'jquery';
import { ViewProfile } from '../components/http/ViewInfApi';
import { addGal } from '../components/http/AddInfApi';
import axios from 'axios';


const ProfilePage = () => {

    const [Email, setEmail] = useState()
    const [Group, setGroup] = useState()
    const [Fname, setFname] = useState()
    const [Sname, setSname] = useState()
    const [Tname, setTname] = useState()
    const [AboutUs, setAboutUs] = useState()
    const [Doljnost, setDoljnost] = useState()
    const [TypeUse, setTypeUse] = useState()

    const [opisanie, setOpisanie] = useState()
    const [file, setFile] = useState()
    //const [typeuse, settypeuse] = useState()

    const {user} = useContext(Context)
    var iduser = window.localStorage.getItem('idUser');
    const Auth = async () => {
        const response1 = await ViewProfile(iduser)

        setFname(response1[0].Fname)
        setTname(response1[0].TName)
        setSname(response1[0].SName)
        setTypeUse(response1[0].Type)
        if(response1[0].Email==""|| response1[0].Email==null)
        {
            setEmail("-")
        }
        else
        {
            setEmail(response1[0].Email)
        }
        if(response1[0].Group==""|| response1[0].Group==null)
        {
            setGroup("-")
        }
        else
        {
            setGroup(response1[0].Group)
        }
        if(response1[0].Doljnost==""|| response1[0].Doljnost==null)
        {
            setDoljnost("-")
        }
        else
        {
            setDoljnost(response1[0].Doljnost)
        }
        if(response1[0].AboutUs==""|| response1[0].AboutUs==null)
        {
            setAboutUs("-")
        }
        else
        {
            setAboutUs(response1[0].AboutUs)
        }
        
    }

    const [image, setImage] = useState({
        preview: '',
        raw: '',
      });

    const handlePhotoChange = (e) => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
          });
        }
    };
    

    const Galery = async () => {
        let formData = new FormData();
        await formData.append('file', image.raw);
        await axios
        .post(`http://localhost:1234/upload`, formData , {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => {
            return res.data;
        });
    }

    useEffect(() => {
        Auth()


    },[])

    var typeuse, galery
    switch(TypeUse)
    {
        case 1: 
            typeuse =<div>
                <p className="TextSize-mili AvatarCards-blue  "> Студент </p>
            </div>;
            galery = <div className="DisplayFlex-row Margin-Top-1em">
                        <div className="LeftProfile-block-2">
                            <p className="TextSize-normal Text-gray MarginNone"> Родитель: </p>
                            <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
                        </div>

                        <div className="RightProfile-block Padding-tb-02em Height-FitContent">
                            <p className="TextSize-normal Text-gray MarginNone"> О себе: </p>
                            <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
                        </div>
                    </div>;

        break;
        case 2: 
            typeuse =<div>
                <p className="TextSize-mili AvatarCards-blue  "> Родитель </p>
            </div>;
            galery = <div className="DisplayFlex-row Margin-Top-1em">
                        <div className="LeftProfile-block-2">
                            <p className="TextSize-normal Text-gray MarginNone"> Студент: </p>
                            <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
                        </div>

                        <div className="RightProfile-block Padding-tb-02em Height-FitContent">
                            <p className="TextSize-normal Text-gray MarginNone"> О себе: </p>
                            <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
                        </div>
                    </div>;
        break;
        case 3: 
            typeuse =<div>
                <p className="TextSize-mili AvatarCards-blue  "> Преподаватель </p>
            </div>;
            galery = <div className="DisplayFlex-row Margin-Top-1em">
                        <div className="Prepod RightProfile-block Padding-tb-02em Height-FitContent">
                            <p className="TextSize-normal Text-gray MarginNone"> О себе: </p>
                            <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
                        </div>
                    </div>;
        break;
        case 4: 
            typeuse =<div>
                <p className="TextSize-mili AvatarCards-blue  "> Преподаватель </p>
                <p className="TextSize-mili AvatarCards-red  "> Куратор </p>
            </div>;
            galery = <div className="DisplayFlex-row Margin-Top-1em">
            <div className="LeftProfile-block-2">
                <p className="TextSize-normal Text-gray MarginNone"> О себе </p>
                <p className="TextSize-mili MarginNone"> {AboutUs}  </p>
            </div>

            <div className="RightProfile-block Padding-tb-02em Height-FitContent">
                <div class="DisplayFlex-row">
                    <p className=" Margin-boka-02em TextSize-kilo"> Галерея </p>
                    <button className="border-0 BittonBlue MarginNone TextSize-makro" data-bs-toggle="modal" data-bs-target="#ModalAddGal"> Добавить </button>
                    
                </div>
                <hr className=" MarginNone Margin-Top-05em"/>
                <div className="DisplayFlex-row Margin-Top-05em Margin-boka-02em">
                    <div className="ImgGalery-block DisplayFlex-row">
                        <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (1).jpg')} className="ImgSize-cover Margin-Left"/>
                    </div>
                    <div className="ImgGalery-block DisplayFlex-row">
                        <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (2).jpg')} className="ImgSize-cover Margin-Left"/>
                    </div>
                    <div className="ImgGalery-block DisplayFlex-row">
                        <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (3).jpg')} className="ImgSize-cover Margin-Left"/>
                    </div>
                    <div className="ImgGalery-block DisplayFlex-row">
                        <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (4).jpg')} className="ImgSize-cover Margin-Left"/>
                    </div>
                </div>
                <div className="DisplayFlex-row Margin-boka-02em Margin-Top-05em">
                    <Link to="" className="BittonBlue MarginNone TextSize-makro"> Показать все </Link>
                    <p className="TextSize-normal MarginNone"> <span className="Text-blue"> &lt; </span> <span className="Text-red"> &gt; </span> </p>
                </div>
            </div>
        </div>;
        break;
    }


    return (
        <div>
            <HeaderPages />

            <div id="Main-Width" className="DisplayFlex-row">
                <div id = "Left-Buttons">
                    <MenuPages />
                </div>

                <div id = "Right-Content">
                    <div id="HeaderHomeAll" className="Otstup-top"></div>
                    <div className="DisplayFlex-row">
                        <div className="LeftProfile-block">
                            <div className="Img-Avatar-block DisplayFlex-row">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/12.jpg')} className="ImgSize-cover Margin-Left"/>
                            </div>
                            <hr/>
                            <div className="DisplayFlex-row FlexAlign-center FlexJustify-center">
                                <Link to="" className="BittonBlue MarginNone TextSize-makro"> Написать сообщение </Link>
                            </div>
                            <div className="DisplayFlex-column Position-Absolute AvatarCards-block">
                                <hr className="MarginNone opacity-0"/>
                                <hr className="MarginNone opacity-0"/>
                                <hr className="MarginNone opacity-0"/>
                                {typeuse}
                            </div>
                        </div>

                        <div className="RightProfile-block">
                            <div className="DisplayFlex-column">
                                <p className="TextSize-kilo  Margin-boka-02em"> Информация </p>
                                <hr className="MarginNone Margin-Top-05em"/>
                                <div className="DisplayFlex-row Margin-boka-05em">
                                    <div className=" DisplayFlex-column Width-full">
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Имя </p>
                                        <p className="TextSize-normal MarginNone"> {Fname} </p>
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Фамилия </p>
                                        <p className="TextSize-normal MarginNone"> {Sname} </p>
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Отчество </p>
                                        <p className="TextSize-normal MarginNone"> {Tname} </p>
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> E-mail </p>
                                        <p className="TextSize-normal MarginNone"> {Email} </p>
                                    </div>
                                    <div className="DisplayFlex-column Width-full">
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Куратор группы </p>
                                        <p className="TextSize-normal MarginNone"> {Group} </p>
                                        <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Должность </p>
                                        <p className="TextSize-normal MarginNone"> {Doljnost} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {galery}

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
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (1).jpg')} className="ImgSize-contain z-index-1"/>
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/1 (1).jpg')} className="ImgSize-contain Position-Absolute Width-full blur-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="ModalAddGal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content noneFone">
                    <div className="login LoginWidth">
                        <div className="login-triangle"></div>
                        
                        <h2 className="login-header">Добавить запись</h2>

                        <form action="http://localhost:1234/upload" method="POST" enctype="multipart/form-data" className="login-container DisplayFlex-column FlexJustify-center">
                            <p><textarea value={opisanie} onChange={e => setOpisanie(e.target.value)} id="MessageForTextArea" name="story" rows="1" cols="33" className="TextArea1  TextSize-mili Width-full" placeholder='Описание'></textarea></p>
                            <p>
                                <label className="Width-full input-file Height-FitContent padding-top-05em" id="FileLable0">
                                    <input
                                        name="image"
                                        type="file"
                                        id="upload-button"
                                        class="border-0"
                                    />
                                </label>
                            </p>
                            
                                <button type="submit" enctype="multipart/form-data"  className="mar-boka BittonRed Background-bluebutton MarginNone TextSize-santi">
                                        Сохранить
                                </button>
                                <div className='DisplayFlex-row FlexJustify-center'>
                                    <p className='TextSize-mili Margin-Top-1emI PaddingNone'></p>
                                </div>

                        </form>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;