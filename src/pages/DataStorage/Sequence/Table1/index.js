import React, { Component } from 'react';

// antd
import {Button, Table, Tag, Space ,Modal,Upload,message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// 
import  {hostPort} from '@/Common'

// columns
import tableColumns from './tableConfig'
// store
import store from '@/pages/Store/index'
// style
import '../index.scss'

import {_refresh} from './TabTable/components/functionList'
class  Table1 extends Component{
  constructor(props){
    super(props)
    this.state = {
      //表格勾选的id
      selectedRowKeys: [],
      dataSource: store.getState().DataStoragereducer.sequenceTable,
      label:store.getState().DataStoragereducer.label,
      visible:false,
    };
    store.subscribe(this.handleStoreChange);

  }

  handleStoreChange=()=>{
    this.setState({
      dataSource: store.getState().DataStoragereducer.sequenceTable,
      treeKey: store.getState().DataStoragereducer.treeKey,
      label:store.getState().DataStoragereducer.label,

    })
  }
    /**
   * 打开上传文件按钮
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
  // 上传文件
  onChange=(info)=> {
    if (info.file.response) {
        let response = info.file.response
        if(response.flag){
        message.success(`${info.file.name} 上传成功！`);  
        _refresh(this.state.treeKey,this.state.label)
        this.onClose();

        }else{
        message.error(`${info.file.name}上传失败！`);
        this.onClose();

        }
    }
  } 

  render(){
    const {dataSource,visible,treeKey} = this.state;
    return(
      <div style ={{margin:"0 5px 0 5px"}}>
      <Upload
                    
                    name = 'file'
                    onChange = {this.onChange}
                    action={`${hostPort}equip/file/upload`}
                    data = {{
                        dataId:this.state.treeKey,
                        dataType:2
                    }}
                    showUploadList ={false}
                    >
            <Button icon={<UploadOutlined />} className = "normalBtn" 
            > 上传文件</Button>
        </Upload>
      {/* <Button className = "normalBtn" onClick = {this.onOpen} > 上传文件</Button> */}
      <Table columns={tableColumns} dataSource={dataSource} />
   
  </div>
    )
  }
  
}

export default Table1;

