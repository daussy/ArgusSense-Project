
const defaultState = {
    cardData:{
        lanes: [
            {
              id: '1',
              title: '选择列表',
              cards: [
                {
                  id: 1,
                  title: '数据预处理',
                  description: '数据预处理',
                },
                {
                  id: 2,
                  title: '特征提取',
                  description: '特征提取',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 3,
                  title: '特征筛选',
                  description: '特征筛选',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 4,
                  title: '时频图像转换',
                  description: '时频图像转换',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 5,
                  title: '标签管理',
                  description: '标签管理',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 6,
                  title: '数据集构建',
                  description: '数据集构建',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 7,
                  title: '模型训练',
                  description: '模型训练',
                  metadata: { sha: 'be312a1' },
                },
                {
                  id: 8,
                  title: '模型校验',
                  description: '模型校验',
                  metadata: { sha: 'be312a1' },
                },
              ],
            },
            {
              id: '2',
              title: '执行顺序',
              cards: [
              ],
            },
          ],
    },
    step:{
      step:0,
      cardIndex:''
    },
   
    list:[
      {
        id: '2',
        title: '执行顺序',
        cards: [
        ],
      },
    ],

    //系统选择
    pathName:"/Devproject",
    
}
//reducer可以接受state，但是不能修改state，所以必须要拷贝一份
const other = (state=defaultState,action)=>{
    
    if(action.type === 'systemChoose'){
      const newState=JSON.parse(JSON.stringify(state));
      newState.pathName = action.value
      return  newState;
    }    
    return state;  //state存放的是所有的信息，整个store仓库里存储的数据 action指用户传过来的那句话
}
export default other