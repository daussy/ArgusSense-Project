import React,{Component} from 'react'
// antd
import { Steps, Button, message ,Empty} from 'antd';
import {LeftSquareTwoTone, RightSquareTwoTone,CheckSquareTwoTone } from '@ant-design/icons';

// style 
import '../component/style.scss'

// store
import store from '@/pages/Store/index'
import routeConfig from '@/routerComponent/routeConfig.js'

// 模型训练
import TagManagement from '@/pages/TagManagement/index'
import DatasetConstruct from '@/pages/DatasetConstruct/index'
import ModelTraining from '@/pages/ModelTtrainning/index'
import ModelCheck from '@/pages/ModelCheck/index'
import AlgorithmManagement from '@/pages/AlgorithmManagement/index'
import Modelvaluate from '@/pages/Modelvaluate/index'
// 模型应用
import AbnormalPerception from '@/pages/AbnormalPerception/index'
import StateEvaluate from '@/pages/StateEvaluate/index'
import Troubleshooting from '@/pages/Troubleshooting/index'
import LifePrediction from '@/pages/LifePrediction/index'
// 数据挖掘
import Preprocessing from '@/pages/Preprocessing/index' //数据处理
import FeatureExtraction from '@/pages/FeatureExtraction/index'
import FeatureScreening from '@/pages/FeatureScreening/index'
import TableTimeFrequency from '@/pages/TableTimeFrequency/index'
const { Step } = Steps;

class ProcessingSteps extends Component{
  constructor(props){
    super(props)
    this.state = {
      current:0,
      cards:store.getState().DataProcessingreducer.cards
    }
    console.log(this.state.card);

  }



  // 下一步
  next = () => {
    this.setState({
      current:this.state.current+1
    })
  };
// 上一步
  prev = () => {
    this.setState({
      current:this.state.current-1
    })
  };

  createContent = (title) =>{
    console.log(title);
    let content 
    switch (title) {
      case '标签管理':
          content = (
          <div className ='component-content' >
            <TagManagement/>
            </div>);
          break; 
      case "模型训练":
          content = (
          <div   className ='component-content' >
            <ModelTraining/>
            </div>);
          break; 
      case "数据预处理":
        content = (
          <div  className ='component-content' >
            <Preprocessing/>
            </div>);
      break; 
      case "数据集构建":
        content = (
          <div  className ='component-content' >
            <DatasetConstruct/>
            </div>);
      break; 
      case "模型校验":
        content = (
          <div  className ='component-content' >
            <ModelCheck/>
            </div>);
      break; 
      case "算法管理":
        content = (
          <div  className ='component-content' >
            <AlgorithmManagement/>
            </div>);
      break; 
      case "模型评估":
        content = (
          <div  className ='component-content' >
            <Modelvaluate/>
            </div>);
      break; 
      case "异常感知":
        content = (
          <div  className ='component-content' >
            <AbnormalPerception/>
            </div>);
      break; 
      case "状态评估":
        content = (
          <div  className ='component-content' >
            <StateEvaluate/>
            </div>);
      break; 
      case "故障诊断":
        content = (
          <div className ='component-content'  >
            <Troubleshooting/>
            </div>);
      break; 
      case "寿命预测":
        content = (
          <div  className ='component-content' >
            <LifePrediction/>
            </div>);
      break; 
      case "特征提取":
        content = (
          <div  className ='component-content' >
            <FeatureExtraction/>
            </div>);
      break; 
      case "特征筛选":
        content = (
          <div  className ='component-content' >
            <FeatureScreening/>
            </div>);
      break; 
      case "时频图像转换":
        content = (
          <div  className ='component-content' >
            <TableTimeFrequency/>
            </div>);
      break; 
      default: 
          content = (
            <div  className ='component-content'><Empty></Empty></div>
          );
  } 
  return content;      

  }
  render(){
    const {current,cards} = this.state;
    return (
      <>
      <div className = "steps-container">
        <Steps current={current} style = {{padding:"20px 10px 15px 10px",backgroundColor:"#fff"}}   type="navigation"> 
          {
          cards.map(item=>(
            <Step key={item.title} title={item.title} />
          ))
          }
        </Steps>

        <div className="steps-action">
        {current > 0 && (
            <LeftSquareTwoTone twoToneColor="#284978"   style={{fontSize:"30px", margin: '0 8px' }} onClick={this.prev}/>
              
            
          )}
          {current < cards.length - 1 && (
            <RightSquareTwoTone  twoToneColor="#284978"  style = {{fontSize:"30px"}}  onClick={this.next}/>
           
          )}
          {current === cards.length - 1 && (
            <CheckSquareTwoTone  twoToneColor="#52c41a" style = {{fontSize:"30px"}} onClick={() => message.success('流程完成！')}/>
          
          )}
      
        </div>
   
        {/* <div className="steps-content">{resultArr[current].content}</div> */}
      
      </div>
      <div className="steps-content">
            {this.createContent(cards[current].title)}
        </div>
      </>
    );
  }


}

export default ProcessingSteps;  