import $ from 'jquery'
import {hostPort} from '@/Common'

// antd
import { message  } from 'antd';

// store
import store from '@/pages/Store/index'

// 引入方法
import {_onSelect} from '../../../TreeIndex/functionList'


/**
 * 编辑表单
 */
export function _handleSubmit(treeKey,setid,name,label){
    $.ajax({
        type:"POST",
        url:hostPort+"equip/image/saveOrUpdate",
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        data:JSON.stringify({
          /*
          {
    "id": "1305830578024734721", //数据集id
    "menuId": "1305829187264831490", //节点id
    "name": "2233" //需要改的名字
  }
          */
          menuId:treeKey,
          id: setid,
          name:name
        }),
        success:function(res){
          if(res.flag){
                _refreshForm(treeKey,label)
                message.success({
                    content: '修改成功！',
                    className: 'custom-class',
                    style: {
                      marginTop: '20vh',
                    },
                  });
          }
        },
        error:function(){
            message.error({
                content: '修改失败！',
                className: 'custom-class',
                style: {
                  marginTop: '20vh',
                },
              });
        }
      })
}

/**
 * 刷新表单
 */
export function _refreshForm(treeKey,label){

    _onSelect(treeKey,label)
}

/**
 * 上传文件
 */
    /**
     * 新建数据集
     */
    export function _newSet(name,treeKey){
        let e  
        $.ajax({
            type:"POST",
            url:hostPort+"equip/image/saveOrUpdate",
            contentType:"application/json;charset=UTF-8",
            dataType:'JSON',
            async:false,
            data:JSON.stringify(
              {
                name:name,
                menuId:treeKey,
              }
            ),
            success:res=>{
              if(res.flag){
                e = res.data.id
                const action = {
                  type:"createDataset",
                  e
                }
                store.dispatch(action)
             
              }
            },
            error:function(){
                
            }
          })
          return e;
    }

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
 * 删除压缩包
 */
export function _deleteZip(id,label,treeKey){
    $.ajax({
        type:"DELETE",
        url:hostPort+"equip/image/delete/"+id,
        contentType:"application/json;charset=UTF-8",
        dataType:'JSON',
        async:false,
        success:function(res){
          if(res.flag){
        //   删除完成 刷新
            _refreshForm(treeKey,label)
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
 * 流程按钮
 */
export function _LinkToList(record){
  const action ={
    type:'imageFileID',
    // ids:this.state.selectedRowKeys, //有可能是批量处理
    record,
    dataType:1,
  }
  store.dispatch(action)
}