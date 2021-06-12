import React, { Component } from 'react';

// antd
import {Button, Table, Tag, Space ,Modal} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// columns
import tableColumns from './tableConfig'
// store
import store from '@/pages/Store/index'
// 组件
import UploadFile from './TabTable/components/UploadFile.jsx';
// style
import '../index.scss'

class  Table1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      //表格勾选的id
      selectedRowKeys: [],
      dataSource: store.getState().DataStoragereducer.imagedata.imageTable,
      visible:false,
    };
    store.subscribe(this.handleStoreChange);

  }

  handleStoreChange=()=>{
    this.setState({
      dataSource: store.getState().DataStoragereducer.imagedata.imageTable,
      treeKey: store.getState().DataStoragereducer.treeKey,
    })
  }
    /**
   * 打开输入数据集信息弹窗
   */
   onOpen=()=>{
    this.setState({
      visible:true,
    })
  }

  /**
   * 关闭弹窗
   */
  onClose=()=>{
    this.setState({
      visible:false,
    })
  }

  render(){
    const {dataSource,visible,treeKey} = this.state;
    return(
      <div style ={{margin:"0 5px 0 5px"}}>
      <Button className = "normalBtn" onClick = {this.onOpen}  icon={<UploadOutlined />}> 上传文件</Button>
      <Table columns={tableColumns} dataSource={dataSource} />
      <Modal
      destroyOnClose  = {true}
        title="上传文件" 
        visible ={visible}
        width = {320}
        onCancel = {this.onClose}
        footer={null}
      >
        <UploadFile closeModal ={this.onClose} treeKey ={treeKey} disabled={false}></UploadFile>
      </Modal>
  </div>
    )
  }
  
}
export default Table1;

