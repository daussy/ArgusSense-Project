

import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import { Table ,Pagination,Space,Button} from 'antd';
// table
 import tableConfig from './Table1/tableConfig'
 import vibtableConfig01 from './vibration/Table1/tableConfig'
 import vibtableConfig02 from './vibration/Table2/tableConfig'
// style
import './style.scss'
// 方法
import {_checkZip} from './component/functionList'
import { _vibPngSelectPage } from './vibration/component/functionList';

// 组件
import AutoDivide from './component/AutoDivide'
import BatchOperation from './component/BatchOperation'
import VibAutoDivide from './vibration/component/AutoDivide'
import VibBatchOperation from './vibration/component/BatchOperation'
export default class DatasetConstruct extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedRowKeys: [], // 选中的id
            zipMsg:store.getState().DatasetConstructReducer.zipMsg,
            zipTable :store.getState().DatasetConstructReducer.imagedata.zipTable,
            dataType:store.getState().Preprocessingreducer.dataType,
            vibFileList:store.getState().DatasetConstructReducer.vibTable.imageTable,
            vibTask :store.getState().TagManagementreducer.vibTable.taskTable, //振动数据任务
            vibtotalCount:store.getState().TagManagementreducer.vibTable.totalCount,
            selectedvalue:[], //选中的内容

        }
        store.subscribe(this.handleStoreChange)
    }
  
    handleStoreChange = ()=>{
        this.setState({
            zipMsg:store.getState().DatasetConstructReducer.zipMsg,
            dataType:store.getState().Preprocessingreducer.dataType,
            zipTable :store.getState().DatasetConstructReducer.imagedata.zipTable,
            vibFileList:store.getState().DatasetConstructReducer.vibTable.imageTable,
            vibTask :store.getState().TagManagementreducer.vibTable.taskTable, //振动数据任务
            vibtotalCount:store.getState().TagManagementreducer.vibTable.totalCount,

        })
    }
 
      pageonChange=(page, pageSize)=>{
        
        if(this.state.dataType == 1){
          const {zipMsg} = this.state;
          _checkZip(page,zipMsg.id,zipMsg.name)
        }else{
          _vibPngSelectPage(page)
        }
  
      }
    //   刷新
      refresh=()=>{
        if(this.state.dataType  == 1){
          const {zipMsg} = this.state;
          _checkZip(1,zipMsg.id,zipMsg.name)
        }else{
          _vibPngSelectPage(1)
        }
     
      }
      
        /**
   * 表格选择
   */
  onSelectChange = (selectedRowKeys,selectedvalue) => {
    // console.log('selectedRowKeys changed: ', selectedvalue);
    this.setState({ selectedRowKeys,selectedvalue });
  };
    render(){
        const {zipTable,selectedRowKeys,dataType,vibFileList,vibTask,vibtotalCount} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        return(
            <div>
                    <Space style ={{float:"left",padding:"10px 0 10px 0"}}>
                    <Button size = "large" onClick ={this.refresh}>刷新</Button>
                    {dataType == 1 ? <Space>
                      <BatchOperation  getRecords = {()=>{
                        // console.log(this.state.selectedvalue);
                        return this.state.selectedvalue
                    }}></BatchOperation>
                    <AutoDivide></AutoDivide>
                    </Space>: <Space>
                    <VibBatchOperation  getRecords = {()=>{
                        // console.log(this.state.selectedRowKeys)
                        // console.log(this.state.selectedRowKeys);
                        return this.state.selectedRowKeys
                    }}></VibBatchOperation>
                    <VibAutoDivide></VibAutoDivide>
                      </Space>}
                   
                   
                  </Space>
              {

                dataType == 1 ?<Table 
                      rowSelection={{
                        ...rowSelection,
                      }}
                      rowKey = {"id"}
                      pagination ={false}
                    className = "table2" size="middle"  bordered ={true} columns={tableConfig} dataSource={zipTable} />
                    : <div>
                    <Table  className = "table1" size="middle"  bordered ={true} columns={vibtableConfig01}
                      pagination = {false}
                    dataSource={vibTask} />
                    <Table 
                      rowSelection={{
                        ...rowSelection,
                      }}
                      rowKey = {"id"}
                      pagination ={false}
                    className = "table2" size="middle"  bordered ={true} columns={vibtableConfig02} dataSource={vibFileList} />
                    </div>
                   
             
              }
                <Pagination
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={vibtotalCount}
                    />
                 
            </div>
        );
    }
}