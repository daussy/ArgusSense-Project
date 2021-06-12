import {Component} from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/radar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import {radarData} from './chart-config'
import {dataBJ} from './data-config'


var lineStyle = {
    normal: {
        width: 1,
        opacity: 0.5
    }
};

let dataConfig = [ [55,9,56,0.46,18,6,1],  
[25,11,21,0.65,34,9,2],
[56,7,63,0.3,14,5,3],
[33,7,29,0.33,16,6,4],
[42,24,44,0.76,40,16,5],];
let data = dataConfig;
let now = 4;
function randomData() {
    if(now == dataBJ.length-1){
        now = 0;
    }else{
        now = now + 1;
    }
    let arr = dataBJ[now]
    return arr;
}
export default class CreateRadar extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('radar-container'));
        let series = {
            name: '传感器1',
            type: 'radar',
            lineStyle: lineStyle,
            data: data,
            symbol: 'none',
            itemStyle: {
                color: '#61a2ce'
            },
            areaStyle: {
                opacity: 0.1
            }
        }
        radarData.series = series;
          // 绘制图表
        myChart.setOption(radarData)

        this.timer = setInterval(function(){
            for (var i = 0; i < 1; i++) {
                data.shift();
                data.push(randomData());
            }
            myChart.setOption({
                series:{
                    name: '传感器1',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: data,
                    symbol: 'none',
                    itemStyle: {
                        color: '#61a2ce'
                    },
                    areaStyle: {
                        opacity: 0.1
                    }
                }
            })
        },3000)
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);   
    }
    render(){
        return(
            <div id="radar-container" style={{width:"100%", height: 450 }}></div>
        )
    }
}

