import React,{Component} from 'react'
import {Button ,Space ,Modal,Form, Input} from 'antd';

// style
import '../style.scss'
import store from '@/pages/Store/index'

export default class DetailMsg extends Component{
    constructor(props){
        super(props)

        this.state={
            records:"",
            task:""
        }
        
        store.subscribe(this.handleStoreChange)

    }
    handleStoreChange= ()=>{
        let records = store.getState().ModelTrainingreducer.imageModelTraining.tableData
        this.setState({
            ...records[0]
        },
        // ()=>{
        //     console.log(this.state)
        // }
        )
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
        const  formItemArr = [
            {
                label:"处理任务",
                name:"task",
                rule:false,
                content:<Input disabled defaultValue = {this.state.task}></Input>
            },
            {
                label:"训练算法",
                name:"algorithm",
                rule:false,
                content:<Input disabled   defaultValue = {this.state.algorithm}></Input>
            },
            {
                label:"数据集",
                name:"datasetName",
                rule:false,
                content:<Input disabled  defaultValue = {this.state.datasetName}></Input>
            },
            {
                label:"模型名称",
                name:"modelName",
                rule:true,
                content:<Input disabled  defaultValue = {this.state.modelName}></Input>
            },  {
                name:"numEpochs",
                label:"迭代次数",
                rule:true,
                content:   <Input  disabled   defaultValue = {this.state.numEpochs} />
            }, {
                name:"rpnLr",
                label:"rpn学习率",
                content:   <Input  disabled defaultValue = {0.00001} />
            },{
                name:"classifierLr",
                label:"分类器学习率",
                content:   <Input  disabled defaultValue = {0.00001} />
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
                className = "normalBtn"
                onClick={this.onOpen}
            
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
                        onFinish={this.handleSubmit}
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