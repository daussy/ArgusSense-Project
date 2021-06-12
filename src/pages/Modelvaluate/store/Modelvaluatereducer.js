const dataStorage={
  tableData:[
    {
      originID:"",//
      preprocessedID:"",//未训练但预处理完的ID
      datasetName:"", //文件名
      resultID:"", //训练完成的ID
    }
  ],
  modelTrainingTable:[{
    modelName:'模型1',
    algorithm:'长短时记忆循环神经网络',
    neuronsNumber:'32',
    netNum:'2',
    Dropout:'5',
    learningRate:'0.001',
    numEpochs:'2',
    trainingTime:'2.8min',
    id:1
  },{
    modelName:'模型2',
    id:2
  }
  ],
  totalCount:'',
  key:'',//当前选中的树节点
  ModelTrainingID:1,//当前选中的处理文件的ID
  fileName: '数据集1', //预处理结束，进行模型训练的文件名
 
 
  

  imageModelTraining:{
    datasetMsg:[],
    modelTrainingTable:[],

    tableData:[
       
    ],
    chooseDataset:[
      {
        "filename":"455",
        "time":"555",
        "device":"555",
        "unit":"555",
        "method":"555",
        "code":"555"
      },  
      ]
  },

  vibModelValuateList:{
    totalCount:0,
    modelList:[

    ]
  },

  flag:0,//0表示未处理,1表示正在处理,2表示处理完毕

  modelConstructorValue:null,

  dataType:1 ,
  /**
   * 图像数据  dataType:1
     时序数据  dataType:2  
     振动数据  dataType:3
   */
  zipMsg:{},
  flag:false,
}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const Modelvaluatereducer = (state=dataStorage,action)=>{    

/**
 * 图像数据
 */
    // 流程按钮
     if(action.type==='imageFileID'){    //当前选择的文件ID
      const newState=JSON.parse(JSON.stringify(state));
      // console.log(action)
      newState.zipMsg = {...action.record}
      newState.dataType = 1
      return newState;
     }
// 初始化
  if(action.type ==='modelConstruct'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.imageModelTraining.datasetMsg[0]=action.dataset 
    // console.log(newState.imageModelTraining.datasetMsg[0])
    newState.dataType = 1
    return newState
  }
// 刷新模型列表
if(action.type === 'ImagemodelList'){
  const newState = JSON.parse(JSON.stringify(state));
  let e = []
  // if(action,returnDataList)
  action.returnDataList.map((item,index)=>{
      if(item.evlResult === null){
        e.push({
          ...item,
          evaluateStatus:'未开始',
          datasetName: newState.zipMsg.name
        })
      }else{
        e.push({
          ...item,
          evaluateStatus:'已完成',
          datasetName:  newState.zipMsg.name
        })
      }
  })
  // console.log(e)
  newState.imageModelTraining.modelTrainingTable=e
  return newState;
}
// 模型评估
if(action.type === 'ImageModelValuateSubmit'){
  const newState  = JSON.parse(JSON.stringify(state));
  newState.flag = true
  return newState;
}
/**
 * 振动数据
 */

// 模型列表
if(action.type === 'vibModelValuateList'){
  const newState = JSON.parse(JSON.stringify(state));
  newState.dataType = 3
  let e = []
  // if(action,returnDataList)
  action.returnDataList.map((item,index)=>{
      if(item.result === null){
        e.push({
          ...item,
          evaluateStatus:'未开始',
        })
      }else{
        e.push({
          ...item,
          evaluateStatus:'已完成',
        })
      }
  })
  // console.log(e)
  newState.vibModelValuateList.totalCount = action.totalCount
  newState.vibModelValuateList.modelList=e
  return newState;
}




    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
}
export default Modelvaluatereducer