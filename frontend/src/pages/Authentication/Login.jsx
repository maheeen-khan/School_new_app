import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../index.css';
import { Container, Row, Col } from 'react-bootstrap';
import classroom from '../../assets/classroom.png';

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const Login = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const onFinish = async values => {

        setLoading(true)
        console.log('Success:', values);
        try {
            const newUser = await axios.post('http://localhost:3000/api/auth/login', values)

            console.log(newUser.data)

            localStorage.setItem('token', newUser.data.token); // store after login

            toast.success("User logged in successfully")


            setTimeout(() => {
                setLoading(false)
                window.location.href = "/";
            }, 2000);

        } catch (error) {
            console.log(error.response.data.message);
            toast.error("User does not exist")
            setLoading(false)
        };
    }
    return (
        <>
            <Container fluid><Row>

                <Col lg={7} md={6} sm={12} className="welcome-banner">

                    <img src={classroom} alt="classroom" className="img-fluid classroom" width={600} />

                </Col>

                <Col className='align-content-center' lg={5} md={6} sm={12} xs={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'monospace', fontSize: '38px', marginBottom: '45px', color: '#161179' }} className='fw-bold'>Login <span style={{ color: 'hsl(210, 72%, 50%)' }}>to your Account</span></h1>
                    <Form
                        name="basic"
                        style={{ maxWidth: 400, margin: '0 auto', marginTop: 30 }}
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email' },
                                { type: 'email', message: 'Please enter a valid email address' }
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Email" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" label={null}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item label={null}>
                            <div style={{ textAlign: 'center' }}>


                                <button alt={loading ? "Logining..." : "Login"} className='user-btn' htmlType="submit">

                                    <i>L</i>
                                    <i>o</i>
                                    <i>g</i>
                                    <i>&nbsp;</i>
                                    <i>i</i>
                                    <i>n</i>

                                </button>

                                <p style={{ marginTop: '20px' }}>Don't have an account? <a href="/signup">Sign up</a></p>
                            </div>

                        </Form.Item>
                    </Form>
                </Col>


            </Row></Container>
        </>
    );
};
export default Login;