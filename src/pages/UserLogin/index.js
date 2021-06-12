
import './style.scss'
import {Component } from 'react';
import {Link} from 'react-router-dom'
import Footer from '../../layoutComponent/contentContainer/Footer'

// antd
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class UserIndex extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

      // 提交表单
      onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    render(){
        return (
            <div className = {"userLogin-container"}>
                
                {/* <UserLogin className  ={"userLogin-component"}></UserLogin> */}
                <div  className  ={"userLogin-component"}>
                    <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: '请输入用户名！',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: '请输入密码！',
                        },
                        ]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                        </Form.Item>
                
                        <a className="login-form-forgot" href="">
                        忘记密码
                        </a>
                    </Form.Item>
                
                    <Form.Item>
                        <Link to = "/ActionChoose">
                            {/* <Button type="primary" htmlType="submit" className="login-form-button"> */}
                        
                        <div className="button">
                        登录
                        </div>
                        {/* </Button> */}
                        </Link>
                        {/* 或者 <a href="">立即注册！</a> */}
                    </Form.Item>
                    </Form>
                </div>
                <Footer></Footer>
            </div>
          );
    }
}
