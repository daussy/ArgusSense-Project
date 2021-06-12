import React, { Component } from 'react';

//antd
import { Tabs} from 'antd';

//组件
import VibrationIndex from './Vibration/VibrationIndex.jsx'
import SequenceIndex from './Sequence/index.jsx'
import ImageIndex  from './Image/index'
const { TabPane } = Tabs;

export default class DataStorage extends Component {
  static displayName = 'DataStorage';

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const tabs = [
      { tab: '振动数据', key: '1',content:( <VibrationIndex></VibrationIndex> )},
      { tab: '时序数据', key: '2', content:(<SequenceIndex></SequenceIndex>) },
      { tab: '图像数据', key: '3',content:(<ImageIndex></ImageIndex>)  },
    ];

    return (
        <div >
          <Tabs defaultActiveKey="1" type="card" size={"large"} style ={TabsStyle}>
       
              {tabs.map((item) => {
            return (
              <TabPane key={item.key} tab={item.tab} >
                {item.content}
              </TabPane>
            );
          })}
        </Tabs>
        </div>
    );
  }
}

const TabsStyle ={
  backgroundColor: "rbag($color:#e8e9ec,$alpha: 0.5)"
}

