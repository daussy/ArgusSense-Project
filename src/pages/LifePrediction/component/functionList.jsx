import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'


export function _lifePrediction(fileID,modelID,step,datasetName,modelName){
  let returnData
  let flag = false
  $.ajax({
    type:"POST",
    url:hostPort+"equip/modal/sequencePredict",
    contentType:"application/json;charset=UTF-8",
    dataType:"JSON",
    async:false,
    data:JSON.stringify({
      modalId:modelID,
      sourceFileId:fileID,
      step:step,
    }),
    success:res =>{
      if(res.flag){
      // console.log('res',res)
      }
      const action0 ={
        type:'lifePrediction',
        step,
        fileID,
        modelID,
        datasetName,
        modelName
      }
    store.dispatch(action0)
    },
    error:function(){
    

    }
  })
  _message(flag,'寿命预测')
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
export function _message(flag,text){
  if(flag){
    message.success(`${text}成功！`)
  }else{
    message.error(`${text}失败！`)
  }
}



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

