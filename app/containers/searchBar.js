/**
 * Created by lpw on 2017/4/21.
 */
//noinspection JSUnresolvedVariable
import React,{Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index"

 class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {term:""};
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        //console.log(event.target.value)
        this.setState({
            term:event.target.value
        })
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.fetchWeather(this.state.term)
        this.setState({term:""})

    }
     render(){
        return(
            <form action="" onSubmit={this.onFormSubmit}>
                <input
                  placeholder="得到五天温度"
                  value={this.state.term}
                  onChange={this.onInputChange}
                />
                <span>
                    <button type="submit">submit</button>
                </span>
            </form>
        )
    }
}





function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null ,mapDispatchToProps)(SearchBar)