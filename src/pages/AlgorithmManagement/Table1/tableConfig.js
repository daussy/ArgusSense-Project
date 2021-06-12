import {Component} from 'react'
// antd
import {Space,Button} from 'antd'

// 导入组件
import CreateModels from '../component/CreateModels'
// 导入方法
// import {_deleteLabel} from '../component/functionList'
// style
import '../style.scss'


 const tableColumns = [
  {
    title: '算法名称',
    dataIndex: 'algorithm',
    key: 'algorithm',
  },
  {
    title: "处理任务",
    dataIndex: 'task',
    key: 'task',
  },
  {
    title: "模型大小",
    dataIndex: 'modelSize',
    key: 'modelSize',
  },
  {
    title: "输入数据格式",
    dataIndex: 'inputFormat',
    key: 'inputFormat',
  }, {
    title: "修改时间",
    dataIndex: 'modifiedTime',
    key: 'modifiedTime',
  },

    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
          {/* 查看图片 */}
          <CreateModels  onClick={( )=>{
            return record;
         }}>构建模型</CreateModels>
         
      </Space>
      ),
    },
  ];
export default tableColumns;

/**
 * 组件实现如下功能：
 * 1. 算法管理
 * 2. 构建上述模型（由组件实现）
 */


