import React,{Component } from 'react';
// antd
import { Button, Modal,Space,Input, } from 'antd';

import { Link } from 'react-router-dom';

// style 
import './style.scss'

// store
import store from '@/pages/Store/index'

export default class CreateCard extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            cardTitle:'',
            
        }
    }

    // 打开弹窗
    onOpen =()=>{
        this.setState({
            visible:true,
        })
    }
    onClose=()=>{
        this.setState({
            visible:false,
        })
    }

      /**
   * 输入框
   * @param {*} e 
   */
    onChange =(e)=>{
        let inputValue = e.target.value
        this.setState({
        inputValue:inputValue
        })
    }
    // 确认流程名称
    onOk=()=>{
        let cardTitle  = this.state.inputValue
        const action = {
            type:"createCard",
            cardTitle
        }
        store.dispatch(action)
    }

    render(){
        return(
            <div className ="createCard">
                <Button  className = {"normalBtn"}  onClick = {this.onOpen} size="large">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file" viewBox="0 0 16 16" style = {{margin:"0px 5px 0 0"}}>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                    新建</Button>
                <Modal
                    destroyOnClose  = {true}
                        title="新建流程" 
                        visible ={this.state.visible}
                        width = {320}
                        onCancel = {this.onClose}
                        footer={null}
                    >
                    <Space >
                        <Input   onChange = {this.onChange}/> 
                        <Link to='/Devproject/CreateProcess' onClick = {this.onOk}><Button    className = {"normalBtn"}  >确认数据集名称</Button></Link>
                    </Space>

                    </Modal>
            
            </div>
        )
    }
}