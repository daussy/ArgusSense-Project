import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'




/**
 * message
 */
export function _message(flag,text){
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
 * 模型评估
 */
export function _imgStateEvaluate(setid){
  let testSetId  =store.getState().DatasetConstructReducer.testSetId
  let flag = false


  if(testSetId!=''){
    //获取到测试集id
    $.ajax({
      type:"post",
      //http://192.168.1.173:9001/equip/modal/imageTest?modelId=1315629167198416898&testSetId=1315628758564155393
      url:hostPort+"equip/modal/imageTest?modelId="+setid+'&testSetId='+testSetId,
      dataType:'JSON',
      contentType:"application/json",
      async:false,
      success:res=>{
        if(res.flag){ 
          //评估完成刷新表格
          flag = true
          _imgModelList(1)
          _message(flag,'模型评估')
          const action = {
            type:"ImageModelValuateSubmit",
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
}
/**
 * 模型列表刷新
 */
export function _imgModelList(page){
      // console.log('refresh')
    
    let returnDataList = []
    let setid = store.getState().DataStoragereducer.fileName[0].id

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
              "pageNo": page,
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

/**
 * 评估结果查询
 */
export function _imgStateEvaluateResult(page){
  let returnDataList,totalCount
  let setid = store.getState().StateEvaluatereducer.resultSetid
  console.log(store.getState().StateEvaluatereducer.zipMsg);
  $.ajax({
    type:"post",
    url:hostPort+"equip/image/testResultSelectPage",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false, //改成异步  就不会锁住浏览器
    data:JSON.stringify({
      "pageNo": page,
      "pageSize": 3,
      "queryParameter": {
         "setId": setid
      }
    }),
    success:function(res){
      if(res.flag){
        // console.log("res",res)
        // if(page == 1){

        // }else{
        //   totalCount = store.getState().StateEvaluatereducer.imageStateValuate.totalCount
        // }
        totalCount = res.data.totalCount

      returnDataList = res.data.pageList
      const action = {
        type:"ImgStateValuateResult",
        returnDataList,
        totalCount
      }
      store.dispatch(action)
      }
    },
    error:function(){
    }
  })
}

