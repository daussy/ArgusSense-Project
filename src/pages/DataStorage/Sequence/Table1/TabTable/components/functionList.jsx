import $, { data } from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

// 引入方法
import {_onSelect} from '../../../TreeIndex/functionList'


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

/**
 * 删除文件
 */
export function _deleteFile(id,label,treeKey){
    $.ajax({
        type:"DELETE",
        //   url:hostPort+"equip/file/delete/"+record.id,
        url:hostPort+"equip/file/delete/"+id,
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        success:function(res){
          if(res.flag){
        //   删除完成 刷新
            _refresh(treeKey,label)
            message.success('删除成功！')
          }else{
            message.error('删除失败！')

          }
        },
        error:function(){
            
        }
      })
}

/**
 * 刷新表格
 */
export function _refresh(treeKey,label){
  _onSelect(treeKey,label)
}

/**
 * 流程按钮
 */
export function _LinkToList(record){
  const action ={
    type:'sequenceFileID',
    id: record.id,
    record,
    dataType:2,
  }
  store.dispatch(action)
}