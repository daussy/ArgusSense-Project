

  import React,{Component} from 'react'
import {Button ,Space ,Modal,Form, Input} from 'antd';

// style

export default class DetailMsg extends Component{
    constructor(props){
        super(props)

        this.state={
            records:"",
            task:"",
            modelName:"",
        }
        

    }
    componentDidMount(){
       
    }

      // 打开编辑弹窗
    onOpen = () => {    
        let record = this.props.onClick();
        this.setState({
            modelName:record.modelName
        },()=>{
            this.setState({
                visible: true,
                });
        })
       
   
    };

    // 关闭弹窗
    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    formArr =()=>{
        const  formItemArr = [
           
            {
                label:"评估算法",
                name:"algorithm",
                rule:false,
                content:<Input disabled   defaultValue = {"CWT-CNN"}></Input>
            },
            {
                label:"评估模型",
                name:"modelName",
                rule:false,
                content:<Input disabled defaultValue = {this.state.modelName}></Input>
            },
          
        ]
        return formItemArr
        
    }


    render(){
        const {visible,records} = this.state;
        return(
            <div>
                
                <Button
                type="normal"
                // className = "normalBtn"
                onClick={this.onOpen}
                size = "middle"
                >
                详细信息
                </Button>
                <Modal
                    title="详细信息" 
                    visible ={visible}
                    // width = {320}
                    destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={null}
                >
                    <Space>
                        评估算法:<Input disabled   defaultValue = {"CWT-CNN"}></Input>
                    </Space>

                    <Space style ={{marginTop:"10px"}}>
                        评估模型:<Input disabled value = {this.state.modelName}></Input>
                        </Space>
                    
                </Modal>
          
            </div>
        )
    }
}


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };