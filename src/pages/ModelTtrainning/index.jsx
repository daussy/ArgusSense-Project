import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import { Table ,Pagination} from 'antd';
// table
 import tableColumns01 from './Table1/tableConfig'
 import tableColumns02 from './Table2/tableConfig'
 import tableColumns03 from './Table3/tableConfig'
 import tableColumns04 from './vibration/Table2/tableConfig'

// style
import './style.scss'
import {_modelList} from './component/functionList'
import {_vibmodelList} from './vibration/component/functionList'
export default class ModelTtrainning extends Component{
    constructor(props){
        super(props)
        this.state ={
            dataSource:store.getState().ModelTrainingreducer.tableData,
            modelList :store.getState().ModelTrainingreducer.modelTrainingTable,
            id :store.getState().ModelTrainingreducer.tableData[0].originID,
            dataType:store.getState().ModelTrainingreducer.dataType,
            imgData:store.getState().ModelTrainingreducer.imageModelTraining.tableData,
            vibData:store.getState().ModelTrainingreducer.vibModelTraining.modelList,
            vibtotalCount:store.getState().ModelTrainingreducer.vibModelTraining.totalCount,
            selectedRowKeys:"",
        }
        store.subscribe(this.handleStoreChange)
    }
  
    componentDidMount(){
      const {dataType} = this.state;
      if(dataType ===1){
        _modelList(1,this.state.id)
      }else if(dataType === 3){
        _vibmodelList(1)
      }
    }

    handleStoreChange = ()=>{
        this.setState({
            dataSource:store.getState().ModelTrainingreducer.tableData,
            dataType:store.getState().ModelTrainingreducer.dataType,
            modelList :store.getState().ModelTrainingreducer.modelTrainingTable,
            imgData:store.getState().ModelTrainingreducer.imageModelTraining.tableData,
            vibData:store.getState().ModelTrainingreducer.vibModelTraining.modelList,
            vibtotalCount:store.getState().ModelTrainingreducer.vibModelTraining.totalCount,
        })
    }
 
      pageonChange=(page, pageSize)=>{
        _modelList(page)
      }

      vibpageonChange=(page,pageSize)=>{
        _vibmodelList(page)
      }
            
/**
   * 表格选择
   */
  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

      dataType=()=>{
        const {dataSource,modelList,dataType,imgData,vibData,selectedRowKeys,vibtotalCount} = this.state
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
          if(dataType===1){
            //   图像数据
            return(
                <div> 
                <Table  className = "table1" size="small"  bordered ={true} columns={tableColumns03} dataSource={imgData} 
                pagination = {false}
                /></div>
            );
          }else if(dataType===2){
            // 时序数据
            return(
                <div>
                <Table  className = "table1" size="small"  bordered ={true} columns={tableColumns01} dataSource={dataSource} 
                pagination = {false}
                />
                
                <Table  className = "table2" size="middle"  bordered ={true} columns={tableColumns02} dataSource={modelList} 
                  pagination = {false}
                />
                <Pagination
                onChange = {this.pageonChange}
                showSizeChanger
                defaultCurrent={1}
                total={100}
                />
            </div>
            )
          }else{
            // 振动数据
            // var newArr = vibTask.concat();
            return(
                <div>
                    <Table  className = "table2" size="middle"  
                    rowSelection={{
                        ...rowSelection,
                      }}
                      rowKey = {"id"}
                      pagination = {false}
                    bordered ={true} columns={tableColumns04} dataSource={vibData} />
                    <Pagination
                    onChange = {this.vibpageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={vibtotalCount}
                    />
                </div>
            )
            
          }
         
      }

    render(){
        // const {dataSource,modelList,dataType,imgData} = this.state
        // console.log(dataType);
        return(
            <div>
                {
                    this.dataType()
                }
            </div>
        );
    }
}