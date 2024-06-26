import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import '../components/Css/Css-adminpanel.css';
import '../components/Css/Css-home.css';
import '../components/Css/Css-MAIN.css';
import FooterPages from './Dublicates/FooterPages';
import MenuPages from './Dublicates/MenuPages';
import HeaderPages from './Dublicates/HeaderPages';
import {addGroup, addPredmet, addProgramm, addSpecialization, addUser, changeRole, registration} from '../components/http/AddInfApi';

const ProfilePage = () => {
    const location = useLocation()

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [Fname, setFname] = useState()
    const [Sname, setSname] = useState()
    const [Tname, setTname] = useState()
    const [TypeUser, setTypeUser] = useState()

    const [Predmet, setPredmet] = useState()
    const [Specialization, setSpecialization] = useState()
    const [Kurs, setKurs] = useState()
    const [Semestr, setSemestr] = useState()

    const [Bukva, setBukva] = useState()
    const [Opis, setOpis] = useState()

    const [Name, setName] = useState()
    const [OpisP, setOpisP] = useState()

    const [PredmetChange, setPredmetChange] = useState()
    const [User, setUser] = useState()

    const [SpecializationG, setSpecializationG] = useState()
    const [Figure, setFigure] = useState()
    const [Status, setStatus] = useState()
    const [GodStart, setGodStart] = useState()
    const [GodEnd, setGodEnd] = useState()
    const [QueKurs, setQueKurs] = useState()

    

    const form = async (event, arr) => {
        switch(arr){
            case "1":
                var type;
                switch(TypeUser)
                {
                    case "Студент":
                        type = 1
                    break;
                    case "Родитель":
                        type = 2
                    break;
                    case "Преподаватель":
                        type = 3
                    break;
                    case "Классный Руководитель":
                        type = 4
                    break;
                }
                    const response1 = await addUser(login, password, Fname, Sname, Tname, type)
                    console.log(response1)
            break;
            case "2":
                const response2 = await addProgramm(Predmet, Specialization, Kurs, Semestr)
                console.log(response2)
            break;
            case "3":
                const response3 = await addSpecialization(Bukva, Opis)
                console.log(response3)
            break;
            case "4":
                const response4 = await addGroup(SpecializationG, Figure, Status, GodStart, GodEnd, QueKurs)
                console.log(response4)
            break;
            case "5":
                const response5 = await addPredmet(Name, OpisP)
                console.log(response5)
            break;
            case "6":
                const response6 = await changeRole(PredmetChange, User)
                console.log(response6)
            break;
        }
    }

    return (
        <div>
            <HeaderPages />

            <div id="Main-Width" className="DisplayFlex-row">
                <div id = "Left-Buttons">
                    <MenuPages />
                </div>   

                <div id = "Right-Content">
                <div className="Otstup-top"></div>
                    <div className="AddAdmin">
                        
                        <hr className="MarTopNone"/>

                        <div id="UserAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Добавить Пользователя </p>
                                <button type="submit" onClick={(e) => {form(e, "1")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Имя </p>
                                    <input value = {Fname} onChange={e => setFname(e.target.value)} className="InputText TextSize-mili" type="text" name="Fname" placeholder="Введите Имя"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Фамилия  </p>
                                    <input value = {Sname} onChange={e => setSname(e.target.value)} className="InputText TextSize-mili" type="text" name="Sname" placeholder="Введите Фамилию"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Отчество </p>
                                    <input value = {Tname} onChange={e => setTname(e.target.value)} className="InputText TextSize-mili" type="text" name="Tname" placeholder="Введите Отчество"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Логин </p>
                                    <input value = {login} onChange={e => setLogin(e.target.value)} className="InputText TextSize-mili" type="text" name="Login" placeholder="Введите Логин"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Пароль  </p>
                                    <input value = {password} onChange={e => setPassword(e.target.value)} className="InputText TextSize-mili" type="text" name="Password" placeholder="Введите Пароль"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Тип  </p>
                                    <select value = {TypeUser} onChange={e => setTypeUser(e.target.value)} className="InputText TextSize-mili" type="text" name="TypeUser" placeholder="Введите Тип Пользователя">
                                        <option> Студент </option>
                                        <option> Родитель </option>
                                        <option> Преподаватель </option>
                                        <option> Классный Руководитель </option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <hr/>

                        <div id="ProgrammAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Добавить Программу </p>
                                <button type="submit" onClick={(e) => {form(e, "2")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Предмет </p>
                                    <input value = {Predmet} onChange={e => setPredmet(e.target.value)} className="InputText TextSize-mili" type="text" name="Predmet" placeholder="Введите Предмет"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Специализация  </p>
                                    <input value = {Specialization} onChange={e => setSpecialization(e.target.value)} className="InputText TextSize-mili" type="text" name="Specialization" placeholder="Введите Специализацию"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Курс </p>
                                    <input value = {Kurs} onChange={e => setKurs(e.target.value)} className="InputText TextSize-mili" type="text" name="Kurs" placeholder="Введите Курс"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Семестр  </p>
                                    <input value = {Semestr} onChange={e => setSemestr(e.target.value)} className="InputText TextSize-mili" type="text" name="Semestr" placeholder="Введите Семестр"/>
                                </div>
                            </form>
                        </div>

                        <hr/>

                        <div id="SpecializationAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Добавить Специализацию </p>
                                <button type="submit" onClick={(e) => {form(e, "3")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Буква (Имя) </p>
                                    <input value = {Bukva} onChange={e => setBukva(e.target.value)} className="InputText TextSize-mili" type="text" name="Bukva" placeholder="Введите Букву"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Описание </p>
                                    <input value = {Opis} onChange={e => setOpis(e.target.value)} className="InputText TextSize-mili" type="text" name="Opis" placeholder="Введите Описание"/>
                                </div>
                            </form>
                        </div>

                        <hr/>

                        <div id="GroupAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Добавить Группу </p>
                                <button type="submit" onClick={(e) => {form(e, "4")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Специализация </p>
                                    <input value = {SpecializationG} onChange={e => setSpecializationG(e.target.value)} className="InputText TextSize-mili" type="text" name="Specialization" placeholder="Введите Специализацию"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Последние Две Цифры Начала Обучения  </p>
                                    <input value = {Figure} onChange={e => setFigure(e.target.value)} className="InputText TextSize-mili" type="text" name="Figure" placeholder="Введите Цифру"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Статус Обучения (курс)  </p>
                                    <input value = {Status} onChange={e => setStatus(e.target.value)} className="InputText TextSize-mili" type="text" name="Status" placeholder="Введите Статус Обучения (курс)"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Год (начало обучения) </p>
                                    <input value = {GodStart} onChange={e => setGodStart(e.target.value)} className="InputText TextSize-mili" type="text" name="GodStart" placeholder="Введите Год (начало обучения)"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Год (конец обучения)  </p>
                                    <input value = {GodEnd} onChange={e => setGodEnd(e.target.value)} className="InputText TextSize-mili" type="text" name="GodEnd" placeholder="Введите Год (конец обучения)"/>
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Количество Курсов Обучения  </p>
                                    <input value = {QueKurs} onChange={e => setQueKurs(e.target.value)} className="InputText TextSize-mili" type="text" name="QueKurs" placeholder="Введите Количество Курсов Обучения"/>
                                </div>
                            </form>
                        </div>

                        <hr/>

                        <div id="LessonsAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Добавить Предмет </p>
                                <button type="submit" onClick={(e) => {form(e, "5")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Название Предмета </p>
                                    <input value = {Name} onChange={e => setName(e.target.value)} className="InputText TextSize-mili" type="text" name="Name" placeholder="Введите Название"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Описание </p>
                                    <input value = {OpisP} onChange={e => setOpisP(e.target.value)} className="InputText TextSize-mili" type="text" name="Opis" placeholder="Введите Описание"/>
                                </div>
                            </form>
                        </div>

                        <hr/>

                        <div id="RightTeacherAdd">
                            <div className="DisplayFlex-row InputBlock">
                                <p className="TextSize-kilo  MarBottomNone TextAlign-center"> Изменить Права (преподаватель-предмет) </p>
                                <button type="submit" onClick={(e) => {form(e, "6")}} className="BittonRed MarginNone TextSize-santi">
                                    Сохранить
                                </button>
                            </div>
                            <form className="DisplayFlex-row">
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Пользователь (преподаватель) </p>
                                    <input value = {User} onChange={e => setUser(e.target.value)} className="InputText TextSize-mili" type="text" name="Name" placeholder="Введите Пользователя"/>
                                </div>
                                <div className="DisplayFlex-column Width-full InputBlock">
                                    <p className="TextSize-mili Text-gray Margin-Top-1em MarginNone"> Предмет </p>
                                    <input value = {PredmetChange} onChange={e => setPredmetChange(e.target.value)} className="InputText TextSize-mili" type="text" name="Opis" placeholder="Введите Предмет"/>
                                </div>
                            </form>
                        </div>

                        <hr className="MarBottomNone"/>

                    </div>
                </div>   
            </div> 
            
            <FooterPages/>
        </div>
    );
}
        
export default ProfilePage;