import React, { FormEvent } from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongBuuton } from "unauthenticated-app";
import Password from "antd/lib/input/Password";
import { useAsync } from "utils/use-async";

export const RegisterScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { register } = useAuth();
  const { run, isLoading } = useAsync(undefined,{throwOnError:true});

  const handleSubmit = async ({
    cpassword,
    ...values
  }: {
    username: string;
    password: string;
    cpassword: string;
  }) => {
    if (cpassword !== values.password) {
      onError(new Error("两次输入密码不同"));
      return;
    }
    run(register(values)).catch(onError);
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
      <Form.Item
        name={"cpassword"}
        rules={[{ required: true, message: "请确认密码" }]}
      >
        <Input placeholder={"确认密码"} type="text" id={"cpassword"} />
      </Form.Item>
      <Form.Item>
        <LongBuuton loading={isLoading} htmlType={"submit"} type={"primary"}>
          注册
        </LongBuuton>
      </Form.Item>
    </Form>
  );
};
