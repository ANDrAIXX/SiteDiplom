import {makeAutoObservable, makeObservable} from 'mobx';

export default class UserStore
{
    constructor()
    {
        this._isAuth = true
        this._user = {}
        makeObservable(this)
    }

    setIsAuth(bool)
    {
        this._isAuth = bool
        console.log(this._isAuth)
    }

    //setIsAuth(user)
    //{
    //    this._user = user
    //}

    get isAuth()
    {
        return this._isAuth
    }

    get User()
    {
        return this._user
    }
}