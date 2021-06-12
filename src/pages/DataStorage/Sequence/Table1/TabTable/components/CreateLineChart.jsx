import React,{Component } from 'react'
// antd
import {Button,Modal,InputNumber,Space} from 'antd'

import {_createChart} from './chart.config.js'

// echarts
/**
 * 说明：第一个import echarts是必须的
 * 第二个是引入的具体的一个图表类型 （可选）
 * 第三个是表的title(可选)
 */
import echarts from 'echarts/lib/echarts' 
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import ReactEcharts from 'echarts-for-react'

class CreateLineChart extends Component{
    constructor(props){
        super(props)
        this.state= {
            num:'',
            visible:false,
            dataSource:[],
            max:"",
            min:"",
        }
    }
    componentDidMount() {
      // this.getOption()

    }

    onOk=()=>{
        let valueArr = []
        let xArr =[]
        this.props.dataSource.map((item,index)=>{
            // 拿出每一个对象中的 “第num+1列” 的数据
                valueArr.push(item[`第${this.state.num+1}列`])
                xArr.push(index)
        })
        let max= valueArr[0]
        let min = valueArr[0]
        let dataSource = []

        valueArr.map((item,index)=>{
            if(item>max){
                max= item
              }
              if(item<min){
                min= item
              }
              dataSource.push([
                index,Number(item)
              ])
        })
         max = Math.ceil(max) //向上取整
         min = parseInt(min) //向下取整
        this.setState({
          max:max,min:min,dataSource:dataSource,
          visible:true,
        })
    }

    // 数字输入框改变
    onChange=(value)=>{
        this.setState({
            num:value
        })
    }
    // 关闭
    onClose=()=>{
        this.setState({
            visible:false,
        })
    }

    getOption=()=>{
      const {max,min,dataSource} = this.state;
      let result = _createChart(max,min,dataSource)
      return result;
    }

      render(){
          const {visible,dataSource} = this.state;
      
        
        return(
            <div>
                <Space>
                <span>请输入需要生成折线图的传感器编号：</span><InputNumber min={1} max={this.props.max}  onChange = {this.onChange}>
                        </InputNumber><Button type ="primary"  size="middle" onClick={this.onOk}> 确认</Button>
                </Space>
                <Modal
                destroyOnClose  = {true}
                title="查看折线图" 
                visible ={visible}
                width = {1500}
                onCancel = {this.onClose}
                footer={null}
            >
              <ReactEcharts style={{width:'950 px',height:'1000px',margin:'0px'}} option={this.getOption()} />
                {/* <Line {...config} /> */}
            </Modal>
            </div>
        )
      }
  
}
export default CreateLineChart;