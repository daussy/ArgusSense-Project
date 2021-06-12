// 导入方法
// import {_LinkToList} from './TabTable/components/functionList'

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
    
  ];
export default tableColumns;
