import React,{Component} from 'react'
// store
import store from '@/pages/Store/index'
// antd
import { Table } from 'antd';
// table
 import tableConfig from './component/tableConfig'

// style
import './style.scss'
import {_modelList} from './component/functionList'
export default class ModelCheck extends Component{
    constructor(props){
        super(props)
        this.state ={
            dataSource:store.getState().ModelCheckreducer.tableData,
        }
        store.subscribe(this.handleStoreChange)
    }
  
    componentDidMount(){
        // let id = store.getState().ModelTrainingreducer.tableData[0].originID
        _modelList(1)
    }
    

    handleStoreChange = ()=>{
        this.setState({
            dataSource:store.getState().ModelCheckreducer.tableData,
            dataType:store.getState().ModelTrainingreducer.dataType,
        })
    }

    render(){
        const {dataSource,modelList} = this.state
        return(
            <div>
                    <Table  className = "table1" size="small"  bordered ={true} columns={tableConfig} dataSource={dataSource} 
                    pagination = {false}
                    />
            </div>
        );
    }
}