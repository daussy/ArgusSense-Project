import React,{Component} from 'react';
// store
import store from '@/pages/Store/index'
// style
import './style.scss'
// antd
import { Table ,Pagination,Divider} from 'antd';

// table
import tableColumns01 from './Table1/tableConfig'
import vibtableColumns02 from './vibration/Table2/tableConfig'
// 方法
import {_imgModelList} from './component/functionList'
import {_vibModelValuateList} from './vibration/component/functionList'
import ChooseModel from './vibration/component/ChooseModel'
export default class Modelvaluate extends Component {
    constructor(props){
        super(props)

        this.state={
            dataType:store.getState().ModelTrainingreducer.dataType,
            modelList :store.getState().Modelvaluatereducer.imageModelTraining.modelTrainingTable,
            vibModelValuateList:store.getState().Modelvaluatereducer.vibModelValuateList.modelList,
            vibModelValuatetotalCount:store.getState().Modelvaluatereducer.vibModelValuateList.totalCount,
           
        }
        store.subscribe(this.handleStoreChange)
    }
    componentDidMount(){
        const {dataType} = this.state;
        if(dataType === 1){
            _imgModelList(1)
        }else{
            _vibModelValuateList(1)
        }
    }
    handleStoreChange = ()=>{
        this.setState({
            modelList :store.getState().Modelvaluatereducer.imageModelTraining.modelTrainingTable,
            dataType:store.getState().ModelTrainingreducer.dataType,
            vibModelValuateList:store.getState().Modelvaluatereducer.vibModelValuateList.modelList,
            vibModelValuatetotalCount:store.getState().Modelvaluatereducer.vibModelValuateList.totalCount,
        })
    }

     
    pageonChange=(page, pageSize)=>{
        _imgModelList(page)
    }
 
      vibModelValuatepageonChange=(page,pageSize)=>{
        _vibModelValuateList(page)
      }



    render(){
        const {modelList,dataType,vibModelValuatetotalCount,vibModelValuateList} = this.state
        return(
            <div>
                {
                    dataType === 1 ? <div> 
                        {/* 图像数据 */}
                    <Table  className = "table1" size="small"  bordered ={true} columns={tableColumns01} dataSource={modelList} 
                    pagination = {false}
                    />
                     <Pagination
                        style = {{marginTop:"10px"}}
                        onChange = {this.pageonChange}
                        showSizeChanger
                        defaultCurrent={1}
                        total={100}
                        />
                    </div>:<div>
                        {/* 振动数据 */}
                    <ChooseModel ></ChooseModel>
                    <Divider orientation="left">已评估模型</Divider>
                     <Table  className = "table2" size="middle"  
                    bordered ={true} columns={vibtableColumns02} dataSource={vibModelValuateList} />
                     <Pagination
                        style = {{marginTop:"10px"}}
                        onChange = {this.vibModelValuatepageonChange}
                        showSizeChanger
                        defaultCurrent={1}
                        total={vibModelValuatetotalCount}
                        />
                    </div>
                }
                    
            </div>
        );
    }
}
