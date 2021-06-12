import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

import DetailMsg from '../component/DetailMsg'
// 导入方法
import {_vibdeleteModel,_vibmodelTraining} from '../component/functionList'

// style
import '../../style.scss'
 const tableColumns = [
  {
    title: '模型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '训练批次',
    dataIndex: 'minNum',
    key: 'minNum',
  },
  {
    title: '学习率',
    dataIndex: 'lr',
    key: 'lr',
  },
  {
    title: '迭代次数',
    dataIndex: 'iterNum',
    key: 'iterNum',
  },
  {
    title: '训练状态',
    dataIndex: 'state',
    key: 'state',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => {
        if(record.state === '已训练'){
          return(
              <Space size="middle">
                <DetailMsg buttonType = {'normal'} buttonGhost= {false} onClick = {
                  ()=>{
                    return record;
                  }
                }></DetailMsg>
                <Button size ="small"   className = "normalBtn" disabled onClick = {()=>{
                  _vibmodelTraining(record.id)
                }} >开始训练</Button>
                <Button  type ="danger"  size ="small" className = "deleteBtn"
                onClick={( )=>{
                  _vibdeleteModel(record.id)
                }}>删除模型</Button>
              </Space>
          )
        }else{
          return(
            <Space size="middle">
              <DetailMsg buttonType = {'normal'} buttonGhost= {false} onClick = {
                ()=>{
                  return record;
                }
              }></DetailMsg>
              <Button size ="small"   className = "normalBtn" onClick = {()=>{
                _vibmodelTraining(record.id)
              }} >开始训练</Button>
              <Button  type ="danger"  size ="small" className = "deleteBtn"
              onClick={( )=>{
                _vibdeleteModel(record.id)
              }}>删除模型</Button>
            </Space>
        )
        }
    
    },
    },
  ];
export default tableColumns;
