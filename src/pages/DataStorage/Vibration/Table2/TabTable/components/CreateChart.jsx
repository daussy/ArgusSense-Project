import React, { Component } from 'react'
import {_createChart} from './chart.config.js'

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

export class CreateChart extends React.Component {
    /**
     * 初始化id id是随机生成的一串唯一的字符串
     */
    constructor(props) {
        super(props)
        // let id = ( '_' + Math.random()).replace('.','_');
        // this.state = {
        //     chartId : 'chart' + id
        // }
    }
    /**
     * 生成图表，主要做了一个判断，因为如果不去判断dom有没有生成，
     * 在后面如果定期去更新图表，每次生成一个dom节点会导致浏览器
     * 占用的cpu和内存非常高，踩过坑。
     * 这里的config就是引入的配置文件中的config,文件头部会有说明
     */
    // initChart(id) {
    //     var myChart = echarts.init(document.getElementById(id));
    //     myChart.setOption(config)
    // }
    componentDidMount() {
        /**
         * 在这里去调用生成图表的方法是因为，在组件加载后生成
         * dom节点，这个时候canvas才能根据id去绘制图表
         * 在这里去写了一个setTimeout修改了其中的一些数据，来                                         
         * 测试图表的刷新，是否刷新了，后期大家可能是定期去某
         * 接口中获取数据，方法同理
         */                
        // this.initChart(this.state.chartId);
        // setTimeout(()=>{
        //     console.log('刷新')
        //     config.series[0].data = [
        //         {value:335, name:'中国'},
        //         {value:310, name:'美国'},
        //         {value:274, name:'英国'},
        //         {value:235, name:'俄罗斯'},
        //         {value:400, name:'法国'}
        //     ].sort(function (a, b) { return a.value - b.value; })
        //     this.initPie(this.state.pieId);
        // },1000*5)
        this.getOption()
    
    }
    componentDidUpdate() {
        // console.log('componentDidUpdate!')
        // this.initChart()
    }
    getOption = () =>{
        // console.log(this.props,'this.props.result')
        // const {max,min } = this.state
        // //生成纵坐标
        // var a = (max-min)/10
        // let yAxisData = []
        // let e = min+a
        // for(let i =0;i<10;i++){
        //     yAxisData.push(e)
        //     e=e+a
        // }
        // console.log(yAxisData,'yAxisData')
        // console.log('this.state.xdataSource',this.state.xdataSource)
       /*  return {
            title: {
                text:''
            },
            tooltip: {},
            // legend: {
            //     data:['销量','库存']
            // },
            xAxis: {
                name: '采样时间',
                boundaryGap: false, 
                data:[0,1,2,3,4,5,6,7,8,9,10]
            },
            yAxis: {
                name: '参数值',
                type:'value',
                // min:this.state.min,
                // max:this.state.max,
                splitNumber:20,
                axisTick:{
                    length:8
                } 
            },
            series: [{
                name: 'dataSource',
                type: 'line',
                data: [100,200,300,400,500,600,700,800]
            },
            // {
            //     name: '库存',
            //     type: 'line',
            //     data: stores
            // }
        ]
        }; */
        let result = _createChart(this.props.result)
        return result;
    }
    render() {
        return (
            <div>
                <ReactEcharts style={{width:'950 px',height:'1000px',margin:'0px'}} option={this.getOption()} />
            </div>
        )
    }
}
export default CreateChart