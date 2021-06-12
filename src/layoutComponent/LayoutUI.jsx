//导入布局组件
import NavUI from './Nav/NavUI';
import ContentContainer from './contentContainer/ContentContainer';
// antd
import {Affix,Button} from 'antd';
// router
import {Link} from 'react-router-dom';
const LayoutUI = ()=>(
    <div className = "layout">
    <div className ="container-fluid" style = {{"padding":'0px'}}>
    <div   style = {{"--bs-gutter-x":0}} >
        <Affix style={{ position: 'absolute', top: 700, left: 0 }}>
            <Link to ='/Visualization'><Button type="dashed" ghost >进入可视化系统 </Button></Link>
        </Affix>
        <NavUI></NavUI>
        <ContentContainer></ContentContainer>
    </div>
    </div>

</div>
)

export default LayoutUI;

