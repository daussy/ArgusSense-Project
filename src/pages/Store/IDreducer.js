const dataStorage = {
    /*
    图像数据  dataType:1
    时序数据  dataType:2
    振动数据  dataType:3
    */
    DataStorageID:[
        {imageFileID:'',
        imageFilename:'',
        },
        {sequenceFileID:'',
        sequenceFilename:'',
        },
        {vibrationFileID:'',
        vibrationFilename:'',
        },
    ],

}


const IDreducer = (state=dataStorage,action)=>{
   
    if(action.type==='getimageFileID'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.DataStorageID[1].imageFileID = action.id
      console.log('newState  21.00')
      return newState;
     }
   
    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
}
export default IDreducer