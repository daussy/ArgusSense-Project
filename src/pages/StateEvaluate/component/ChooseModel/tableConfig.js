// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'

 const tableColumns = [
  {
    title: '数据集名称',
    dataIndex: 'datasetName',
    key: 'datasetName',
  },
  {
    title: '输出模型名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '评估状态',
    dataIndex: 'evaluateStatus',
    key: 'evaluateStatus',
  }, {
    title: '创建时间',
    dataIndex: 'updateTime',
    key: 'updateTime',
  },
  {
    title: '评估指标',
    dataIndex: 'evlResult',
    key: 'evlResult',
  },
    
  ];
export default tableColumns;
