import $ from 'jquery'
import {headerToken,hostPort} from '@/Common'
// store
import store from '@/pages/Store/index'

/**
 * 树节点初始化
 */
export function _treeInitial(){
    let dataConfig10
    $.ajax({
      type:"get",
      url:hostPort+"equip/menu/buildMenu",
      dataType:'JSON',
      async:false,
      success:function(res){
        if(res.flag){ 
         dataConfig10=res.data[2]
        }
      },
      error:function(){
      }
    })
    if(dataConfig10){
        let dataConfig2=JSON.parse(JSON.stringify(dataConfig10).replace(/"menuName"/g,' "title"'))  ;
        let dataConfig3=JSON.parse(JSON.stringify(dataConfig2).replace(/"id"/g,' "key"'))  ;
        let dataConfig1=JSON.parse(JSON.stringify(dataConfig3).replace(/"child"/g,' "children"'))   ;
        const action ={
          type:'VibrationComponenDidMount',
          dataConfig:dataConfig1
        }
        store.dispatch(action)
    }
}

/**
 * 树节点选择
 * @param {*} id 
 */
export  function _onSelect(id,label){
    let tableList= []
    let receiveData
    $.ajax({
        type:"POST",
        url:hostPort+"equip/vibration/selectPage",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify(
          {
            "pageNo": 1,
            "pageSize": 10,
            "queryParameter": {
              "menuId": id
            }
          }
        ),
        success:function(res){
          if(res.flag){
            res.data.pageList.map((item,index)=>{
              tableList.push({
                id:item.id,
                name:item.name,
                downloadURL:hostPort+'equip/file/download/'+item.id,
                state: 'done',
                nodeName:label,
                importer:'admin',
                menuId:item.menuId,
                importTime:item.importTime
            })
           })
           const action ={
            type:'getVibrationTreekey',
            treeKey:id,
            tableList,
            label
          }
        store.dispatch(action)
          }

        },
        error:function(){
            return false;
        }
      })
}

/**
 * 新增子节点
 */
export function _newTreeNode(treeid){

    $.ajax({
        type:"POST",
        url:hostPort+"equip/menu/saveOrUpdate",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify({
            "pId":treeid,
            "menuName":"新增",
            "dataType":"3"
          }),
        success:function(res){
          if(res.flag){
              _treeInitial()
          }
        },
        error:function(){
        }
      })
 
}

/**
 * 修改节点名称
 */
export function _onEditFinish(treeid,dataSource,label){
  
      $.ajax({
        type:"POST",
        url:hostPort+"equip/menu/saveOrUpdate",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify({
            id:treeid,
            "menuName":label,
            "dataType":"3"
        }),
        success:function(res){
          if(res.flag){
        //   dataConfig10=res.data[0]
          _treeInitial()
          }
        },
        error:function(){
        }
      })
}

/**
 * 删除节点
 */
export function _deleteTreeNode(treeid,dataSource){
    $.ajax({
        type:"DELETE",
        url:hostPort+"equip/menu/delete/"+treeid,
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        success:function(res){
          if(res.flag){
            // console.log('20:41 _deleteTreeNode',res)
            _treeInitial()
          }
        },
        error:function(){
        }
      })
}




