import {Component} from 'react';

// antd
// import {Table,Tag,Pagination,Divider} from 'antd';
import { Pagination, Table, Button, Cascader,Modal} from 'antd';
// style
// import './style.scss'

import {getModelList,_vibmodelList} from './functionList'

import {imgColumns,sequenceColumns,vibColumns } from './functionList'
export default class ModelChoose extends Component {
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
            column:vibColumns,
            selectedRowKeys:"",//表格选择的id
            selectedRows:"",//表格选择的数据
        }

        this.onSelectModel = this.onSelectModel.bind(this); // 确认模型选择;
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
            dataSource:vibModel.pageList,
            totalCount: vibModel.totalCount,

         },()=>{
            // this.createDataSource()

         })

        //  console.log(sequenceModel,'sequenceModel');
        //  console.log('imgModel',imgModel);
        //  console.log('vibModel',vibModel);
    }
        /**
     * 模型type选择
     */
         optionOnchange= (value)=>{

            this.setState({
                selectType:value[0]
            },()=>{
                this.createDataSource()
            })
         }


    createDataSource= () =>{
        const {selectType,imgModel,vibModel,sequenceModel,imgTotal,vibTotal,sequenceTotal }= this.state;
        let dataSource ,totalCount,column;
        console.log(selectType);
        switch(selectType){
            case "0" :
                dataSource = imgModel;
                totalCount = imgTotal;
                column = imgColumns;
                break;
            case "1":
                dataSource = vibModel;
                totalCount = vibTotal;
                column = vibColumns;
                break;
            case "2":
                dataSource = sequenceModel;
                totalCount = sequenceTotal;
                column = sequenceColumns;
                break;
            default:
                dataSource = vibModel;
                totalCount = vibTotal;
                column = vibColumns;

        }

        this.setState({
            totalCount,
            dataSource,
            column
        })

    }

    pageonChange= (page)=>{
        const {selectType} = this.state;
        let e;
        switch(selectType){
          
            case "0" :
                // let imgModel =  getModelList(page,0); //查询图像数据模型 0
                 e =  getModelList(page,0).pageList;
                this.setState({
                    dataSource: e
                })
                break;
            case "1":
                // let vibModel = ; // 查询振动数据模型  1
                 e =  _vibmodelList(page).pageList;

                this.setState({
                    dataSource:e
                })
                break;
            case "2":
                // let sequenceModel = getModelList(page,2); //查询时序数据模型  2
                 e = getModelList(page,2).pageList;
                this.setState({
                    dataSource: e
                })
                break;
            default:
                // let vibModel = _vibmodelList(page); // 查询振动数据模型  1
                 e =  _vibmodelList(page).pageList;
                this.setState({
                    dataSource:e
                })
        }

    }

         /**打开窗口 */
         open = ()=>{
            this.setState({
                visible:true,
            })
        }
   
            // 关闭弹窗
       onClose = () => {
           this.setState({
           visible: false,
           });
       };

    /**
   * 表格选择
   */
  onSelectChange = (selectedRowKeys,selectedRows) => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    // console.log(selectedRows,'selectedRows');
    this.setState({ selectedRowKeys ,selectedRows});
  };

  /**确认选择 */
  onSelectModel(){
      this.props.onSelectModel(this.state.selectedRows)
      this.onClose()
  }
       
    render(){
      
        const {visible,dataSource,totalCount,column,selectedRowKeys} = this.state;
          
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
        const modelOptions = [
            {
                value:"2",
                label:"时序模型"
            },{
                value:"0",
                label:"图像模型"
            },{
                value:"1",
                label:"振动模型"
            }
        
        ]

        // console.log(dataSource,column,this.state.selectType);


        return(
            <div>
                <Button onClick = {this.open}>更换设备模型</Button>
                <Modal
                    title="更换设备模型" 
                    visible ={visible}
                    // width = {320}
                    // height = {600}
                    // destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={<Button onClick ={this.onSelectModel}>确认选择</Button>}
                >
            <Cascader options={modelOptions} onChange={this.optionOnchange} defaultValue = {["振动模型"]} style ={{width:"150px"}}/>
                <Table  
                // className = "model-table" size="middle"  
                //     rowClassName = {"model-table-row"}
                    rowSelection={{
                        ...rowSelection,
                        type:"radio"
                    }}
                    rowKey = {"id"}
                    pagination = {false}
                    bordered ={false} columns={column} dataSource={dataSource} />
                    <Pagination
                    className = 'model-pagination'
                    // simple 
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={totalCount}
                    />
                </Modal>
            </div>

        )
    }
}


