
const radarData ={
        backgroundColor:'rgba(2, 65, 145, 0.3)',
        title: {
            text: '数据-雷达图',
            left: 'center',
            textStyle: {
                color:"#ffffff",
                fontWeight:"bolder",
            }
        },
        tooltip: { //跟随鼠标显示数值
            trigger: 'axis'
        },
        legend: {
            bottom: 5,
            data: ['传感器1', '传感器2', '传感器3'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        radar: {
            indicator: [
                {name: 'AQI', max: 300},
                {name: 'PM2.5', max: 250},
                {name: 'PM10', max: 300},
                {name: 'CO', max: 5},
                {name: 'NO2', max: 200},
                {name: 'SO2', max: 100}
            ],
            shape: 'circle', //雷达图绘制类型，
            splitNumber: 5,
            name: {
                textStyle: {
                    color: '#71e2d9'
                }
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线
                lineStyle: {
                    color: [
                        'rgba(113, 226, 217, 0.1)', 'rgba(113, 226, 217, 0.2)',
                        'rgba(113, 226, 217, 0.4)', 'rgba(113, 226, 217, 0.6)',
                        'rgba(113, 226, 217, 0.8)', 'rgba(113, 226, 217, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: { //radar.axisLine
                lineStyle: {
                    color: 'rgba(113, 226, 217, 0.5)'
                }
            }
        },
     
    
}

export {radarData};