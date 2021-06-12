import React,{Component} from 'react';
import {Button ,Space ,Modal,Form, Input} from 'antd';

// style
import '../style.scss' 
import {_imgStateEvaluateResult} from './functionList'
export default class GetResult extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    onClick = ()=>{
        let record = this.props.onClick();
        if(record.setId){
            _imgStateEvaluateResult(1);
        }
    }

    render(){
        return(
            <Button
            type="normal"
            className = "normalBtn"
            onClick={this.onClick}
            size = "middle"
            >
            查看结果
            </Button>
        )
    }
}