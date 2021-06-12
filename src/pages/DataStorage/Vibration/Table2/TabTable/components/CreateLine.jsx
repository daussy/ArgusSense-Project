import React,{Component} from 'react'

// antd
import {Button,Modal} from 'antd'
import CreateChart from './CreateChart'
export default class CreateLine extends Component {
    constructor(props){
        super(props)

        this.state={
            visible:false
        }

    }
    onOpen=()=>{
        let result = this.props.onClick()
        if(result != undefined){
            this.setState({
                visible:true,
                data:result,
            })
        }
    }
    onClose =()=>{
        this.setState({
            visible:false
        })
    }
 

    render(){
        const {visible,data} = this.state;
        return(
            <div>
                <Button size ={"small"} onClick ={this.onOpen}>查看</Button>
                <Modal
                    title="查看数据" 
                    visible ={visible}
                    onCancel ={this.onClose}
                    width = {1000}
                    footer={null}
                >
                    <CreateChart result = {data}></CreateChart>
                </Modal>
            </div>
        )
    }
}