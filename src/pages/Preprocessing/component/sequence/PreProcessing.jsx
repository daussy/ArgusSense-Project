import React,{Component} from 'react'
// antd
import {Button,Select ,Space ,Modal,message} from 'antd';

// style
import '../../style.scss'
import {_preProcessing} from '../functionList'

const { Option } = Select;

class PreProcessing extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            algorithm:"",
        }
    }

  /**
   * 提交编辑表单
   */
  handleSubmit = () => {
    this.onClose();
    let record =  this.props.onClick()
    let originID = record.originID
    _preProcessing(originID,this.state.algorithm,record);
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
        const{visible} = this.state;

        return(
            <div>
                <Button
                // size="small"
                type="normal"
                className = "normalBtn"
                onClick={this.onOpen}
                >
                数据预处理
                </Button>
                <Modal
                    title="预处理算法选择" 
                    visible ={visible}
                    // width = {320}
                    onCancel = {this.onClose}
                    footer={null}
                >
                    <Space>
                        <Select defaultValue="奇异值处理" style={{ width: 250 }} onChange = {this.onChange}>
                            <Option value="奇异值处理">奇异值处理</Option>
                                <Option value="归一化处理">归一化处理</Option>
                                <Option value="平滑处理">平滑处理</Option>
                                <Option value="降噪处理">降噪处理</Option>
                        </Select>
                        <Button className ="normalBt" onClick = {this.handleSubmit}>确认</Button>
                    </Space>
                         
                     
                    
                </Modal>
            </div>
          
        )
    }

 
}

export default PreProcessing;

const styles = {
    editDialog: {
      display: 'inline-block',
      marginRight: '5px',
    },
  };
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };