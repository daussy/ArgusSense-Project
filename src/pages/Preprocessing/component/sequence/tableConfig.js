// antd
import {Space} from 'antd'

import PreProcessing from './PreProcessing'
import CheckDialog from './CheckDialog'
// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'

// style
import '../../style.scss'
 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
  {
    title: '预处理算法',
    dataIndex: 'algorithm',
    key: 'algorithm',
  },
  {
    title: '预处理状态',
    dataIndex: 'prestate',
    key: 'prestate',
  },
  {
    title: '处理时间',
    dataIndex: 'operatTime',
    key: 'operatTime',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <CheckDialog
           onClick={( )=>{
            return record.originID;
         }}

        text ={'查看原始数据'}
        
        ></CheckDialog>
        <PreProcessing   onClick={( )=>{
            return record;
         }}></PreProcessing>
        
        <CheckDialog
           onClick={( )=>{
            return record.resultID;
         }}

        text ={'查看结果数据'}
        
        ></CheckDialog>
       
</Space>
      ),
    },
  ];
export default tableColumns;

