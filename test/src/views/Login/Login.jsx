import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Input,
  Form,
  Button,
  Divider,
  message,
  notification,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/api/account';
import { useRequest } from 'ahooks';
import { setToken, getToken } from '@/utils/auth';
import style from './login.module.less';

const Login = (props) => {
  const { history } = props;
  const [loading, setLoading] = useState(false);

  const handleSubmitFinish = (res) => {
    // 暂时模拟用户登录信息
    switch (res.username) {
      case 'admin':
        res.auth = 0;
        break;
      default:
        res.auth = 1;
    }
    localStorage.setItem('user', JSON.stringify(res));
    // setLoading(true);
    // setTimeout(() => {
    //   message.success('登录成功！');
    //   setLoading(false);
    //   history.push('/');
    // }, 1000);

    const user = {
      account: res.username,
      password: res.password,
    };
    run(user);
    setLoading(true);
  };

  const { run } = useRequest((user) => login(user), {
    manual: true,
    onSuccess: (ret) => {
      console.log(ret);
      setToken(ret.data.token);
      message.success('登录成功！');
      setLoading(false);
      history.push('/');
    },
    onError: (ret) => {
      console.log(ret.message);
      message.error('登录失败！');
      setLoading(false);
    },
  });

  useEffect(() => {
    // 判断已登录之后，直接跳转到主页
    if (getToken()) {
      history.push('/');
    } else {
      notification.open({
        message: '管理平台快速模板',
        duration: null,
        description: '账号admin, 密码123456',
      });
    }
    return () => {
      if (notification) notification.destroy();
    };
  }, []);

  return (
    <Layout className={style.login}>
      <div className={style.container}>
        <div className={style.loginForm}>
          <h3>管理平台</h3>
          <Divider />
          <Form onFinish={handleSubmitFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="用户名" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input placeholder="密码" prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={style.loginFormBtn}
                loading={loading}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
