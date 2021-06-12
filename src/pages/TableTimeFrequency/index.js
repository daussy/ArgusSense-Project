import React,{Component} from 'react'
// antd
import { Table } from 'antd';
// columns
// import sequencetableColumns from './component/sequence/tableConfig'
import vibrationtableColumns from './component/vibration/tableConfig';

// store
import store from '@/pages/Store/index'

// style
import './style.scss'
export default class TableTimeFrequency extends Component{
    constructor(props){
        super(props)

        this.state ={
            dataSource:store.getState().TableTimeFrequencyreducer.taskTable,
            // dataType:store.getState().TableTimeFrequencyreducer.preProcessingTable,
        }
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange = ()=>{
        this.setState({
            dataSource:store.getState().TableTimeFrequencyreducer.taskTable,
            // dataType:store.getState().TableTimeFrequencyreducer.preProcessingTable,
        })
    }

    render(){
        const {dataSource,dataType} = this.state
        let  tableColumns = vibrationtableColumns 
        return(
            <div>
                <Table  className = "table2" size="middle"  bordered ={true} columns={tableColumns} dataSource={dataSource} />
            </div>
        )
    }
} 
