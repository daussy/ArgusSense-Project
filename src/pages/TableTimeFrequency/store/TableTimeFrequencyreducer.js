const dataStorage={
  taskTable:[
    {
      datasetName: '', //数据集名称
      preprocessId: '', // 预处理结果id
      resultID:"", //结果id
      state:"未处理",  // 处理状态
      time:"",
      nodeName:"", //节点名字
      menuId:"",//节点id
      importer:"",//处理人
      // resultFile:"" , //结果文件名
      func:"",//小波基函数
      windowSize:"", // 滑动窗大小
      picNum:"" , // 图片数量
      frequency:"" , //采样频率
    }
  ],
  dataType:2 ,//
}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const TableTimeFrequencyreducer = (state=dataStorage,action)=>{

  /**
   * 振动数据
   */

  // 预处理完成
  if(action.type==='vibpreProcessing'){  
    const newState=JSON.parse(JSON.stringify(state));
    newState.taskTable[0].preprocessId = action.returnData.id
    newState.taskTable[0].state = '未处理'
    newState.taskTable[0].datasetName = action.record.datasetName
    newState.taskTable[0].nodeName = action.record.nodeName
    return newState;
   }
  //  时频图像转换
  if(action.type==='vibtransform'){ 
    const newState=JSON.parse(JSON.stringify(state));
    newState.taskTable[0].func = action.returnData.function
    newState.taskTable[0].windowSize = action.returnData.windowSize
    newState.taskTable[0].picNum = action.returnData.picNum
    newState.taskTable[0].frequency = action.returnData.frequency
    newState.taskTable[0].state = '已完成'
    newState.taskTable[0].resultID = action.returnData.id
    newState.taskTable[0].importer = 'admin'
    return newState;
   }

    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
   
}
export default TableTimeFrequencyreducer