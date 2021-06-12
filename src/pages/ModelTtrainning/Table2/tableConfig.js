import {Component} from 'react'
// antd
import {Button,Space} from 'antd'

import DeleteModel from '../component/DeleteModel'
// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'

// style
import '../style.scss'
 const tableColumns = [
  {
    title: '模型',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '神经元个数',
    dataIndex: 'neuronsNumber',
    key: 'neuronsNumber',
  },
  {
    title: '网络层数',
    dataIndex: 'netNum',
    key: 'netNum',
  },
  {
    title: 'dropOut',
    dataIndex: 'dropOut',
    key: 'dropOut',
  },
  {
    title: '迭代次数',
    dataIndex: 'numEpochs',
    key: 'numEpochs',
  },
  {
    title: '学习率',
    dataIndex: 'learningRate',
    key: 'learningRate',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">

        <DeleteModel   onClick={( )=>{
            return record;
         }}></DeleteModel>

       
</Space>
      ),
    },
  ];
export default tableColumns;
