import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

/**
 * 时序数据模型训练
 */
export function _modelTraining(id,values){
  let originID = store.getState().ModelCheckreducer.tableData[0].originID
  let returnData
  let flag = false
  $.ajax({
    type:"POST",
    url:hostPort+"equip/modal/sequenceTrain",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
        sourceFile:id,
        name:values.name,
        method:2,
        neuronsNumber:values.neuronsNumber,
        learningRate:values.learningRate,
        netNum:2,
        dropOut:0.5,
        numEpochs:100,
      }),
    success : res=>{
      if(res.flag){
        flag = true
        _modelList(1,originID)
        }
    },
    error:function(){
      
    }
  })
  // return flag;
  _message(flag,'模型训练')
}
/**
 * 删除模型
 */
export function _deleteModel(id,modelID){
  let originID = store.getState().ModelCheckreducer.tableData[0].originID
  let flag
  $.ajax({
    type:"delete",
    url:hostPort+"equip/modal/delete/"+modelID,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        _modelList(1,originID)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除模型')

}

/**
 * 获取模型列表
 */
export function _modelList(page,id){
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
        "method": 2
      }
    }),
    success:function(res){
      if(res.flag){
       returnData=res.data
       const action ={
        type:'sequenceModelList',
        returnData,
      }
    store.dispatch(action)
      }
    },
    error:function(){
    }
  })
}


/**
 * message
 */
function _message(flag,text){
  if(flag){
    message.success(`${text}成功！`)
  }else{
    message.error(`${text}失败！`)
  }
}


/**
 * 图像数据
 */
/**
 * 模型训练
 */
export function _imgModelTrainning(modelName,setid,numEpochs,epochLength){
  let trainSetId  =store.getState().DatasetConstructReducer.trainSetId
  let flag = false
  if(trainSetId!=''){
    //获取到训练集id
    let str  = `name=${modelName}&setId=${setid}&modelFileId=666&numEpochs=${numEpochs}&epochLength=${epochLength}&rpnLr=0.00001&classifierLr=0.00001&trainSetId=${trainSetId}`
    $.ajax({
      type:"post",
      url:hostPort+"equip/modal/imageTrain?"+str,
      //equip/modal/imageTrain
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      async:false,
      success:res =>{
        if(res.flag){
          flag = true
        //训练完毕  清除已经训练的任务
          _message(flag,'模型训练')          
          _imgModelList()
          const action = {
            type:"ImagemodelTrainingSubmit",
          }
          store.dispatch(action)
        }
      },
      error:function(){
      }
    })
  }else{
    _message(false,'获取训练集id')
  }

  return flag;
  
}
/**
 * 模型列表刷新
 */
export function _imgModelList(){
      // console.log('refresh')
     
    let returnDataList = []
    let setid = store.getState().DataStoragereducer.fileName[0].id
    // let datasetName = store.getState().DataStoragereducer.fileName[0].name

        $.ajax({
            type:"post",
            url:hostPort+"equip/modal/selectPage",
            contentType:"application/json;charset=UTF-8",
            dataType:'JSON',
            async:false, //改成异步  就不会锁住浏览器
            data:JSON.stringify({
              "orderBy": [
                {
                }
              ],
              "pageNo": 1,
              "pageSize": 10,
              "queryParameter": {
               "setId":setid,
               "method": 0
              }
            }),
            success:function(res){
              if(res.flag){
                // console.log("res",res)
              returnDataList = res.data.pageList
              const action = {
                type:"ImagemodelList",
                returnDataList,
              }
              store.dispatch(action)
              }
            },
            error:function(){
            }
          })
       
    }

