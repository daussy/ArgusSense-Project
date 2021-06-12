import React,{Component} from 'react'
// antd
import {Button,Select,Form  ,Modal,Input,Space} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// style
import '../../style.scss'


// 导入方法
import {_message,_vibPngSelectPage,_viblabel} from './functionList'

const { Option } = Select;

class AddLabel extends Component{
    constructor(props){
        super(props)

        this.state ={
            visible:false,
       
        }
    }

    
  // 打开编辑弹窗
  onOpen = () => {
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

    /**
   * 提交编辑表单
   */
  handleSubmit = (values) => {
    let pngId  = this.props.onClick().id
    _viblabel(values.labelVal,pngId)
    this.onClose();
  };


    render(){
        const{visible} = this.state;

        return(

            <div>
              <Space>
              <Button 
                        // size = {"small"}
                        // style = {{marginLeft:"10px",marginBottom:"10px"}}
                        className = "normalBtn"
                        size = {"small"}
                        onClick = {this.onOpen}
                        >进行标注</Button>
              </Space>

                  <Modal
                    title ={'进行标注'}
                    visible ={visible}
                    onCancel = {this.onClose}
                    footer={null}
                    destroyOnClose= {true}

                  >
                       <Form
                      {...layout}
                      name="进行标注"
                      initialValues={{ remember: true }}
                      onFinish={this.handleSubmit}
                      // onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="标签值"
                        name="labelVal"
                        rules={[{ required: true, message: '必填选项' }]}
                      >
                        <Input />
                      </Form.Item>
                      {/* <Form.Item
                        label="选择类型"
                        name="importer"
                        rules={[{ required: true, message: '必选' }]}
                      >
                         <Select
                          placeholder="请选择要标注的图片类别！"
                          allowClear
                          >
                          <Option value="0">0</Option>
                          <Option value="1">1</Option>
                          <Option value="2">2</Option>
                          </Select>
                      </Form.Item> */}

                      <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                          提交标签值
                        </Button>
                      </Form.Item>
                    </Form>
        
                  </Modal>
            </div>
          
        )
    }

 
}

export default AddLabel;


const layout = {
  labelCol: { span: 6},
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};