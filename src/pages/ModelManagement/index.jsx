import React,{Component} from 'react';
// antd
import { Tabs } from 'antd';

// component
import ModelTable from './component/ModelTable';

// style
import './style.scss'

// data-config
import { imgColumns,sequenceColumns,vibColumns } from './component/data.config';

// function
import {getModelList,_vibmodelList,_vibModelDelete,_modelDelete,_vibModelReName} from './component/functionList';

const { TabPane } = Tabs;

export default class ModelManagement extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgModel:[],
            imgTotal:0,
            sequenceTotal:0,
            sequenceModel:[],
            vibModel:[],
            vibTotal:0,
            visible:false,
            totalCount:0,
            selectType:"1", //默认振动数据
            dataSource:[],
            // column:vibColumns,
            selectedRowKeys:"",//表格选择的id
            selectedRows:"",//表格选择的数据
        }
        // this.onSelectModel = this.onSelectModel.bind(this); // 确认模型选择;
        this.onModelDelete = this.onModelDelete.bind(this); //删除模型
        this.onPageChange  = this.onPageChange.bind(this); //表格翻页
        this.onModelRename = this.onModelRename.bind(this); //模型重命名
    }

    componentDidMount(){
        let imgModel,sequenceModel,vibModel;
        imgModel =  getModelList(1,0); //查询图像数据模型 0
        vibModel = _vibmodelList(1); // 查询振动数据模型  1
        sequenceModel = getModelList(1,2); //查询时序数据模型  2
        this.setState({
           imgModel:imgModel.pageList,
           imgTotal:imgModel.totalCount,
           sequenceModel:sequenceModel.pageList,
           sequenceTotal:sequenceModel.totalCount,
           vibModel:vibModel.pageList,
           vibTotal : vibModel.totalCount,
        })
    }

/** 表格翻页 */
    onPageChange(page,type){
        // console.log("jfoweijfowjeofjowe");
        let imgModel,sequenceModel,vibModel;
        switch(type){
          
            case 0 :
                imgModel =  getModelList(page,0); //查询图像数据模型 0
                this.setState({
                    imgModel:imgModel.pageList,
                    imgTotal:imgModel.totalCount,
                })
                break;
            case 1:
                vibModel = _vibmodelList(page); // 查询振动数据模型  1
                this.setState({
                    vibModel:vibModel.pageList,
                    vibTotal : vibModel.totalCount,
                })
                break;
            case 2:
                sequenceModel = getModelList(page,2); //查询时序数据模型  2
                this.setState({
                    sequenceModel:sequenceModel.pageList,
                    sequenceTotal:sequenceModel.totalCount,
                })
                break;
            default:
                imgModel =  getModelList(page,0); //查询图像数据模型 0
                this.setState({
                    imgModel:imgModel.pageList,
                    imgTotal:imgModel.totalCount,
                })
        }
    }

/** 删除模型 */
    onModelDelete(id,name,type){
        let flag = false;
        if(type == 1){
           flag =  _vibModelReName(id,name);
        }else{
           flag =  _modelDelete(id);
        };
        if(flag){
            this.onPageChange(1,type)
        }
        
    }
/** 模型重命名 */
    onModelRename(id,name,type){
        let flag = false;
        if(type == 1){
           flag =  _vibModelReName(id,name);
        }else{
        //    flag =  _modelDelete(id);
        };
        if(flag){
            this.onPageChange(1,type)
        }
    }

    render(){
        // const {...arg} = this.state;
        const arr = [
            {
                title:"图像模型" ,
                key:"0",
                dataSource : this.state.imgModel,
                totalCount:this.state.imgTotal,
                columns:imgColumns,
                PageChange:(page)=>{
                    this.onPageChange(page,0)
                },
                ModelDelete:(id)=>{
                    this.onModelDelete(id,0)
                },
                ModelRename:(id,name)=>{
                    this.onModelRename(id,name,0)
                },
                
            },
            {
                title:"振动模型" ,
                key:"1",
                dataSource : this.state.vibModel,
                totalCount:this.state.imgTotal,
                columns:vibColumns,
                PageChange:(page)=>{
                    this.onPageChange(page,1)
                },
                ModelDelete:(id)=>{
                    this.onModelDelete(id,1)
                },
                ModelRename:(id,name)=>{
                    this.onModelRename(id,name,1)
                },
            },
            {
                title:"时序模型" ,
                key:"2",
                dataSource : this.state.sequenceModel,
                totalCount:this.state.vibTotal,
                columns:sequenceColumns,
                PageChange:(page)=>{
                    this.onPageChange(page,2)
                },
                ModelDelete:(id)=>{
                    this.onModelDelete(id,2)
                },
                ModelRename:(id,name)=>{
                    this.onModelRename(id,name,2)
                },
            }
        ]
        return(
            <div>
            <Tabs defaultActiveKey="0" className = {"model-management"}>
                {
                    arr.map((item,index)=>(
                        <TabPane tab={item.title} key={item.key}>
                            <ModelTable {...item}></ModelTable>
                        </TabPane>
                    ))
                }
            </Tabs>
            </div>
        );
    }
}