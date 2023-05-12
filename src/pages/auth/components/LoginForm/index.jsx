import React from 'react'
import { Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { loginRequest } from '@app/pages/auth/slice'
import { getRequiredRule, EMAIL_RULE } from '@app/components/constants/formPatterns'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const onFinish = values => {
    dispatch(loginRequest(values))
  }

  const formRules = {
    email: [getRequiredRule('信箱'), EMAIL_RULE],
    password: [getRequiredRule('密碼')]
  }

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item name="email" rules={formRules.email}>
        <Input prefix={<MailOutlined />} placeholder="admin@abc.com" />
      </Form.Item>
      <Form.Item name="password" rules={formRules.password}>
        <Input.Password prefix={<LockOutlined />} placeholder="wildcard character" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          登入
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
