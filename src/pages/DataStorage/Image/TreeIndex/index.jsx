import React,{Component} from 'react'
// antd
import { Tree ,Modal,Button,Space,message,Input  } from 'antd';
import { DownOutlined } from '@ant-design/icons';

// store
import store from '@/pages/Store/index'

// style
import '../index.scss'

// 导入方法
import {_onSelect,_newTreeNode,_onEditFinish,_deleteTreeNode} from './functionList'

class TreeIndex extends Component{

  constructor(props){
    super(props)

    this.state={
      dataSource:store.getState().DataStoragereducer.ImageDataConfig,  //树列表的数据
      selectedKey:'',//选择的树节点的key
      title:"",//选择的树节点的名称
      isModalVisible:false,
      inputValue:"", //输入框值
    }
    store.subscribe(this.handleStoreChange);

  }

  // 获取变化的树节点
  handleStoreChange=()=>{
    this.setState({
      dataSource: store.getState().DataStoragereducer.ImageDataConfig,
    })

  }

  // 展开节点
  onExpand = () => {
    // console.log('Trigger Expand');
  };

  // 左边点击触发
   onSelect = (selectedKeys, info) => {
    // console.log('selected', selectedKeys, info);
    _onSelect(selectedKeys[0],info.node.title)
    this.setState({
      selectedKey:selectedKeys[0],
      title:info.node.title
    })
  };
  
  // 右击触发
  onRightClick = ({event, node}) =>{
    // console.log('onrightclick',{event, node},node.key,node.active)
    this.setState(
      {
        isModalVisible:true,
        selectedKey:node.key,
        title:node.title,
      }
    )
  }

  // 新增子节点
  newTreeNode = ()=>{
    if(this.state.selectedKey !=''){
      _newTreeNode(this.state.selectedKey)
      // 调用成功 关闭
      this.onClose();
    }else{
      message.error({
        content: '新增错误！',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    }
  }
  
  // 修改节点名称
  onEditFinish = ()=>{
    if(this.state.selectedKey !=''){
      if(this.state.inputValue!=''){

        _onEditFinish(this.state.selectedKey,this.state.dataSource,this.state.inputValue)
      // 调用成功 关闭
      this.onClose();
      }

    }else{
      message.error({
        content: '修改节点名称错误！',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    }
  }
  
  // 删除节点
  deleteTreeNode= ()=>{
    if(this.state.selectedKey !=''){
      _deleteTreeNode(this.state.selectedKey,this.state.dataSource)
      // 调用成功 关闭
      this.onClose();
    }else{
      message.error({
        content: '删除节点错误！',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    }
  }
  
  // modal关闭
  onClose = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  // 输入框
  onChange =(e)=>{
    let inputValue = e.target.value
    this.setState({
      inputValue:inputValue
    })
  }

  render(){
    const {dataSource,isModalVisible,title}  = this.state;
    return (
      <div>
      <Tree
          showLine
          switcherIcon={<DownOutlined />}
          onSelect={this.onSelect}
          treeData={dataSource}
          onExpand={this.onExpand}
          onRightClick ={this.onRightClick}
          />
      <Modal
        title="节点操作" 
        visible ={isModalVisible}
        width = {320}
        onCancel = {this.onClose}
        footer={[
          <Button type = "normal" onClick={this.onClose}>
            关闭
          </Button>,
        ]}
      >
        <Space style = {{marginLeft:"20px",marginLeft:"20px",width:"300px",marginBottom:"50px"}}>
          <Input placeholder = {title} onChange = {this.onChange} ></Input>
           <Button  className = {"ModelBtn"} onClick={this.onEditFinish}>
            重命名
          </Button>
        </Space>
        
         <Space style = {{marginLeft:"20px",marginLeft:"20px",width:"300px"}}>
          <Button className = {"ModelBtn"} onClick={this.newTreeNode}>
            新增
          </Button>
          <Button  className = {"deleteBtn"} onClick={this.deleteTreeNode}>
            删除
          </Button>
       
         </Space>
         
   
      </Modal>
      </div>

   
   
    );
  }
} 

export default TreeIndex;