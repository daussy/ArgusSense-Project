import {Component} from 'react';

// antd
import {Table,Button,Tag,Pagination,Alert,PageHeader} from 'antd';
// store
import store from '@/pages/Store/index'
import {_vibTaskpageonChange} from './functionList'
import {resultColumns,resultArr,} from './dataConfig'
// style
import './style.scss'
// 消息轮播
import TextLoop from 'react-text-loop';
export default class ModelAlgorithm extends Component{
    constructor(props){
        super(props)

        this.state={
            vibData:store.getState().StateEvaluatereducer.vibStateValuate.taskList,
            vibtotalCount:store.getState().StateEvaluatereducer.vibStateValuate.taskTotalCount,
            selectedRowKeys:"",
            resultData:resultArr[0],
            currentIndex:0
        }
        // store.subscribe(this.handleStoreChange)
    }
    
    // handleStoreChange = ()=>{
    //     this.setState({
    //         vibData:store.getState().StateEvaluatereducer.vibStateValuate.taskList,
    //         vibtotalCount:store.getState().StateEvaluatereducer.vibStateValuate.taskTotalCount,
    //     })
    // }

      
    // componentDidMount(){
    //     // _vibTaskpageonChange(1)
    //     this.timer = setInterval(()=>{
    //         if(this.state.currentIndex == resultArr.length-1){
    //             this.setState({
    //                 currentIndex :0,
    //                 resultData:resultArr[0],
    //             })
    //         }else{
                
    //             this.setState((preState)=>({
    //                 currentIndex:++preState.currentIndex,
    //                 resultData:resultArr[this.state.currentIndex]
    //             }),()=>{
    //                 this.createMesg(this.state.resultData)
    //             })
    //         }
    //     },3000)
    // }
    
    // vibpageonChange=(page,pageSize)=>{
    //     _vibTaskpageonChange(page)
    //   }
            
    // /**
    //  * 表格选择
    //  */
    // onSelectChange = selectedRowKeys => {
    //     // console.log('selectedRowKeys changed: ', selectedRowKeys);
    //     this.setState({ selectedRowKeys });
    // };
    // componentWillUnmount(){
    //     clearInterval(this.timer);
    // }

    createMesg =()=>{
        let content =resultArr.map((item,index)=>{
            if(item*100<=30){
                return((<div className  ="result-content" key = {index}><Tag color="success" >正常</Tag><Tag color="success">{item*100}%</Tag></div>))
            }else if(item*100 <=60 && item*100>30){
                return((<div className  ="result-content" key = {index}><Tag color="warning" style = {{marginRight:"10px"}}>警告</Tag><Tag color="warning">{item*100}%</Tag></div>))
            }else if(item*100 >60 && item*100<100){
                return((<div className  ="result-content" key = {index}><Tag color="error" style = {{marginRight:"10px"}}>故障</Tag><Tag color="error">{item*100}%</Tag></div>))
            }
        })
        return content;
    }

    render(){
        return(
            <div className ="result-container">
                <PageHeader 
                className="site-page-header-responsive"
                title={<span className = "PageHeader-dev-des-title">诊断结果</span>}
                ghost
                >
                    <div className = "zmd">
                        <div className  ="result-mesg">
                            {this.createMesg()}

                        </div>
                    </div>
                {/* <TextLoop springConfig={{stiffness:340,damping:30}}
                //  mask={true} fade={true}
                adjustingSpeed={150} delay={2000} interval={5000}>
                    {this.createMesg()}
                </TextLoop> */}
                </PageHeader>
            </div>
        )
    }
}