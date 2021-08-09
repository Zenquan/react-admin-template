import React, { memo, FC } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import classNames from "classnames";
import { home } from "services";
import { useStore } from 'stores'
import style from './index.module.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface ILogin {
  history: any
}

const Login: FC<ILogin> = ({history}: ILogin) => {

  const { loginStore } = useStore()
  const onFinish = async (values: {
    userName: string,
    passWord: string,
    remember: boolean
  }) => {
    const data = await home.login(values)
    if (data.ret === '0') {
      const { roleType, userName, avatar } = data.data
      await loginStore.setUserInfo({
        roleType,
        userName,
        avatar
      });
      await loginStore.toggleLogin(true, {userName})
      await history.push('/dashboard');
    } else {
      message.error(`${data.msg}, 用户名和密码不符`)
    }
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classNames(style['login'], 'all-center')}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="userName"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="passWord"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember"
          valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default memo(Login);