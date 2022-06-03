import React, {FormEvent} from "react";
import {useAuth} from "context/auth-context";
import {Form,Input,Button} from 'antd'
import { LongBuuton } from "unauthenticated-app";


export const RegisterScreen = () => {
    const {register} = useAuth()

    const handleSubmit = (values:{username:string,password:string}) => {
        register(values);
      };
      return (
        <Form onFinish={handleSubmit}>
          <Form.Item
            name={"username"}
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder={"用户名"} type="text" id={"username"} />
          </Form.Item>
          <Form.Item
            name={"password"}
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input placeholder={"密码"} type="text" id={"password"} />
          </Form.Item>
          <Form.Item>
            <LongBuuton htmlType={"submit"} type={'primary'}>注册</LongBuuton>
          </Form.Item>
        </Form>
      );

}
