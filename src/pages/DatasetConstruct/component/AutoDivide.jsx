import React,{Component } from 'react';
// antd
import {Button,Modal,Space,Input,Form,InputNumber} from 'antd'
// store
import store from '@/pages/Store/index'
// 方法
import {_autoDivide} from './functionList'
export default class AutoDivide extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            trainingRatio:'',//训练比例
            trainingNum:'',//训练数量
            TagNum:store.getState().DatasetConstructReducer.imagedata.TagNum,
            testRatio:'',//测试比例
            testNum:'',//测试数量
            // TagNum:'',//有标签的图片数量
        }
        store.subscribe(this.handleStoreChange)
        this.formRef = React.createRef();
    }
    handleStoreChange =()=>{
        this.setState({
            // totalCount:store.getState().DatasetConstructReducer.totalCount,
            TagNum:store.getState().DatasetConstructReducer.imagedata.TagNum,

        }) 
    }

onOpen=()=>{
        this.setState({
            visible:true
        })
}
    
/**
 * 关闭窗口
 */
onClose = ()=>{
    this.setState(
        {
            visible:false,
        }
    )
}
  /**
   * 提交表单
   */
  handleSubmit = (values) => {
    _autoDivide(values.trainingNum)
    this.onClose()

  };

  /**
   * 表单变化
   */
  onChange=(changedValues, allValues)=>{
        let a = 1-allValues.trainingRatio
        let b = Math.ceil(allValues.trainingRatio*this.state.TagNum) 
        let c = this.state.TagNum-b
        this.formRef.current.setFieldsValue({
            testRatio:a,
            trainingNum:b,//训练数量
            testNum:c,//测试数量
            tagNum:this.state.TagNum
          });
  }

    render(){
        const {visible} = this.state;
        return(
            <div>
            <Button  className ="normalBtn"  size ='large' onClick ={this.onOpen}>自动划分</Button>
            <Modal
                title="数据集划分" 
                visible ={visible}
                // width = {400}
                footer={null}
                onCancel = {this.onClose}
                >
                <Space>
            
                   <Form
                        ref={this.formRef}
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.handleSubmit}
                        onValuesChange ={this.onChange}
                        >
                        <Form.Item
                            label={"有标签的图片数量"}
                            name={"tagNum"}
                           >
                            <Input     disabled></Input>
                        </Form.Item>
                        <Form.Item
                            label={"训练比例"}
                            name={"trainingRatio"}
                            rules={ 
                                [{
                                            required: true,
                                            message: `输入训练比例！`,
                                        },]
                                    }>
                                    <InputNumber   min={0} max={1} step={0.01}  
                                    placeholder = {'请输入0-1之间的值'} ></InputNumber>
                        </Form.Item>
                        <Form.Item
                            label={"训练数量"}
                            name={"trainingNum"}
                            >
                                    <Input   
                                    disabled ></Input>
                        </Form.Item>
                   
                        <Form.Item
                            label={"测试比例"}
                            name={"testRatio"}
                            >
                                    <Input 
                                    disabled ></Input>
                        </Form.Item>
                        <Form.Item
                            label={"测试数量"}
                            name={"testNum"}
                            >
                                    <Input  
                                    disabled ></Input>
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button className ="normalBtn" htmlType="submit" >确认构建</Button>
                        </Form.Item>
                        </Form>

                </Space>
            </Modal>
            </div>
        )
    }
}

const layout = {
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };