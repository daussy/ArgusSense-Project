import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message,Image  } from 'antd';

// store
import store from '@/pages/Store/index'


/**
 * 查看压缩包
 */
export function _checkZip(page,id,datasetName){
  let pageList = []
  let totalCount = ""
  $.ajax({
      type:"post",
      url:hostPort+"equip/image/findOneSelectPage",
      dataType:'JSON',
      contentType:"application/json;charset=UTF-8",
      async:false,
      data:JSON.stringify(
          {
              "orderBy": [
                {
                }
              ],
              "pageNo": page,
              "pageSize": 10,
              "queryParameter": {
                "setId": id
              }
            }
        ),
      success:function(res){
        if(res.flag){ 
         pageList = res.data.pageList
         totalCount = res.data.totalCount
         const action = {
          type:'getZipData',
          pageList,
          datasetName,
          id,
          totalCount
          }
          store.dispatch(action)
        }
        // console.log('10:53',dataConfig10)
      },
      error:function(){
      }
  })
}

/**
 * 批量划分
 */
export function _batchDivide(data){
  let flag = false

  let id = store.getState().DatasetConstructReducer.zipMsg.id
  let name = store.getState().DatasetConstructReducer.zipMsg.name
      $.ajax({
        type:"post",
        url:hostPort+"equip/image/divideOne?",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify(
            data
        ),
        success:res=>{
          flag =  true
          _checkZip(1,id,name)
        },
        error:function(){
        }
      })
  _message(flag,'批量划分')

}

/**
 * 自动划分
 */
export function _autoDivide(trainingNum){
  let flag = false
  let id = store.getState().DatasetConstructReducer.zipMsg.id
  let name = store.getState().DatasetConstructReducer.zipMsg.name
  let testSetId //放测试集id
  let trainSetId //放训练集id
  $.ajax({
    type:"post",
    //POST /equip/image/divide
        //Request URL: http://192.168.1.173:9001/equip/image/divide?setId=1310499653518737409&train=2
    url:hostPort+"equip/image/divide?setId="+id+'&train='+trainingNum,
    contentType:"application/json",
    dataType:'JSON',
    async:false,
    success:res=>{
      flag =  true
        _checkZip(1,id,name)
            //划分后自动刷新
            testSetId = res.data[1].id
            trainSetId = res.data[0].id
            const action = {
              type:'autodatasetConstructTable',
              testSetId,
              trainSetId
              }
              store.dispatch(action)
    },
    error:function(){
    }
  })
  
}

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

