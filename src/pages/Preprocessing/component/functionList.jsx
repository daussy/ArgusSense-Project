import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'


/**
 * 时序数据
 */
/**
 * 查看数据
 */
export function _checkDialog(id){
    let dataTable ={
      length:"",
      data:[],
      column:[
        {
          title: '采样时间',
          dataIndex: '第1列',
          key: '第1列',
          width:100,

        },
      ],
    }
    let data=[]
    $.ajax({
      type:"get",
     url:hostPort+"equip/file/read/"+id,
      // url:hostPort+"equip/sequence/read/1279625219525873665",
      dataType:'JSON',
      contentType:"application/json;charset=UTF-8",
      async:false,
      success:function(res){
        if(res.flag){
          dataTable.length = res.data.length-1
          // 第0列是乱码
          data = res.data.splice(1) 
        }
      },
      error:function(){
      }
    })
    // 处理数据
     let index //传感器个数
    data.map((item,j)=>{
       index = 0
      for(var prop in item){
        if(prop=='第1列'){
          // 第一列 修改为
          item["第1列"] = j;
        }else{
          index++;
        }
      } 
    })
    dataTable.data = data
    // 生成列
    for(var i=1;i<=index;i++){
      dataTable.column.push({
        title:`传感器${i}`,
        dataIndex:`第${i+1}列`,
        key:`第${i+1}列`,
        width:100,
      })
    }
    return dataTable;
}

export function _preProcessing(id,algorithm,record){
  let returnData
  let flag = false
  $.ajax({
    type:"POST",
    url:hostPort+"equip/sequence/preProcess",
    contentType:"application/json;charset=UTF-8",
    dataType:'JSON',
    async:false,
    data:JSON.stringify({
      //这里目前选用的id是原始文件的id，正常情况下是选择原始文件或结果文件，后续需要对这里做一个修改，加上一个判断。
      "id":id, 
        algorithm: 1,
      }),
    success:function(res){
      if(res.flag){
      returnData=res.data
      flag = true
      const action = {
        type :"preProcessing",
        algorithm,
        returnData,
        record,
        id,
      }
      store.dispatch(action)
      }
    },
    error:function(){
    }
  })
  _message(flag,'数据预处理')
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
 * 振动数据
 */
export function _vibpreProcessing(id,algorithm,record){
  let returnData
  let flag = false
  if(algorithm == ''){
    _message(false,'获取算法')

  }else{
    $.ajax({
      type:"POST",
      url:hostPort+"equip/vibration/preprocess?setId="+id+'&algorithm='+algorithm,
      contentType:"application/json;charset=UTF-8",
      dataType:'JSON',
      async:false,
      success:function(res){
        if(res.flag){
        returnData=res.data
        flag = true
        const action = {
          type :"vibpreProcessing",
          algorithm,
          returnData,
          record,
          id,
        }
        store.dispatch(action)
        }
      },
      error:function(){
      }
    })
    _message(flag,'数据预处理')
  }
  return 1;
}

