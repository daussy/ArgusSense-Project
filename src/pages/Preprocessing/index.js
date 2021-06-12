import React,{Component} from 'react'
// antd
import { Table } from 'antd';
// columns
import sequencetableColumns from './component/sequence/tableConfig'

// store
import store from '@/pages/Store/index'

// style
import './style.scss'
import vibrationtableColumns from './component/vibration/tableConfig';
export default class Preprocessing extends Component{
    constructor(props){
        super(props)

        this.state ={
            dataSource:store.getState().Preprocessingreducer.preProcessingTable,
            dataType:store.getState().Preprocessingreducer.dataType,
        }
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = ()=>{
        this.setState({
            dataSource:store.getState().Preprocessingreducer.preProcessingTable,
            dataType:store.getState().Preprocessingreducer.dataType,
        })
    }

    render(){
        const {dataSource,dataType} = this.state
        let  tableColumns = sequencetableColumns 
        if(dataType == 2){
            tableColumns = sequencetableColumns
        }else{
            tableColumns = vibrationtableColumns
        }
        return(
            <div>
                <Table  className = "table1" size="middle"  bordered ={true} columns={tableColumns} dataSource={dataSource} />
            </div>
        )
    }
} 
