import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import { Table ,Pagination,Button} from 'antd';
// table
 import tableConfig from './Table1/tableConfig'
 import vibtableConfig01 from './vibration/Table1/tableConfig'
 import vibtableConfig02 from './vibration/Table2/tableConfig'

// style
import './style.scss'
// 方法
import {_checkZip} from './component/functionList'
import {_vibPngSelectPage} from './vibration/component/functionList'
import {_deleteLabel} from './vibration/component/functionList'

// 组件
export default class TagManagement extends Component{
    constructor(props){
        super(props)
        this.state ={
            selectedRowKeys: [],
            zipMsg:store.getState().TagManagementreducer.zipMsg,
            dataType:store.getState().Preprocessingreducer.dataType,
            zipTable :store.getState().TagManagementreducer.imagedata.zipTable,
            vibTask :store.getState().TagManagementreducer.vibTable.taskTable, //振动数据任务
            vibFileList:store.getState().TagManagementreducer.vibTable.imageTable,
            vibtotalCount:store.getState().TagManagementreducer.vibTable.totalCount,
        }
        store.subscribe(this.handleStoreChange)
    }
  
    componentDidMount(){
        const {zipMsg,dataType} = this.state;
        if(dataType == 1){
            _checkZip(1,zipMsg.id,zipMsg.name)
        }else{
            _vibPngSelectPage(1)
        }
    }

    handleStoreChange = ()=>{
        this.setState({
            zipMsg:store.getState().TagManagementreducer.zipMsg,
            dataType:store.getState().Preprocessingreducer.dataType,
            zipTable :store.getState().TagManagementreducer.imagedata.zipTable,
            vibTask :store.getState().TagManagementreducer.vibTable.taskTable,
            vibFileList:store.getState().TagManagementreducer.vibTable.imageTable,
            vibtotalCount:store.getState().TagManagementreducer.vibTable.totalCount,
        })
    }
    /**
   * 表格选择
   */
  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
 
      pageonChange=(page, pageSize)=>{
        const {zipMsg} = this.state;
        _checkZip(page,zipMsg.id,zipMsg.name)
      }
      vibPageChange = (page)=>{
        _vibPngSelectPage(page)
      }
      batchDelete = ()=>{
        // console.log(this.state.selectedRowKeys);
        _deleteLabel(this.state.selectedRowKeys)
      }
    render(){
        const {zipTable,dataType,vibTask,vibFileList,selectedRowKeys,vibtotalCount} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        return(
            
            <div>
                  {
                dataType == 1 ? <div>
                    <Table  className = "table1" size="middle"  bordered ={true} columns={tableConfig}
                      pagination = {false} dataSource={zipTable} />
                    <Pagination
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={100}
                    />
                </div>: <div>
                <Table  className = "table1" size="middle"  bordered ={true} columns={vibtableConfig01}
                  pagination = {false}
                dataSource={vibTask} />
                <div className = "table2" >
                <Button  
                        style = {{marginLeft:"10px",marginBottom:"10px"}}
                        className = "deleteBtn"
                        type ="danger" 
                        onClick = {this.batchDelete}
                        >批量删除标签</Button>
                <Table  size="middle"  bordered ={true} columns={vibtableConfig02} 
                 pagination = {false} dataSource={vibFileList} 
                 rowSelection={{
                    ...rowSelection,
                  }}
                  rowKey = {'id'}
                  style = {{marginBottom:"10px"}}
                 />

                    <Pagination
                    onChange = {this.vibPageChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={vibtotalCount}
                    />

                </div>
              
                </div>

                }
                    
            </div>
        );
    }
}