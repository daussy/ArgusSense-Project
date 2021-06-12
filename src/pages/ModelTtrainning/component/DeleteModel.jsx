import React, { Component } from 'react';

// antd
import {Button,Modal,Space} from 'antd'

//store
import store from '@/pages/Store/index'

// 导入方法
import {_deleteModel} from './functionList'
// style
import '../style.scss'
export default class DeleteModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      datasetID:'',
    };
  }
  
  // 打开编辑弹窗
  onOpen = () => {
    // let record = this.props.onClick();
    // console.log(record)
    this.setState({
      visible: true,
      // datasetID:record.id
    });
  };

  // 关闭弹窗
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  // 确认删除
  deleteModel =()=>{
    let record = this.props.onClick();
    let id = record.sourceFile
    let modelID  = record.id
    _deleteModel(id,modelID)
    this.onClose()
  }


  render() {
    const {visible} = this.state;    
    return (
      <div>
      <Button size="small" type="danger" className ="deleteBtn" onClick = {this.onOpen}>
        删除
      </Button>
      <Modal
        title="删除" 
        visible ={visible}
        width = {320}
        // onOk ={this.deleteZip}
        onCancel = {this.onClose}

        footer={(
          <Space >
          <Button  type = "danger"  onClick={this.deleteModel}>
            删除
          </Button>
          <Button onClick={this.onClose}>
            取消
          </Button>
       
         </Space>
        )
          
        }
      >
        删除后将不能恢复，是否确认删除！
      </Modal>
      </div>
 
    );
  }
}


