
const  vibColumns = [
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
  
  ]
  
  const sequenceColumns = [
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
  
  const imgColumns = [
    {
      title: '模型',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '分类器学习率',
      dataIndex: 'classifierLr',
      key: 'classifierLr',
    },
    {
      title: 'epochLength',
      dataIndex: 'epochLength',
      key: 'epochLength',
    },
    {
      title: '迭代次数',
      dataIndex: 'numEpochs',
      key: 'numEpochs',
    },
    {
      title: 'rpn学习率',
      dataIndex: 'rpnLr',
      key: 'rpnLr',
    }
  ];
  
  export {imgColumns,sequenceColumns,vibColumns };