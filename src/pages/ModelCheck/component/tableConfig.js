// antd
import {Space} from 'antd'

// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'
import ModelCheck from '../component/ModelCheck'
// style
import '../style.scss'
 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
  {
    title: '模型名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '校验精度',
    dataIndex: 'accuracy',
    key: 'accuracy',
  },
    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <ModelCheck   onClick={( )=>{
            return record;
         }}></ModelCheck>
      </Space>
      ),
    },
  ];
export default tableColumns;
