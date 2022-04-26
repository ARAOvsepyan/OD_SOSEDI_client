import {makeAutoObservable} from "mobx";

export default class BlogStore {
    constructor() {
        this._blog = []
        makeAutoObservable(this)
    }

    setBlog(blog) {
        this._blog = blog
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get blog() {
        return this._blog
    }
   
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}