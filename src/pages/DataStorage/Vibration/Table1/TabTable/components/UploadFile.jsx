import React,{Component} from 'react'

// antd
import {Button, message, Form,Input, Space } from 'antd';

// 引入方法
import {_newSet} from './functionList'
// 引入组件
import ChooseFile from './ChooseFile'
export default class UploadFile extends Component{
    constructor(props){
        super(props)

        this.state={
            disabled:false,
            inputValue:"",//输入框输入的值
            datasetName:"",//数据集名字
            setid:"",//生成的数据集id
        }
    }

      /**
   * 确认输入
   */
  onOk = ()=>{
    this.setState({
      datasetName:this.state.inputValue,
      disabled:true,
    })

    let setid = _newSet(this.state.inputValue,this.props.treeKey);
    if(setid!=undefined){
        this.setState({
            setid:setid,
        })
        message.success({
            content: '生成数据集成功！',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
          });
    }else{
        message.error({
            content: '生成数据集失败！',
            className: 'custom-class',
            style: {
              marginTop: '20vh',
            },
          });
        this.onClose();
    }
  }
  onClose= ()=>{
    this.props.onClose();
  }
  
  /**
   * 输入框
   * @param {*} e 
   */
  onChange =(e)=>{
    let inputValue = e.target.value
    // console.log(inputValue)
    this.setState({
      inputValue:inputValue
    })
  }

    render(){
        return(
            <div>
            <Form
            layout={{  labelCol: { span: 8 },
            wrapperCol: { span: 16 }}
            }
            name="上传文件"
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="生成数据集："
              name="name"
              rules={[{ required: true, message: '必填选项' }]}
            >
                <Space >

                    <Input disabled ={this.state.disabled}  onChange = {this.onChange}/> 
                    <Button    className = {"ModelBtn"}  onClick = {this.onOk}>确认数据集名称</Button>
                </Space>

            </Form.Item>
            <ChooseFile onClose = {this.onClose} />

          </Form>

            </div>
        )
    }
}
