/**
 * Created by lpw on 2017/4/20.
 */
import React from "react";
//noinspection JSUnresolvedVariable
import {Component} from "react"



import SearchBar from "../containers/searchBar";
import WeatherList from "../containers/weatherList"
export default class App extends Component{
    render(){
        return(
            <div>

                <SearchBar/>
                <WeatherList/>
            </div>

        )
    }

}