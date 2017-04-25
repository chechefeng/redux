/**
 * Created by lpw on 2017/4/20.
 */
//noinspection JSUnresolvedVariable
import {combineReducers} from "redux";
import WeatherReducer from "./reducerWeather"

const rootReducer = combineReducers({
    weather :WeatherReducer
})
export default rootReducer