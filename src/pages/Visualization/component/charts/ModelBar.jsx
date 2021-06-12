import React,{Component} from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入提示框和标题组件
import 'echarts/lib/component/title';


export default class ModelBar extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart-container-bar'));
        // 绘制图表
        myChart.setOption({
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130,20,5,57,68],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        }
        );
 


     this.timer =   setInterval(function () {
            
                // for (var i = 0; i < 1; i++) {
                //     if(data.length <20){
                //         data.push(randomData());
                //         data2.push(randomData2());
                //         data3.push(randomData3());
                //     }else{
                //         data.shift();
                //         data.push(randomData());
                //         data2.shift();
                //         data2.push(randomData2());
                //         data3.shift();
                //         data3.push(randomData3());
                //     }
                //     // data.shift();
                //     // data.push(randomData());
                //     // data2.shift();
                //     // data2.push(randomData2());
                //     // data3.shift();
                //     // data3.push(randomData3());
                // }
            
                // myChart.setOption({
                // series: [{
                //     name: '传感器1',
                //     type: 'line',
                //     showSymbol: false,
                //     hoverAnimation: false,
                //     data: data,
                //     lineStyle:{
                //         width:1,
                //         color:"#71a6e2"
                //     }
                //         },
                //     {
                //             name: '传感器2',
                //             type: 'line',
                //             showSymbol: false,
                //             hoverAnimation: false,
                //             data: data2,
                //             lineStyle:{
                //                 width:1,
                //                 color:"#b5ceea",
    
                //             }
                //     },
                //     {
                //         name: '传感器3',
                //         type: 'line',
                //         showSymbol: false,
                //         hoverAnimation: false,
                //         data: data3,
                //         lineStyle:{
                //             width:1,
                //             color:"#b36868",

                //         }
                //     }
                //     ]
                // });
                // myChart.setOption({
                //     xAxis: [{
                //     type: 'value',
                //     splitLine: {
                //         show: false
                //     },
                //     nameTextStyle:{
                //         color:"#ffffff"
                //     },
                //     axisLine:{
                //         lineStyle:{
                //             color:"#ffffff"
                //         }
                //     },
                //     min: +now,
                //     max: +10
                // }]
                // });
            
            }, 3000);

    }

    componentWillUnmount(){
        clearInterval(this.timer);   
    }
    render() {
        return (
            <div id="chart-container-bar" style={{width:"350px", height: 450 }}></div>
        );
    }
} 