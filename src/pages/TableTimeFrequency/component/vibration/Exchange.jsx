import React,{Component} from 'react'
// antd
import {Button,Select ,Space ,Modal,Form,Input} from 'antd';

// style
import '../../style.scss'
import {_vibtransform} from '../functionList'

// store
import store from '@/pages/Store/index'
const { Option } = Select;

class Exchange extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            algorithm:"",
            loading:false,
        }
        store.subscribe(this.handleStoreChange)

    }

    handleStoreChange = ()=>{
        
      let e = store.getState().TableTimeFrequencyreducer.taskTable[0].state 
      if(e ==='已完成'){
          this.setState({
              loading:false,
          })
      }
    }

  /**
   * 提交
   */
  handleSubmit = (values) => {
    this.onClose();
    let record =  this.props.onClick()
    let preprocessId = record.preprocessId
    let flag
    // console.log(values,'values')
    this.setState({
      loading:true,
    },
    ()=>{
        setTimeout(() => {
            flag = _vibtransform(preprocessId,record,values);
        }, 1000);
    })
   
  };


  // 打开编辑弹窗
  onOpen = () => {
    this.setState({
      visible: true,
    });
  };

  // 关闭弹窗
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
//   选择框变化
onChange=(value)=>{
    this.setState({
        algorithm:value
    })
}
    render(){
        const{visible,loading} = this.state;

        return(
            <div>
                <Button
                // size="small"
                type="normal"
                className = "normalBtn"
                onClick={this.onOpen}
                loading ={loading}
                >
                时频图像转换
                </Button>
                <Modal
                    title="时频图像转换" 
                    visible ={visible}
                    // width = {320}
                    onCancel = {this.onClose}
                    footer={null}
                >
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.handleSubmit}
                        >
                            {
                                formItemArr.map((item,index)=>{
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
                        <Form.Item {...tailLayout}>
                            <Button className ="normalBtn"  htmlType="submit" >提交时频图像转换</Button>
                        </Form.Item>
                        </Form>    
                     
                    
                </Modal>
            </div>
          
        )
    }

 
}

export default Exchange;

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  
  const formItemArr = [
    {
        name:"wavelet",
        label:"小波基选择",
        rule:true,
        content:(
            <Select
            placeholder="请选择小波基！"
            allowClear
            >
            <Option value="mesh">mesh</Option>
            <Option value="cmor">cmor</Option>
            <Option value="morl">morl</Option>
            </Select>
        )
    },{
        name:"windowSize",
        label:"滑动窗大小",
        rule:true,
        content: (
            <Space>
                <Input placeholder = {'推荐大小为1024'}   />
            </Space>
        ) 
    },{
        name:"picNum",
        label:"时频图像张数",
        rule:true,
        content:   <Input  placeholder = {'推荐张数为100'} />
    },{
        name:"frequency",
        label:"采集频率",
        rule:true,
        content:   <Input placeholder = {'推荐频率为1024'} />
    }
]