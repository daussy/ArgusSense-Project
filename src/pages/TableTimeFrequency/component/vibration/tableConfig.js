// antd
import {Space} from 'antd'

import Exchange from './Exchange'


const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
  {
    title: '转换状态',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: '处理时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '小波基函数',
    dataIndex: 'func',
    key: 'func',
  },
  {
    title: '滑动窗大小',
    dataIndex: 'windowSize',
    key: 'windowSize',
  },  {
    title: '时频图像张数',
    dataIndex: 'picNum',
    key: 'picNum',
  },  {
    title: '采集频率',
    dataIndex: 'frequency',
    key: 'frequency',
  },
  {
    title: '操作人',
    dataIndex: 'importer',
    key: 'importer',
  },

    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <Exchange   onClick={( )=>{
            return record;
         }}></Exchange>
      </Space>
      ),
    },
  ];

  export default tableColumns;