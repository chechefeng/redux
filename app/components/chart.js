/**
 * Created by lpw on 2017/4/24.
 */
import React from "react";
import _ from "lodash"
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from "react-sparklines"

function average(data) {
     return _.round(_.sum(data)/data.length)
}
export default (props)=>{
    "use strict";
    return(
        <div>
            <Sparklines height={120} width={180} data = {props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>
                {average(props.data)}
                {props.unit}
            </div>
        </div>
    )

}