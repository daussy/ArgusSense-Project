import React,{Component} from 'react'
// antd
import {Button,Select ,Space ,Modal,Form, Input,InputNumber,Spin} from 'antd';

// style
import '../style.scss'
import {_modelTraining} from './functionList'


const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const formItemArr = [
    {
        label:"模型名称",
        name:"name",
        rule:true,
        content:<Input></Input>
    },
    {
        name:"algorithm",
        label:"算法选择",
        rule:true,
        content:(
            <Select
            placeholder="请选择算法！"
            allowClear
            >
            <Option value="长短时记忆循环神经网络">长短时记忆循环神经网络(LSTM)</Option>
            <Option value="双向集成GRU环神经网络">门控循环单元神经网络(GRN)</Option>
            <Option value="SVR">支持向量回归(SVR)</Option>
            <Option value="RNN">循环神经网络(RNN)</Option>
            </Select>
        )
    },{
        name:"neuronsNumber",
        label:"神经元个数",
        rule:true,
        content:  (
          <Space>
                <InputNumber min={1} max={100}   /> 
                <div>
                推荐个数为32
                </div>
          </Space>
        ) 
    },{
        name:"learningRate",
        label:"学习率",
        rule:true,
        content: (
            <Space>
                <Input    />
                    <div>
                    推荐为0.001
                    </div>
            </Space>
        ) 
    },{
        name:"numEpochs",
        label:"迭代次数",
        content:   <Input  disabled defaultValue = {100}  />
    },{
        name:"dropOut",
        label:"dropOut",
        content:   <Input  disabled defaultValue = {0.5} />
    },{
        name:"networkLayers",
        label:"网络层数",
        content:   <Input  disabled defaultValue = {2} />
    }
]
class ModelTraining extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
            algorithm:"",
            loadings:false,
        }
    }

  /**
   * 提交编辑表单
   */
  handleSubmit = (values) => {
    let record =  this.props.onClick()
    let id = record.preprocessedID
    this.setState(
        { loadings:true},
        ()=>{
            _modelTraining(id,values);
        }
    )
    this.onClose();
  };


  // 打开编辑弹窗
  onOpen = (index) => {
    this.setState({
      visible: true,
    });
  };

  // 关闭弹窗
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

    render(){
        const{visible} = this.state;
        const { loadings } = this.state;
        return(
            <div>
               
                <Button
                // size="small"
                type="normal"
                className = "normalBtn"
                onClick={this.onOpen}
            
                >
                模型训练
                </Button>
                <Modal
                    title="模型训练" 
                    visible ={visible}
                    // width = {320}
                    destroyOnClose= {true}
                    onCancel = {this.onClose}
                    footer={null}
                >
                <Spin  spinning = {loadings} tip="模型训练中...">
                </Spin>
                
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.handleSubmit}
                        >
                            {
                                formItemArr.map((item,index)=>{
                                    return(
                                        <Form.Item
                                        label={item.label}
                                        name={item.name}
                                        
                                        rules={ item.rule?
                                            [
                                        {
                                            required: true,
                                            message: `输入${item.label}`,
                                        },
                                        ]:null
                                    }
                                    >
                                       {item.content}
                                    </Form.Item>
                                    )
                                })
                            }
                        <Form.Item {...tailLayout}>
                            <Button className ="normalBtn"  htmlType="submit" >提交模型训练</Button>
                        </Form.Item>
                        </Form>
                     
                    
                </Modal>
            </div>
          
        )
    }

 
}

export default ModelTraining;

