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
 * 删除标签
 */
export function _deleteLabel(imageID){
  let e  =  []
  e.push(imageID.toString())
  let id = store.getState().TagManagementreducer.zipMsg.id
  let name = store.getState().TagManagementreducer.zipMsg.name
  let flag = false
  $.ajax({
    type:"DELETE",
    url:hostPort+"equip/image/deleteLabel",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    data:JSON.stringify(
        e
    ),
    async:false,
    success:res=>{
      if(res.flag){
          //要刷新
          flag =  true
          _checkZip(1,id,name)
      }
    },
    error:function(){
    }
  })
  _message(flag,'删除标签')
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

