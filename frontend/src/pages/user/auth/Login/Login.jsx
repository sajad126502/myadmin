import React, { useContext, useEffect } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import './Login.css'; // Import CSS file for custom styling
import { useNavigate } from 'react-router-dom';
import Context from '../../../../context/context';

const Login = () => {
    const { adminDashboardData, user, login, loading } = useContext(Context)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        try {
            await login(values)
        } catch (error) {
            console.log(error)
            // alert(error?.response?.data?.msg)
        }
    };
    useEffect(() => {
        if(user){

            if (user?.role == "admin") {
                navigate("/admin")
            }
            else {
                navigate("/")
            }
        }
    }, [user])
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-container d-flex flex-column justify-content-center">
            {loading ? <Spin /> : <div className="login-inner-container p-md-4 p-2">
                <h1 className="login-title">Login</h1>
                <Form
                    name="login"
                    layout='vertical'
                    requiredMark={false}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Email"
                        className="my-1 py-1"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        className="my-1 py-1"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item >
                        <Button type="primary" loading={loading} htmlType="submit" style={{ width: '100%' }}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>

            </div>
            }
        </div>
    );
};

export default Login;
