// antd
import {Space} from 'antd'

// 导入组件
import CheckDialog from './CheckDialog'
import LifePrediction from './LifePrediction'
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
    title: '步长',
    dataIndex: 'step',
    key: 'step',
  },

    {
      title: '操作',
      key: 'action',
      render: (text,record) => (
        <Space size="middle">
        <LifePrediction   onClick={( )=>{
            return record;
         }}></LifePrediction>
           <CheckDialog   onClick={( )=>{
            return record;
         }}></CheckDialog>
      </Space>
      ),
    },
  ];
export default tableColumns;
