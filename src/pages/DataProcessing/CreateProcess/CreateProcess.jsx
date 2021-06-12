import React,{Component} from 'react';

// antd
import { Transfer ,Button,Space,message} from 'antd';
import {CloseCircleTwoTone} from '@ant-design/icons';

// style
import './style.scss'

import { Link } from 'react-router-dom';


// 导入方法
import {_saveCard,_deleteCard} from '../component/functionList'
import store from '../../Store';
const selectList = 
  [
    {
      key: 1,
      title: '数据预处理',
      description: '数据预处理',
    },
    {
      key: 2,
      title: '特征提取',
      description: '特征提取',
    },
    {
      key: 3,
      title: '特征筛选',
      description: '特征筛选',
    },
    {
      key: 4,
      title: '时频图像转换',
      description: '时频图像转换',
    },
    {
      key: 5,
      title: '标签管理',
      description: '标签管理',
    },
    {
      key: 6,
      title: '数据集构建',
      description: '数据集构建',
    },
    {
      key: 7,
      title: '模型训练',
      description: '模型训练',
    },
    {
      key: 8,
      title: '模型校验',
      description: '模型校验',
    },
    {
      key: 9,
      title: '寿命预测',
      description: '寿命预测',
      
    },
    {
      key: 10,
      title: '状态评估',
      description: '状态评估',
    },
    {
      key: 11,
      title: '算法管理',
      description: '算法管理',
    },
    {
      key: 12,
      title: '模型评估',
      description: '模型评估',
    },
  ]

/**
 * message
 */
function _message(flag,mes){
  if(flag){
      message.success(`${mes}成功`)

  }else{
      message.error(`${mes}失败`)
  }
}

export default class CreateProcess extends Component{
    constructor(props){
        super(props)

        this.state={
            targetKeys: store.getState().DataProcessingreducer.targetKeys,
            selectedKeys: [],
            disabled: false,
            // flag:'',
        }
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange=()=>{
      this.setState({
        targetKeys: store.getState().DataProcessingreducer.targetKeys,
        cardid:store.getState().DataProcessingreducer.itemid,
        // flag:store.getState().DataProcessingreducer.flag
      })
    }
    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
    
        console.log('targetKeys: ', nextTargetKeys);
        // console.log('moveKeys: ', moveKeys);
      };
    
    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
    };
    // 新建
    onNewCard =()=>{
      let executList = []
      this.state.targetKeys.map((seleted)=>{
        selectList.map((item,index)=>{
          if(item.key ===seleted){
            executList.push({
              "title":item.title,
              "description":item.description
            })
          }
        })
      })
      // console.log('executList',executList)
     
      let flag = _saveCard(executList)
      _message(flag,'新建')
    }
    // 保存
    onSave =()=>{
      // 先删除再新建
      let id = store.getState().DataProcessingreducer.itemid
      _deleteCard(id)
      let executList = []
      this.state.targetKeys.map((seleted)=>{
        selectList.map((item,index)=>{
          if(item.key ===seleted){
            executList.push({
              "title":item.title,
              "description":item.description
            })
          }
        })
      })
      // console.log('executList',executList)
     
      
      let flag = _saveCard(executList)
      _message(flag,'保存')

    }
    
    // 生成item
    renderItem = item => {
        const customLabel = (
          <div className = "card-item">
            <span className="custom-item">
              {item.title} 
            </span>
          </div>
         
        );
        return {
          label: customLabel, // for displayed item
          value: item.title, // for title and filter matching
        };
        
    }

    render(){
        const { targetKeys, selectedKeys } = this.state;
        // console.log('targetKeys',targetKeys)
        return(
            <>
            <Space style = {{marginBottom:"20px"}}>
            <Link to='/Devproject/DataProcessing' ><CloseCircleTwoTone twoToneColor="#284978"  style = {{fontSize:"30px"}} /></Link>
            <Link to='/Devproject/DataProcessing' >
              {
                targetKeys.length === 0 ?   <Button className = "normalBtn" onClick = {this.onNewCard}>新建</Button> :  <Button className = "normalBtn" onClick = {this.onSave}>保存</Button> 
              }
            </Link>
             
          
            <Button className = "normalBtn" onClick = {this.start}>开始</Button>
            </Space>
 
            <Transfer
              dataSource={selectList}
              titles={['选择列表', '执行顺序']}
              targetKeys={targetKeys}
              selectedKeys={selectedKeys}
              onChange={this.handleChange}
              onSelectChange={this.handleSelectChange}
              render={this.renderItem}
              operations ={['进入选择列表', '返回执行顺序']}
              listStyle = {listStyle}
              style={{ marginBottom: 16 }}
            />
          </>
        )
    }
} 

const listStyle = {
  width :"300px",
  height:"500px",
  fontSize:"20px"
}