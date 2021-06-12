const dataStorage={
  tableData:[
    {
      fileID:"",//上传的文件id
      datasetName:"", //文件名
      name:"", //模型名称
      step:"",
      resultFileId:"" , //结果文件id
    }
  ],
  modelTrainingTable:[
  ],
  totalCount:'',
  key:'',//当前选中的树节点
  ModelTrainingID:1,//当前选中的处理文件的ID
  fileName: '数据集1', //预处理结束，进行模型训练的文件名

  flag:0,//0表示未处理,1表示正在处理,2表示处理完毕

  dataType:1 


}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const LifePredictionreducer = (state=dataStorage,action)=>{    
/**
 * 时序数据
 */

    if(action.type ==='lifePrediction'){
      const newState = JSON.parse(JSON.stringify(state));
      newState.tableData[0].datasetName = action.datasetName
      newState.tableData[0].fileID = action.fileID
      newState.tableData[0].resultFileId = action.resultFileId
      newState.tableData[0].name = action.modelName
      return newState
    }
    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
}
export default LifePredictionreducer