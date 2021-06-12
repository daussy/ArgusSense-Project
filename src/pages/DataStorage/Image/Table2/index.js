import React, { Component } from 'react';
// antd
import {Button, Table, Tag, Space ,Modal,message,Pagination} from 'antd';
// columns
import tableColumns from './tableConfig'
// store
import store from '@/pages/Store/index'
// style
import '../index.scss'
// 组件
import AddImage from './TabTable/components/AddImage'
// 方法
import {_checkZip} from '../Table1/TabTable/components/functionList'
import {_deleteImage,_refresh,_imgList} from './TabTable/components/functionList'
class  Table2 extends Component{
  constructor(props){
    super(props)
    this.state = {
      //表格勾选的id
      selectedRowKeys: [],
      tableData:store.getState().DataStoragereducer.imagedata.zipTable,
      visible:false,
      content:null,
    };
    store.subscribe(this.handleStoreChange);

  }
  handleStoreChange = ()=>{
    this.setState({
      tableData:store.getState().DataStoragereducer.imagedata.zipTable,

    })
    let content = store.getState().DataStoragereducer.ModalContent
    if(content !=null){
      this.setState({
        visible:true,
        content:content,
      })
    }
  }
  

  messageFunc =(flag,text) =>{
    if(flag){
      message.success(`${text}成功！`)
    }else{
      message.error(`${text}失败！`)
    }
  }

// 刷新
  refresh =()=>{
    _refresh();
  }

  // 批量删除
  deleteImg =()=>{
    let e =_deleteImage(this.state.selectedRowKeys)
    this.messageFunc(e,'删除')
  }

  /**
   * 表格选择
   */
  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  onClose = ()=>{
    this.setState({
      visible:false
    })
    const action = {
      type:"cancelView"
    }
    store.dispatch(action)
  }
  // 打开弹窗
  onOpen =(a)=>{
    // console.log(a)
    this.setState({
      visible:true,
      // content:a
    })
  }
// 添加图片
addImg = ()=>{

}
// 翻页器
pageonChange=(page, pageSize)=>{
  // console.log(page, pageSize,'page, pageSize')
  _imgList(page)
}

  render(){
    const { tableData,visible,selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
      return(
        <div style ={{margin:"0 5px 0 5px"}}>
          <Space>
          <Button className = "normalBtn" onClick = {this.refresh} > 刷新 </Button>
          <AddImage onClose = {this.onClose}></AddImage>
          <Button  className = "deleteBtn" type ="danger" onClick = {this.deleteImg} > 批量删除</Button>
          </Space>
        <Table 
           rowSelection={{
            ...rowSelection,
          }}
          rowKey = {"id"}
          pagination = {false}
        columns={tableColumns} dataSource={tableData} />
          <Pagination
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={100}
                    />
        <Modal
          title="查看图片" 
          visible ={visible}
          width = {320}
          footer={null}
          onCancel = {this.onClose}
        >
          <div id = "imgModal">
            {this.state.content}
            </div>          
      
        </Modal>
    </div>
      );
  }
}

export default Table2;