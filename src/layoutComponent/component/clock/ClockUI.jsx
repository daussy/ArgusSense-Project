import React,{ Component} from 'react'
import style from './clock.scss'

export default class ClockUI extends Component{
    constructor(props){
        super(props)
        this.state ={
            time: new Date()
        }
        setInterval(function(){
 
            this.setState({
                time:new Date()
            });
    
            }.bind(this),1000);
    }

    //更新时间
    render(){
        return(
            <span className = "clock-container">{this.state.time.toLocaleDateString()} 
            {this.state.time.toLocaleTimeString()}</span>
        );
    }

}