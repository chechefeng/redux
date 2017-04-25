/**
 * Created by lpw on 2017/4/24.
 */

import React,{Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GooleMap from "../components/goolrMap"


 class Weather extends Component{
     renderWeather(cityData){

         const name = cityData.city.name;
         // const lon = cityData.city.coord.lon;
         // const lat = cityData.city.coord.lat;
         const {lon ,lat } = cityData.city.coord
         const temp = cityData.list.map(weather=>weather.main.temp);
         const pressures = cityData.list.map(weather=>weather.main.pressure);
         const humidities = cityData.list.map(weather=>weather.main.humidity);
         console.log("temp",temp)
         return(
             <tr key={name}>
                 <td >{name}</td>
                 <td><GooleMap lon ={lon} lat = {lat}/></td>
                 <td><Chart data = {temp} color = "red" unit="k"/></td>
                 <td><Chart data = {pressures} color = "green" unit="hPa"/></td>
                 <td><Chart data = {humidities} color = "black" unit="%"/></td>

             </tr>
         )
     }
     render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>温度</th>
                        <th>气压</th>
                        <th>雨量</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state) {
    console.log("state",state)
    return{
        weather:state.weather
    }
}
export default connect(mapStateToProps)(Weather)