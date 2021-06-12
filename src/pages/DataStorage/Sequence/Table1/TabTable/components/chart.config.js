// const data = [
//     ["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],

// ]
// import data from './data.config'
function createMarkLine(max,min){
    // 生成横线
    let markLine = []
    let index = (max-min)/5 //
    for(var i =1; i<=5;i++){
        let a = min + index*i
        markLine.push(a)
    }
    return markLine
}

export function _createChart(max,min,data){
    // backgroundColor: '#2c343c',
    let markLine = createMarkLine(max,min )
    let chartconfig = {
        title: {
            text: '传感器数据',
            left: '1%',
            top: 20,
            textStyle: {
                color: '#434343'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '5%',
            right: '15%',
            bottom: '10%'
        },
        xAxis: {
            data: data.map(function (item) {
                return item[0];
            })
        },
        yAxis: {},
        toolbox: {
            right: 10,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        }, //g工具盒
        dataZoom: [{
            startValue: '0'
        }, {
            type: 'inside'
        }],
        // visualMap: {
        //     top: 50,
        //     right: 10,
        //     pieces: [
        //         {
        //         gt: 0,
        //         lte: 50,
        //         color: '#93CE07'
        //     }, {
        //         gt: 50,
        //         lte: 100,
        //         color: '#FBDB0F'
        //     }, {
        //         gt: 100,
        //         lte: 150,
        //         color: '#FC7D02'
        //     }, {
        //         gt: 150,
        //         lte: 200,
        //         color: '#FD0100'
        //     }, {
        //         gt: 200,
        //         lte: 300,
        //         color: '#AA069F'
        //     }, {
        //         gt: 300,
        //         color: '#AC3B2A'
        //     }],
        //     outOfRange: {
        //         color: '#999'
        //     }
        // },
        series: {
            name: 'value',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                lineStyle: {
                    color: '#333'
                },
                data: [
                // {
                //     yAxis: 50
                // }, {
                //     yAxis: 100
                // }, {
                //     yAxis: 150
                // }, {
                //     yAxis: 200
                // }, {
                //     yAxis: 300
                // },
                markLine.map((item,index)=>{
                    return{yAxis:item}
                })
            ]
            }
        }
    }

    return chartconfig
 
};