import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'


export function _modelCheck(modelID,modelName){
  // console.log(modelName);
  let returnData
  let flag = false
  var fd = new FormData();
  fd.append("algorithmId",3);
  fd.append("modalId",modelID);
  $.ajax({
    type:"POST",
    ///equip/modal/sequenceTest
    url:hostPort+"equip/modal/sequenceTest",
    contentType: false,
    processData: false,
    dataType:'JSON',
    async:false,
    data: fd,
    success:res=>{
      if(res.flag){
        flag = true
        returnData=res.data
        // console.log(flag,'flag')
        const action = {
          type:"modelCheck",
          modelName,
          modelID,
          returnData,
        }
        store.dispatch(action)
      }
    },
    error:function(){
    }
  }) 
  _message(flag,'模型校验')
}


/**
 * 获取模型列表
 */
export function _modelList(page){
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

