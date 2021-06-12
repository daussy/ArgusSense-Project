// antd
import {Space} from 'antd'

import PreProcessing from './PreProcessing'
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
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '结果文件',
    dataIndex: 'resultFile',
    key: 'resultFile',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <PreProcessing   onClick={( )=>{
            return record;
         }}></PreProcessing>
</Space>
      ),
    },
  ];
export default tableColumns;