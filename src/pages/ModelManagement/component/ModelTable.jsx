import React,{Component} from 'react';

// antd
import {Table,Pagination,Button,Input,Modal,message} from 'antd';

// style 
import "../style.scss"
const { Column, ColumnGroup } = Table;
export default class ModelTable extends Component {
    constructor(props){
        super(props)

        this.state= {
            selectedRowKeys:"",//表格选择的id
            selectedRows:"",//表格选择的数据
            visible:false,
            inputName:"",
        }
        this.onSelectChange = this.onSelectChange.bind(this);  // 表格选择
        this.pageonChange = this.pageonChange.bind(this); // 表格翻页
        this.reName = this.reName.bind(this); //模型重命名
        this.deleteModel = this.deleteModel.bind(this); //删除模型
        this.onOpen = this.onOpen.bind(this); //打开窗口
        this.onClose = this.onClose.bind(this); //关闭窗口
        this.InputChange = this.InputChange.bind(this); //输入改变
    }

/** 表格选择 */
    onSelectChange(selectedRowKeys,selectedRows){
        this.setState({ selectedRowKeys ,selectedRows});
        // this.props.SelectChange(selectedRows) ; 
    }

/** 表格翻页 */
    pageonChange(page){
        this.props.PageChange(page);
    }

/** 删除模型 */
    deleteModel(text,record){
        this.props.ModelDelete(record.id);
    }
/** 重命名模型 */
    reName(){
        if(this.state.inputName == ""){
            message.error("请输入模型名称");
        }else{
            this.props.ModelRename(this.state.renameModelID,this.state.inputName);
            this.onClose();
        }
    }

/** 打开窗口 */
    onOpen(text, record){
        console.log(record);
        this.setState({
            visible:true,
            renameModelID:record.id,
        })
    }

/** 关闭窗口 */
    onClose(){
        // console.log('onclose');
        this.setState({
            visible:false,
        })
    }
/** 输入改变 */
    InputChange(value){
        console.log(value);
        this.setState({
            inputName:value
        })
    }

    render(){
        const {selectedRowKeys,visible,inputName} = this.state;

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return(
            <div>
                <Table 
                    dataSource = {this.props.dataSource}
                    // columns = {this.props.columns}
                    rowSelection={{
                        ...rowSelection,
                        // type:"radio"
                    }}
                    rowKey = {"id"}
                    pagination = {false}
                    bordered ={false}
                    >
                    {this.props.columns.map((item,index)=>{
                        return(
                            <Column title={item.title} dataIndex={item.dataIndex} key={item.key} />
                        )
                    })}
                    <Column title="操作" dataIndex="action" key="action"
                         render={(text, record) => (
                            <>
                              <Button size = {"small"}   className ="normalBtn"  onClick = {()=>{this.onOpen(text, record)} }>重命名</Button>
                              <Button size = {"small"}  type="danger" className ="deleteBtn"  onClick = {()=>{this.deleteModel(text, record)} }>删除模型</Button>
                            </>
                          )}
                    ></Column>
                    
                </Table>
                <Pagination
                    onChange = {this.pageonChange}
                    showSizeChanger
                    defaultCurrent={1}
                    total={this.props.totalCount}
                ></Pagination>
                <Modal
                    visible ={visible}
                    onCancel = {this.onClose}
                    title= {"模型重命名"}
                    footer = {
                        <Button onClick={this.reName}  className ="normalBtn" > 重命名</Button>
                    }
                >
                    <Input  onChange = {this.InputChange} width ={200}/> 
                            {/* 1241654 */}
                </Modal>
            </div>
        )
    }
}