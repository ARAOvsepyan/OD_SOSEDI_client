import {makeAutoObservable} from "mobx";

export default class AdressStore {
    constructor() {
        this._adress = []
        makeAutoObservable(this)
    }

    setAdress(adress) {
        this._adress = adress
    }

    get adress() {
        return this._adress
    }
   
}