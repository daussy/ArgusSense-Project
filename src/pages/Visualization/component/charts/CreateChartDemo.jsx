import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

let  data  = new Array(10).fill(0),  data2  = new Array(10).fill(0), data3 = new Array(10).fill(0),now = 0,oneDay = 1
let value = Math.random() * 1000;
function randomData() {
    now = now + 1;
    value = value + Math.random() * 10 - 10;
    return {
        name: now.toString(),
        value: [
            now,
            Math.random() * 100
        ]
    }
}
 
function randomData2() {
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            now,
            Math.random() * 100
        ]
    }
}
function randomData3() {
    value = value + Math.random() *15 - 10;
    return {
        name: now.toString(),
        value: [
            now,
            Math.random() * 100
        ]
    }
}

class EchartsTest extends Component {
    constructor(props){
        super(props)

        this.state= {
            now:0,
            data :[], 
            data2 :[]
        }
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart-container'));
        // 绘制图表
        myChart.setOption({
            backgroundColor:'rgba(2, 65, 145, 0)',
            color:[

            ],
            title: {
                text: '振动信号',
                textStyle:{
                    color:"#ffffff",
                    fontWeight:"bolder",
                }
            },
            tooltip: { //跟随鼠标显示数值
                trigger: 'axis'
            },
            legend: {
                data: ['传感器1', '传感器2', '传感器3']
            },
                    xAxis: {
                        type: 'value',
                        nameTextStyle:{
                            color:"#ffffff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ffffff"
                            }
                        }
                        // data:data
                    },
                    yAxis: {
                        type: 'value',
                        splitLine:{show: false},//去除网格线
                        nameTextStyle:{
                            color:"#ffffff"
                        },
                        axisLine:{
                            lineStyle:{
                                color:"#ffffff"
                            }
                        }
                    },
                    series: [{
                        name: '传感器1',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: data,
                        lineStyle:{
                            width:1,
                            color:"#71a6e2"
                        }
                            },
                        {
                        name: '传感器2',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: data2,
                        lineStyle:{
                            width:1,
                            color:"#b5ceea",

                        },
                    },
                    
                    {
                        name: '传感器3',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: data2,
                        lineStyle:{
                            width:1,
                            color:"#b36868",

                        }
                    },
                        // areaStyle:{
                        //     normal:{
                        //        //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
 
                        //             offset: 0,
                        //             color: 'rgba(80,141,255,0.39)'
                        //         }, {
                        //             offset: .34,
                        //             color: 'rgba(56,155,255,0.25)'
                        //         },{
                        //             offset: 1,
                        //             color: 'rgba(38,197,254,0.00)'
                        //         }])
 
                        //     }
                        // },
                ],
                   
        });
 


     this.timer =   setInterval(function () {
            
                for (var i = 0; i < 1; i++) {
                    if(data.length <20){
                        data.push(randomData());
                        data2.push(randomData2());
                        data3.push(randomData3());
                    }else{
                        data.shift();
                        data.push(randomData());
                        data2.shift();
                        data2.push(randomData2());
                        data3.shift();
                        data3.push(randomData3());
                    }
                    // data.shift();
                    // data.push(randomData());
                    // data2.shift();
                    // data2.push(randomData2());
                    // data3.shift();
                    // data3.push(randomData3());
                }
            
                myChart.setOption({
                series: [{
                    name: '传感器1',
                    type: 'line',
                    showSymbol: false,
                    hoverAnimation: false,
                    data: data,
                    lineStyle:{
                        width:1,
                        color:"#71a6e2"
                    }
                        },
                    {
                            name: '传感器2',
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: data2,
                            lineStyle:{
                                width:1,
                                color:"#b5ceea",
    
                            }
                    },
                    {
                        name: '传感器3',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: data3,
                        lineStyle:{
                            width:1,
                            color:"#b36868",

                        }
                    }
                    ]
                });
                myChart.setOption({
                    xAxis: [{
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    nameTextStyle:{
                        color:"#ffffff"
                    },
                    axisLine:{
                        lineStyle:{
                            color:"#ffffff"
                        }
                    },
                    min: +now,
                    max: +10
                }]
                });
            
            }, 3000);

    }

    componentWillUnmount(){
        clearInterval(this.timer);   
    }
    render() {
        return (
            <div id="chart-container" style={{width:"350px", height: 450 }}></div>
        );
    }
}

export default EchartsTest;
