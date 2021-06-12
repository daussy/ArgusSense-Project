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
import AddCsv from './TabTable/components/AddCsv'
// 方法
import {_checkZip} from '../Table1/TabTable/components/functionList'
import {_deleteCsv,_refresh,_vibList} from './TabTable/components/functionList'
class  Table2 extends Component{
  constructor(props){
    super(props)
    this.state = {
      //表格勾选的id
      selectedRowKeys: [],
      tableData:store.getState().DataStoragereducer.vibrationdata.zipTable,
      totalCount:store.getState().DataStoragereducer.totalCount,
      visible:false,
      content:null,
    };
    store.subscribe(this.handleStoreChange);

  }
  handleStoreChange = ()=>{
    this.setState({
      tableData:store.getState().DataStoragereducer.vibrationdata.zipTable,
      totalCount:store.getState().DataStoragereducer.totalCount,

    })
    let content = store.getState().DataStoragereducer.ModalContent
    if(content !=null){
      this.setState({
        visible:true,
        content:content,
      })
    }
  }
  

// 刷新
  refresh =()=>{
    _refresh();
  }

  // 批量删除
  deleteCsv =()=>{
    _deleteCsv(this.state.selectedRowKeys)
  }

  /**
   * 表格选择
   */
  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };


// 翻页器
pageonChange=(page, pageSize)=>{
  // console.log(page, pageSize,'page, pageSize')
  _vibList(page)
}

  render(){
    const { tableData,visible,selectedRowKeys ,totalCount} = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
      return(
        <div style ={{margin:"0 5px 0 5px"}}>
          <Space>
          <Button className = "normalBtn" onClick = {this.refresh} > 刷新 </Button>
          {/* <AddCsv onClose = {this.onClose}></AddCsv> */}
          <Button  className = "deleteBtn" type ="danger" onClick = {this.deleteCsv} > 批量删除</Button>
          </Space>
        <Table 
           rowSelection={{
            ...rowSelection,
          }}
          rowKey = {"id"}
          pagination = {false}
        columns={tableColumns} dataSource={tableData} />
          <Pagination
                style ={{marginTop:"10px"}}
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={totalCount}
                    />
    </div>
      );
  }
}

export default Table2;