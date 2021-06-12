
const selectList = 
[
  {
    key: 1,
    title: '数据预处理',
    description: '数据预处理',
  },
  {
    key: 2,
    title: '特征提取',
    description: '特征提取',
  },
  {
    key: 3,
    title: '特征筛选',
    description: '特征筛选',
  },
  {
    key: 4,
    title: '时频图像转换',
    description: '时频图像转换',
  },
  {
    key: 5,
    title: '标签管理',
    description: '标签管理',
  },
  {
    key: 6,
    title: '数据集构建',
    description: '数据集构建',
  },
  {
    key: 7,
    title: '模型训练',
    description: '模型训练',
  },
  {
    key: 8,
    title: '模型校验',
    description: '模型校验',
  },
  {
    key: 9,
    title: '寿命预测',
    description: '寿命预测',
    
  },
  {
    key: 10,
    title: '状态评估',
    description: '状态评估',
  },
  {
    key: 11,
    title: '算法管理',
    description: '算法管理',
  },
  {
    key: 12,
    title: '模型评估',
    description: '模型评估',
  },
]

const defaultState = {

    list:[],//所有的模型
    itemid:'',//当前正在处理的模型的id  
    newListTitle:'123',//正在处理的模型的title
    newBoardList:'',//当前左边的选项卡
    targetKeys:[],//当前执行列表的item key
    flag:"new" , //当前是新建还是保存
    cards:[], //当前执行列表的内容
}


// let itemid
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const DataProcessingreducer = (state=defaultState,action)=>{
    // console.log('action',action)
    // 获取全部模型
    if(action.type === 'allCard'){
      const newState = JSON.parse(JSON.stringify(state));
      newState.itemid  = null
      newState.list = action.cardArr
      // console.log('  newState.list',  newState.list)
     return newState;
  }
  // 新建模型
    if(action.type === 'createCard'){
        const newState = JSON.parse(JSON.stringify(state));
      newState.targetKeys = []
      newState.flag = "new"
        newState.newListTitle = action.cardTitle
        // console.log('  newState.newListTitle',  newState.newListTitle)
       return newState;
    }

    // 编辑模型
    if(action.type === 'editCard'){
      const newState = JSON.parse(JSON.stringify(state));
      let cards = action.cards
      newState.itemid = action.id
      newState.flag = "save"
      newState.newListTitle = action.title
      let targetKeys = []
      cards.map((item,index)=>{
        selectList.map((seleted,index)=>{
          if(item.title === seleted.title){
            targetKeys.push(seleted.key)
          }
        })
      })
      // console.log(targetKeys,'targetKeys')
      newState.targetKeys = targetKeys
     return newState;
  }

  // 使用模型
  if(action.type === 'useCard'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.cards = action.cards
    newState.itemid = action.id
    return newState;
  }

   
    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
}
export default DataProcessingreducer