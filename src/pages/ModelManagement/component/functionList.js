import $ from 'jquery'
import {hostPort} from '@/Common'


/**
 * 
 * 获取图像、时序数据模型
 * @param {页数} page 
 * @param {类型} method 
 * @returns 
 */
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

/**
 * 删除时序、图像模型
 */
export function _modelDelete(id){
  let flag = false;
  $.ajax({
    type:"delete",
    url:hostPort+"equip/modal/delete/"+id,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        // _modelList(1,originID)
      }
    },
    error:function(){
    }
  })
  return flag ;
}

/**
 * 删除振动模型
 */
export function _vibModelDelete(id){
  let arr = [],flag = false;
  arr.push(id);
  $.ajax({
    type:"delete",
    url:hostPort+"equip/vibration/deleteModel",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
      arr),
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        // _vibmodelList(1)
      }
    },
    error:function(){
    }
  })
  return flag ;
  // _message(flag,'删除模型')
}

/**
 * 模型重命名
 */

 export function _vibModelReName(id,name){
  let flag = false;
  $.ajax({
    type:"post",
    url:hostPort+`equip/vibration/newName?id=${id}&newName=${name}`,
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    success:function(res){
      if(res.flag){
        flag = true
        // _vibmodelList(1)
      }
    },
    error:function(){
    }
  })
  return flag ;
}
