import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../components/Css/Css-dnevnick.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import { JournalPageRoute, ProfilePageRoute } from "../utils/constanta"
import FooterPages from './Dublicates/FooterPages';
import { ButtonFirst, ButtonOn, ButtonSecond, ButtonThird, ParentsOn, StudentOn, TeacherOn } from './JS/HomePageScript';
import { escapeSelector } from 'jquery';
import { Context } from '../index';
import { MenuOff, MenuOn } from './JS/ProfileMenuScript'
import $ from 'jquery';
import { Disnone } from './JS/disnone';
import { Login } from '../components/http/ViewInfApi';




const HomePage = () => {
    const {user} = useContext(Context)

    const form = async () => {
        user.setIsAuth(false)
        window.localStorage.setItem('idUser', "1");
        Disnone();
        window.location.to("/profile")
        
    }

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        setLogin("")
        setPassword("")
    },[])

    const [err, setErr] = useState()

    const Auth = async () => {
        const response1 = await Login(login, password)
        //console.log(response1.err)
        if(response1.err!="")
        {
            setErr(response1.err)
        }
        else
        {   
            window.localStorage.setItem('idUser', response1.login);
            window.localStorage.setItem('TypeUser', response1.typeuser);
            window.location.assign("/profile")
        }
    }

    const DropAuth = async () => {
        window.localStorage.clear('idUser');
        //window.location.assign("/")
    }

    //function ListItem(props) {
        //return <li>{props.text}</li>;
      //}

    //const items = ['Item 1', 'Item 2', 'Item 3'];

    //{items.map((item, index) => (
    //    <ListItem key={index} text={item} />
    //))}

    var buttonVhod

    if(window.localStorage.getItem('idUser') != null)
    {
        buttonVhod = 
        <div className="DisplayFlex-row Width-full  FlexAlign-center FlexJustify-end">
            <div className="MiniAvatar-block FlexJustify-center TextSize-santi DisplayFlex-row"> 
                <img alt="Home-Carusel-1" src = {require('../components/Images/Data-Base/12.jpg')} className="ImgSize-cover ImgSize-normal"/>
            </div>
            <button id="ProfileButtonMenuOn" onClick={MenuOn} className="NonButton DisplayFlex-column TextAlign-center">
                <p className="TextSize-mili MarginNone"> Минка Татьяна </p>
                <p className="TextSize-mili MarginNone"> Антоновна </p>
            </button>
            <button id="ProfileButtonMenuOff" className="NonButton disnone DisplayFlex-column TextAlign-center">
                <p className="TextSize-mili MarginNone"> Минка Татьяна </p>
                <p className="TextSize-mili MarginNone"> Антоновна </p>
            </button>
            <div id="ProfileMenu" className="MenuProfile otstup-9em-top  disnone TextAlign-center">
                <Link to ="/profile" className="TextSize-mili MarginNone Text-black"> Профиль </Link>
                <hr/>
                <p className="TextSize-mili MarginNone"> Редактировать профиль </p>
                <hr/>
                <Link to = "/">
                    <button type="submit" onClick={DropAuth} className="NonButton TextSize-mili MarginNone"> Выход </button>
                </Link>
            </div>
        </div>;
        
    }
    else
    {
        buttonVhod = 
            <button type="button" className="BittonRed MarginNone TextSize-santi" data-bs-toggle="modal" data-bs-target="#ModalAut">
                Войти
            </button>;
        
    }

    return (
        <div>
            <section id = "Header-All-Page">

            </section>
            
            <section id = "Home-Information" className="DisplayFlex-row FlexJustify-center">
                <img id="MainImg1" alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-1.png')} className="ImgSize-cover MainImg-block"/>
                <img id="MainImg2" alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-2.jpg')} className="NoneBlockNoIm ImgSize-cover MainImg-block"/>
                <img id="MainImg3" alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-3.jpg')} className="NoneBlockNoIm ImgSize-cover MainImg-block"/>
                <div className = "Home-Carusel">
                    <div className="HomeInformation-block DisplayFlex-column FlexAlign-center">
                        <div className="HeaderHome DisplayFlex-row">
                            <div className="Width-chetvert FlexJustify-start DisplayFlex-row">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Logotype-2.png')} className="ImgSize-contain"/>
                            </div>
                            <div className="DisplayFlex-row Width-bolshe FlexElement-center">
                                <p className="TextSize-santi TextLine"> Контакты </p>
                                <p className="TextSize-santi TextLine"> О нас </p>
                                <p className="TextSize-santi TextLine"> Возможности </p>
                            </div>
                            <div className="DisplayFlex-row Width-chetvert FlexAlign-center FlexJustify-end">
                                {buttonVhod}
                            </div>
                        </div>
                        <div id="MainText1" className="BlockHome-text DisplayFlex-column FlexAlign-center">
                            <h1 className="TextSizeHeader-information"> Электронный образовательная платформа «Классный руководитель»  </h1>
                            <br/><br/><br/>
                            <div className = "DisplayFlex-row TextHome-foter">
                                <p className="TextSize-kilo Width-bolshe"> Электронно - образовательный ресурс «Классный руководитель» 
                                    предназначен  для  облегчения и улучшения процеса
                                    обучения для учащихся любых возрастов. </p>

                                <p className="ButtonWhite-non-background TextSize-kilo"> Подробнее </p>
                            </div>
                        </div>
                        <div id="MainText2" className="BlockHome-text DisplayFlex-column FlexAlign-center NoneBlockNoIm">
                            <h1 className="TextSizeHeader-information"> Предоставляемые возможности платформы  </h1>
                            <br/><br/><br/>
                            <div className = "DisplayFlex-row TextHome-foter">
                                <p className="TextSize-kilo Width-bolshe"> Электронно - образовательный ресурс «Классный руководитель» 
                                    предназначен  для  облегчения и улучшения процеса
                                    обучения для учащихся любых возрастов. </p>

                                <p className="ButtonWhite-non-background TextSize-kilo"> Подробнее </p>
                            </div>
                        </div>
                        <div id="MainText3" className="BlockHome-text DisplayFlex-column FlexAlign-center NoneBlockNoIm">
                            <h1 className="TextSizeHeader-information"> Наши контакты. Если у вас еще остались вопросы, свяжитесь с нами!  </h1>
                            <br/><br/><br/>
                            <div className = "DisplayFlex-row TextHome-foter">
                                <p className="TextSize-kilo Width-bolshe"> Электронно - образовательный ресурс «Классный руководитель» 
                                    предназначен  для  облегчения и улучшения процеса
                                    обучения для учащихся любых возрастов. </p>

                                <p className="ButtonWhite-non-background TextSize-kilo"> Подробнее </p>
                            </div>
                        </div>
                        <div className="CaruselBlock-buttons DisplayFlex-row">
                            <button id="MainButton1" onClick={ButtonFirst} className="NoneButtonHome ButtonCard DisplayFlex-row ButHeaderMain">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-1.png')} className="ImgSize-cover"/>   
                                <div className="TextCard-block DisplayFlex-row FlexElement-center">
                                    <p className="TextSize-kilo MarginNone"> О нас </p>
                                </div>
                            </button>
                            <button id="MainButton2" onClick={ButtonSecond} className="NoneButtonHome ButtonCard DisplayFlex-row ButHeaderMain">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-2.jpg')} className="ImgSize-cover"/>     
                                <div className="TextCard-block DisplayFlex-row FlexElement-center">
                                    <p className="TextSize-kilo MarginNone"> Возможности </p>
                                </div>   
                            </button>
                            <button id="MainButton3" onClick={ButtonThird} className="NoneButtonHome ButtonCard DisplayFlex-row ButHeaderMain">
                                <img alt="Home-Carusel-1" src = {require('../components/Images/Home-Carusel-3.jpg')} className="ImgSize-cover"/>  
                                <div className="TextCard-block DisplayFlex-row FlexElement-center">
                                    <p className="TextSize-kilo MarginNone"> Контакты </p>
                                </div>       
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id = "Main-Width-Home" className="DisplayFlex-column FlexAlign-center">

                <section id="Opportunities">
                    <div className="DisplayFlex-row ">
                        <div className="DisplayFlex-row Width-midle ">
                            <button onClick={StudentOn} className="TextSize-kilo MarginNone TextLine NoneButtonVozm"> Студентам </button>
                            <button onClick={ParentsOn} className="TextSize-kilo TextLine NoneButtonVozm"> Родителям </button>
                            <button onClick={TeacherOn} className="TextSize-kilo MarginNone TextLine NoneButtonVozm"> Преподавателям </button>
                        </div>
                        <div className="Width-midle FlexJustify-end DisplayFlex-row FlexAlign-end">
                            <p className="TextSize-kilo MarginNone"> Возможности </p>
                        </div>
                    </div>
                    <div id="MainBlock1" className="OpportunitiesInformation-block">
                        <div className="OpportunitiesCards DisplayFlex-row">1
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>        
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                    </div>
                    <div id="MainBlock2" className="NoneBlockNoIm OpportunitiesInformation-block">
                        <div className="OpportunitiesCards DisplayFlex-row">2
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>        
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                    </div>
                    <div id="MainBlock3" className="NoneBlockNoIm OpportunitiesInformation-block">
                        <div className="OpportunitiesCards DisplayFlex-row">3
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="OpportunitiesCards DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>        
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                        <div className="DisplayFlex-row">
                            <div className="Width-bolshe">
                                <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-2.jpg")} className="ImgSize-cover"/>
                            </div>

                            <div className="OpportunitiesText">
                                <p className="TextSize-santi"> Электронно - образовательный ресурс «ДОБРО» 
                                предназначен  для  облегчения и улучшения процеса
                                обучения для учащихся любых возрастов. </p>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section id="About-Us">
                    <div className="Width-full FlexJustify-start DisplayFlex-row FlexAlign-end">
                        <p className="TextSize-kilo MarginNone"> О нас </p>
                    </div>
                    <div className="About-UsCard DisplayFlex-row">
                        <div className="About-UsText">
                            <p className="TextSize-santi TextAlign-justify"> Электронный образовательный ресурс (ЭОР) – это образовательный ресурс,
                                в виде совокупности программных средств, информационных, технических, нормативных и методических
                                материалов, полнотекстовых электронных изданий, включая аудио и видеоматериалы, иллюстративные материалы
                                и каталоги электронных библиотек, размещенных на компьютерных носителях и/или в сети Интернет. Принципиальным
                                различием электронных образовательных ресурсов (ЭОР) от цифровых образовательных ресурсов (ЦОР) является наличие
                                в первом случае компонента ИНТЕРАКТИВНОСТИ. 
                            </p>
                            <br/>
                            <p className="TextSize-santi TextAlign-justify"> Возможности и преимущества электронных образовательных ресурсов: Мультимедийность
                                Моделирование Интерактивность. Они включают разные информационные объекты и комплексы: сетевые учебные ресурсы, информационные модели,
                                интеллектуальные ресурсы, стандарты в области обучения образовательные инновации, человеческие ресурсы и многие другие. 
                            </p>
                            <br/>
                            <p className="TextSize-santi MarginNone TextAlign-justify"> В процессе использования электронных образовательных ресурсов основной акцент
                                делается на организацию активных видов познавательной деятельности обучаемых, формирование активной познавательной позиции. Учитель
                                в этом процессе выступает в качестве педагога-менеджера обучения, тьютора, готового предложить учащимся необходимый комплект средств
                                обучения, оказывать необходимую помощь, направить ученика на правильный путь усвоения учебного материала. 
                            </p>
                        </div>
                        <div className=" About-UsImg">
                            <img alt="Home-Carusel-1" src = {require("../components/Images/Home-Carusel-1.png")} className="ImgSize-cover Height-full"/>
                        </div>
                    </div>
                </section>

            </section>

            <FooterPages />

            <div className="modal fade" id="ModalAut" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content noneFone">
                    <div className="login">
                        <div className="login-triangle"></div>
                        
                        <h2 className="login-header">Авторизация</h2>

                        <div className="login-container DisplayFlex-column FlexJustify-center">
                            <p><input value = {login} onChange={e => setLogin(e.target.value)} type="email" placeholder="Логин"/></p>
                            <p><input value = {password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Пароль"/></p>
                            
                                <button type="submit" onClick={Auth} className="mar-boka BittonRed Background-bluebutton MarginNone TextSize-santi">
                                        Сохранить
                                </button>
                                <div className='DisplayFlex-row FlexJustify-center'>
                                    <p className='TextSize-mili Margin-Top-1emI PaddingNone'>{err}</p>
                                </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;