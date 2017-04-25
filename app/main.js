/**
 * Created by lpw on 2017/4/15.
 */
import React from "react"
import ReactDom from "react-dom"
//noinspection JSUnresolvedVariable
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxPromise from "redux-promise"
import reducers from "./reducers"

//const store = createStore(reducer)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
import Book from "./components/app"
const App= ()=> {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
                <Book/>
        </Provider>
    )
}
const root = document.getElementById("app")
ReactDom.render(<App/>,root)