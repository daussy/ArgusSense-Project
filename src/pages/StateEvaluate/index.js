import React,{Component} from 'react';
// store
import store from '@/pages/Store/index'
// style
import './style.scss'
// antd
import { Table ,Pagination} from 'antd';

// 组件
import ChooseModel from './vibration/component/ChooseModel'
import ImportZip from './component/ImportZip'
// table
import tableColumns01 from './Table1/tableConfig'
import tableColumns02 from './Table2/tableConfig'
import vibtableColumns01 from './vibration/Table1/tableConfig'
import vibtableColumns02 from './vibration/Table2/tableConfig'

// 方法
import {_vibTaskpageonChange} from './vibration/component/functionList' 
import {_imgStateEvaluateResult} from './component/functionList'
export default class StateEvaluate extends Component{
    constructor(props){
        super(props)

        this.state={
            dataType:store.getState().ModelTrainingreducer.dataType,
            task:store.getState().StateEvaluatereducer.imageStateValuate.task,
            imgResultTotal:store.getState().StateEvaluatereducer.imageStateValuate.totalCount,
            resultList:store.getState().StateEvaluatereducer.imageStateValuate.resultList,
            vibtaskList:store.getState().StateEvaluatereducer.vibStateValuate.taskList,
            vibresultList:store.getState().StateEvaluatereducer.vibStateValuate.resultList,
            taskTotalCount:store.getState().StateEvaluatereducer.vibStateValuate.taskTotalCount,
            
        }
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = ()=>{
        this.setState({
            imgResultTotal:store.getState().StateEvaluatereducer.imageStateValuate.totalCount,
            resultList:store.getState().StateEvaluatereducer.imageStateValuate.resultList,
            dataType:store.getState().ModelTrainingreducer.dataType,
            task:store.getState().StateEvaluatereducer.imageStateValuate.task,
            vibtaskList:store.getState().StateEvaluatereducer.vibStateValuate.taskList,
            vibresultList:store.getState().StateEvaluatereducer.vibStateValuate.resultList,
            taskTotalCount:store.getState().StateEvaluatereducer.vibStateValuate.taskTotalCount,
        })
    }

    componentDidMount(){
        _vibTaskpageonChange(1)
    }
      
    pageonChange=(page, pageSize)=>{
        // 结果列表的页数改变
        _imgStateEvaluateResult(page)
    }

    vibTaskpageonChange=page=>{
        _vibTaskpageonChange(page)
    }


    render(){
        const {resultList,dataType,task,vibtaskList,vibresultList,taskTotalCount,imgResultTotal} = this.state
        // console.log(resultList,'resultList','task',task);
        // console.log(vibtaskList,vibresultList);
        return(
            <div>
                {
                    dataType == 1 ? <div> 
                        {/* 图像数据 */}
                    <ImportZip ></ImportZip>
                    <Table  className = "table1" size="middle"  bordered ={true} columns={tableColumns01} dataSource={task} 
                    pagination = {false}
                    />
                    <Table  className = "table2" size="middle"  bordered ={true} columns={tableColumns02} dataSource={resultList} 
                      pagination = {false}
                    />
                     <Pagination
                        style = {{marginTop:"10px"}}
                        onChange = {this.pageonChange}
                        showSizeChanger
                        defaultCurrent={1}
                        total={10}
                        defaultPageSize = {3}
                        />
                    </div>:<div>
                        {/* 振动数据 */}
                    <ChooseModel ></ChooseModel>
                    
                    <Table  className = "table2" size="middle"  
                    bordered ={true} columns={vibtableColumns01} dataSource={vibtaskList} pagination ={false} />
                    <Pagination
                        style = {{marginTop:"10px"}}
                        onChange = {this.vibTaskpageonChange}
                        showSizeChanger
                        defaultCurrent={1}
                        total={taskTotalCount}
                        />
                     <Table  className = "table2" size="middle"  
                    bordered ={true} columns={vibtableColumns02} dataSource={vibresultList} pagination ={false} />
                   
                    </div>
                }
                    
            </div>
        );
    }
}
