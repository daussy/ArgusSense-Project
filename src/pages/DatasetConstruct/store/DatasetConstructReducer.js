const dataStorage={
  imagedata:{
    zipTable :[
      {
       /**
        * 
  downloadURL: "http://192.168.1.173:9001/equip/file/download/1358301830383144962"
id: "1358301830383144962"
importer: "admin"
menuId: "1335756991540236289"
name: "test123"
nodeName: "图像数据"
state: "done"
        */
      }
    ],
    
    datasetID:'',//数据集id

    TagNum:1, //有标签的图片的数量

  },
  zipMsg:{
    id:"",
    name:"",
    nodeName:"",//节点名称
    menuId:"",//节点id
  }, //当前压缩包信息

  totalCount:'', //总图片数
  key:'',//当前选中的树节点
  ModelTrainingID:1,//当前选中的处理文件的ID
  fileName: '数据集1', //预处理结束，进行模型训练的文件名
 
  testSetId:"", //测试集id
  trainSetId:"", //训练集id

  flag:0,//0表示未处理,1表示正在处理,2表示处理完毕

  dataType:1 ,
  /**
   * 图像数据  dataType:1
时序数据  dataType:2
振动数据  dataType:3
   */
  vibTable:{
    
    taskTable:[{
    datasetName:"" , // 数据集名称
    transformedID:"", //时频图像转换结果id
  }],
    imageTable:[{

    }],
    totalCount:""
  },
 

}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const DatasetConstructReducer = (state=dataStorage,action)=>{    

  /**
   * 图像数据
   */
      /**
      * 流程按钮
      */
     if(action.type==='imageFileID'){    //当前选择的文件ID
      const newState=JSON.parse(JSON.stringify(state));
      // console.log(action)
      newState.zipMsg = {...action.record}
      return newState;
     }
    //获取压缩包中的文件
    if(action.type ==='getZipData'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.datasetName = action.datasetName
      newState.dataType = 1
      newState.imagedata.zipTable = []
      newState.imagedata.TagNum = 0
      newState.totalCount = action.totalCount
   
      action.pageList.map((item,index)=>{
        if(item.labelFileLocation==null){
          //没有标签
          if(item.setType ===null){
            //没有划分
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              labelName:item.labelName,
              id:item.id,
              tag:'否',
              setType:'未划分', 
  
            })
          }else{
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              labelName:item.labelName,
              id:item.id,
              tag:'否',
              setType:item.setType, 
  
            })
       
          }
        }else{
          //有标签
          newState.imagedata.TagNum++
          if(item.setType ===null){
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              labelName:item.labelName,
              id:item.id,
              tag:'是',
              setType:'未划分', 
            })
          }else{
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              labelName:item.labelName,
              id:item.id,
              tag:'是',
              setType:item.setType, 
            })
          }
        }
      })
      // console.log('newstate.imagedata.TagNum', newState.imagedata.TagNum)
      return newState;
     }

    /**
     * 自动划分 
     */
    if(action.type === 'autodatasetConstructTable'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.testSetId = action.testSetId;
      newState.trainSetId = action.trainSetId
      return newState;
    }
    /**
   * 振动数据
   */
    if(action.type === 'vibAutodivide'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.testSetId = action.testSetId;
      newState.trainSetId = action.trainSetId;
      return newState;

    }
    if(action.type==='vibPngSelectPage'){ 
      const newState=JSON.parse(JSON.stringify(state));
      newState.dataType = 3
      newState.vibTable.totalCount = action.totalCount
      newState.vibTable.imageTable = pngSort(action.pageList)
      return newState;
     }


    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话 
}
export default DatasetConstructReducer

function pngSort(taskarr){
  let resultArr = []
  taskarr.map((item,index)=>{
    if(item.label === null) {
      // 未标注
      if(item.divideType === null){
        // 未划分
        resultArr.push({
          ...item,
          labelOrnot:"未标注",
          divideOrnot:"未划分",
        })
      }else{
        resultArr.push({
          ...item,
          labelOrnot:"未标注",
          divideOrnot:item.divideType,
        })
      }
     
    }else{
      if(item.divideType === null){
        // 未划分
        resultArr.push({
          ...item,
          labelOrnot:'已标注',
          divideOrnot:"未划分",
        })
      }else{
        resultArr.push({
          ...item,
          labelOrnot:'已标注',
          divideOrnot:item.divideType,
        })
      }
     
    }
  })
  return resultArr;
}