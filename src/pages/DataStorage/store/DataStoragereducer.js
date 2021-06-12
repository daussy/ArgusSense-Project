import ViewImg from '../Image/Table2/TabTable/components/ViewImg';
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from '../store/actionType'



const dataStorage={
  VibrationDataConfig:[
    {
      title: '振动',
      key: '/tree12',
      path:'12',
      children: [
        {
          title: '振动12',
          key: '/tree1.12',
          path:'12',
        },
      ],
    },
  ],
  SequenceDataConfig:[
    {
      title: '时序',
      key: '/tree13',
      path:'13',
      children: [
        {
          title: '时序13',
          key: '/tree1.13',
          path:'13',
        },
      ],
    },
  ],
  ImageDataConfig:[
    {
      title: '图像',
      key: '/tree11',
      path:'11',
      children: [
        {
          title: '图像11',
          key: '/tree1.11',
          path:'11',
        },
      ],
    },
  ],

  sequenceFile:[{
            name: 'IMG.png',
            state: 'done',
            size: 1024,
            id:"6525856256256",
            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
  }],
  sequenceTable:[
    {
      name:'数据存储管理',
      nodeName:'节点1'
    }
  ],

  vibrationdata:{
    vibrationTable:[
     { 
      childNode:'数据存储管理',
      nodeName:123,
      name:123,
      uploadTime:'2020.01.01',
      importer:33,
      equipment:33,
      time:33,
      createDate:'',
      modifiedTime:"",
    },
    ],
    vibrationFile:[{
      name: '0-0.csv',
      state: 'done',
      size: 1024,
      id:"6525856256256",
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}],
    zipTable :[
      {
        // imageName:'',
        // imageFileId:'',  //用于预览图片
        // setId:'',
        // labelFileId:'',
        // id:'',
        // tagName:'',
        // tag:'否'
      }
    ],
    datasetID:"",//数据集id

  },

  imagedata:{
    imageTable:[
      {
        nodeName:233,
        name:233,
        uploadTime:'',
        importer:55,
        equipment:55,
        time:55,
        createDate:'',
        modifiedTime:"",
      },
      {
        nodeName:55,
        name:55,
        uploadTime:'',
        importer:55,
        equipment:55,
        createDate:55,
        modifiedTime:"",
      },
    ],
    imageFile:[{
      name: 'IMG.png',
      state: 'done',
      size: 1024,
      id:"6525856256256",
      downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      uploadTime:'2020-09-10',
}],
    zipTable :[
      {
        // imageName:'',
        // imageFileId:'',  //用于预览图片
        // setId:'',
        // labelFileId:'',
        // id:'',
        // tagName:'',
        // tag:'否'
      }
    ],
    
    datasetID:'',//数据集id

    TagNum:'', //有标签的图片的数量

    

  },

  treeKey:'',//当前选中的树节点

  label:'',//当前处理的节点的名称
  
  fileID:'',//当前选中的处理文件的ID

  fileName:[{     //这个是用于在后续的模型训练和数据预处理时，需要标出待处理的原始文件名
    name:'数据集1',
    id:1
  }] ,//当前选中的处理文件名

  selectedRecords:[], //当前选中的数据集的具体信息

  deleteID:'', //当前要删除的文件的id

  dataType:'', //1图像 2时序 3振动

  datasetName:'',//当前处理的数据集名

  flag:0, //0表示当前未上传， 1表示正在上传，2表示上传完毕

  ModalContent:null,
  totalCount:"" ,//当前压缩包中的总图片数
}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const DataStoragereducer = (state=dataStorage,action)=>{
    // vibration
    // 树节点初始化
    if(action.type==='VibrationComponenDidMount'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.VibrationDataConfig=action.dataConfig
      return newState;
     }
    //  选择树节点
    if(action.type==='getVibrationTreekey'){   
      const newState=JSON.parse(JSON.stringify(state));

      newState.label = action.label
     newState.vibrationdata.vibrationFile=action.tableList
     newState.treeKey=action.treeKey
     newState.vibrationdata.vibrationTable=action.tableList
     newState.flag = action.flag
       return newState;
     }
        //获取振动数据集压缩包中的文件
     if(action.type ==='getVibZipData'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.fileName[0].id = action.id
      newState.fileName[0].name =  action.datasetName
      newState.totalCount = action.totalCount
      newState.vibrationdata.zipTable = []
      action.pageList.map((item,index)=>{
        newState.vibrationdata.zipTable.push({
          ...item,
          datasetName:action.datasetName,
          nodeName:newState.label
        })
        
      })

      
      return newState;
    }
    // 新建数据集
    if(action.type === 'createVibDataset'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.vibrationdata.datasetID = action.e
      return newState;

    }

     if(action.type==='VibrationFileID'){    //当前选择的文件ID
      const newState=JSON.parse(JSON.stringify(state));
      newState.fileID=action.id
      // console.log('2020.7.25 17:20',action)
      newState.fileName[0].name=action.record.name
      return newState;
     }


     //sequence
    if(action.type==='SequenceComponenDidMount'){  //pages\DataStorage\Sequence\Sequence.jsx
      const newState=JSON.parse(JSON.stringify(state));
      newState.SequenceDataConfig=action.dataConfig
      return newState;
     }


     if(action.type==='getSequenceTreekey'){   //pages\DataStorage\Sequence\Sequence.jsx
      const newState=JSON.parse(JSON.stringify(state));
      action.tableList.map((item,index)=>{
        item.nodeName = action.label
      })
      newState.treeKey=action.treeKey
      newState.sequenceTable=action.tableList
      newState.sequenceFile=action.tableList
       return newState;
     }

   
    

     // image 
     if(action.type==='ImageComponentDidMount'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.ImageDataConfig=action.dataConfig
      return newState;
     }


     //上传之前，创造数据集
     if(action.type ==='createDataset'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.imagedata.datasetID = action.e
      return newState;
     }
     

     if(action.type==='getImageTreekey'){   //pages\DataStorage\Sequence\Sequence.jsx
      const newState=JSON.parse(JSON.stringify(state));

      newState.label = action.label
     newState.imagedata.imageFile=action.tableList
     newState.treeKey=action.treeKey
     newState.imagedata.imageTable=action.tableList
    //  newState.flag = action.flag
       return newState;
     }


     //获取压缩包中的文件
     if(action.type ==='getZipData'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.datasetName = action.datasetName
      newState.dataType = 1
      newState.fileName[0].id = action.id
      newState.fileName[0].name =  action.datasetName
      newState.fileID = action.id
      newState.imagedata.zipTable = []
      newState.imagedata.TagNum = 0
      newState.totalCount = action.totalCount
      action.pageList.map((item,index)=>{
        if(item.labelFileLocation==null){
          //没有标签
          if(item.setType ===null){
            //没有划分
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              tagName:item.labelName,
              id:item.id,
              tag:'否',
              setType:'未划分', 
  
            })
          }else{
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              tagName:item.labelName,
              id:item.id,
              tag:'否',
              setType:item.setType, 
  
            })
       
          }
        }else{
          if(item.setType ===null){
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              tagName:item.labelName,
              id:item.id,
              tag:'是',
              setType:'未划分', 
            })
          }else{
            newState.imagedata.zipTable.push({
              imageFileLocation:item.imageFileLocation,
              labelFileLocation:item.labelFileLocation,
              imageName:item.imageName,
              nodeName:newState.label,
              name:action.datasetName,
              tagName:item.labelName,
              id:item.id,
              tag:'是',
              setType:item.setType, 
            })
          }


          newState.imagedata.TagNum++

        }
      })
      // console.log('newstate.imagedata.ziptable', newState.imagedata.zipTable)
      return newState;
     }

         //  获取要查看的图片
     if(action.type ==='ViewImg'){
      const newState=JSON.parse(JSON.stringify(state));
      // newState.deleteID = action.id
      // console.log('fjowejio')
      newState.ModalContent = action.ImgDiv
      return newState;
     }
     /**
      * 删除单张图片
      */
     if(action.type === 'Deleteiamge'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.imagedata.zipTable = action.tableData
      return newState;
     }

            //   取消要查看的图片
            // 一定要清除 否则会报错
            if(action.type ==='cancelView'){
              const newState=JSON.parse(JSON.stringify(state));
              newState.ModalContent = null
              return newState;
             }
     


    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
   
}
export default DataStoragereducer