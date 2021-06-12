import React,{Component} from 'react'
import {Button ,Space ,Modal,Form, Input} from 'antd';

// style
import '../../style.scss'
import store from '@/pages/Store/index'

export default class DetailMsg extends Component{
    constructor(props){
        super(props)

        this.state={
            records:"",
            name:"",
            iterNum:"",
            lr:"",
            minNum:"",
            task:""
        }
        

    }
    componentDidMount(){
        let record = this.props.onClick()
        this.setState({
            ...record
        })
    }
   

      // 打开编辑弹窗
    onOpen = () => {  
      
        this.setState({
        visible: true,
        }
        );
   
    };

    // 关闭弹窗
    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    formArr =()=>{
        const {name,iterNum,lr,minNum} = this.state;
        const  formItemArr = [
    
            {
                label:"模型名称",
                name:"name",
                content:<Input disabled  defaultValue = {name}></Input>
            },  {
                name:"iterNum",
                label:"迭代次数",
                content:   <Input  disabled   defaultValue = {iterNum} />
            }, {
                name:"lr",
                label:"学习率",
                content:   <Input  disabled defaultValue = {lr} />
            },{
                name:"minNum",
                label:"训练批次",
                content:   <Input  disabled defaultValue = {minNum} />
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
                onClick={this.onOpen}
                size ="small"
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
                    <Form
                        {...layout}
                        ref={this.formRef}
                        name="basic"
                        >
                            {
                              this.formArr().map((item,index)=>{
                                    return(
                                        <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        
                                        rules={ item.rule?
                                            [
                                        {
                                            required: true,
                                            message: `输入${item.label}`,
                                        },
                                        ]:null
                                    }
                                    >
                                       {item.content}
                                    </Form.Item>
                                    )
                                })
                            }
                        </Form>
                     
                    
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