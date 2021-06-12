import $ from 'jquery'
import {hostPort} from '@/Common'

// store
import store from '@/pages/Store/index'



export function getModelList(page,method){
    let returnData
    $.ajax({
      type:"post",
      url:hostPort+"equip/modal/selectPage",
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      async:false,
      data:JSON.stringify({
        "pageNo": page,
        "pageSize": 10,
        "queryParameter": {
          "method": method
        }
      }),
      success:function(res){
        if(res.flag){
         returnData=res.data
    //      const action ={
    //       type:'sequenceModelList',
    //       returnData,
    //     }
    //   store.dispatch(action)
        }
      },
      error:function(){
      }
    })

    return returnData;
}

/**
 * 获取振动模型列表
 */
 export function _vibmodelList(page){
  let returnData
  // let trainSetId = store.getState().DatasetConstructReducer.trainSetId
  $.ajax({
    type:"post",
    url:hostPort+"equip/vibration/modelSelectPage",
    // /POST /equip/vibration/modelSelectPage
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
      "pageNo": page,
      "pageSize": 10,
      // "queryParameter": {
      //   "setId": trainSetId
      // }
    }),
    success:function(res){
      if(res.flag){
       returnData=res.data
      //  let totalCount = res.data.totalCount
    //    const action ={
    //     type:'vibModelList',
    //     returnData,
    //     totalCount
    //   }
    // store.dispatch(action)
      }
    },
    error:function(){
    }
  })
  return returnData;
}

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
  {
    title: '训练状态',
    dataIndex: 'state',
    key: 'state',
  }
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