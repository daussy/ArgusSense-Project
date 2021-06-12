
import React,{Component} from 'react'
// antd
import { Modal,Button,Cascader,Space,message} from 'antd';
// 方法
import {_vibbatchDivide} from './functionList'
const options = [
    {
      value: '训练集',
      label: '训练集',
    },
    {
      value: '测试集',
      label: '测试集',
    },
  ];
export default class BatchOperation extends Component{
    constructor(props){
        super(props)
        this.state= {
            visible:false,
            value:'',//训练集或者 测试集
        }

    }

onOpen=()=>{
        this.setState({
            visible:true
        })
}

/**
 * 提交批量划分
 */
onOk = ()=>{
    let idArr = this.props.getRecords()
    // console.log(idArr);
    if(idArr.length ==0){
       message.error('未选中图片！')
    }else if(idArr == undefined){
        message.error('请勿同时选择来自训练集和测试集的文件!')
    }else{
        _vibbatchDivide(idArr,this.state.value)
    }
   
    this.setState(
        {
            visible:false,
        }
    )
    
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
 * 表格改变
 */
  
onChange = (value)=>{
   this.setState(
       {
        value:value[0] 
       }
   )
  } 


    render(){
    const { visible } = this.state;
        return(
            <div >
            <Button   className ="normalBtn"  size ='large' onClick ={this.onOpen}>批量操作</Button>
            <Modal
                title="数据集划分" 
                visible ={visible}
                width = {400}
                footer={null}
                onCancel = {this.onClose}
                >
                <Space>
                   <Cascader options={options} onChange={this.onChange} placeholder="请选择要划分的数据集！" />
                    <Button type ="normal"  onClick ={this.onOk}>确认划分</Button>
                </Space>
            </Modal>
            </div>
        )
    }

}
