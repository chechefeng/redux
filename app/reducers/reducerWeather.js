/**
 * Created by lpw on 2017/4/21.
 */
import  {FETCH_WEATHER} from  "../actions/index"
export default function (state = [], action) {
    console.log("action",action);
    switch (action.type){
        case FETCH_WEATHER:
           return [action.payload.data,...state]
            // return state.concat([action.payload.data]);
    }
    return state
}