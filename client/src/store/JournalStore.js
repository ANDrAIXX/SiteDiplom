import {makeAutoObservable, makeObservable} from 'mobx';

export default class UserStore
{
    constructor()
    {
        this._Group = [
            {id: 1, Group: 'p-20'},
            {id: 2, Group: 'vb-20'}
        ]

        makeObservable(this)
    }

    setIsAuth(group)
    {
        this._Group = group
    }

    get Group()
    {
        return this._Group
    }
}