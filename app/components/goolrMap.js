/**
 * Created by lpw on 2017/4/24.
 */

import React from "react";
import { GoogleMapLoader, GoogleMap } from "react-google-maps";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";

// export default (props)=>{
//     "use strict";
//     return(
//         <GoogleMapLoader
//
//             containerElement={<div style={{height:'100%'}}></div>}
//             googleMapElement={
//                 <GoogleMap defaultZoom={12} defaultCenter={{lat:props.lat,lng:props.lng}}/>
//             }
//         />
//     )
//
// }


export default (props)=>{
    console.log("map",props)
    "use strict";
    return(
        <ScriptjsLoader
            hostname={"maps.googleapis.com"}
            pathname={"/maps/api/js"}
            query={{}}
            loadingElement={
    <div>
    </div>
  }
            containerElement={
    <div />
  }
            googleMapElement={
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{lat:-25.363882, lng: 131.044922}}
    >
    </GoogleMap>
  }
        />
    )
}