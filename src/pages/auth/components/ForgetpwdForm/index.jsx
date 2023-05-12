import React from 'react'
import { Form, Input, Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getRequiredRule, EMAIL_RULE } from '@app/components/constants/formPatterns'
import { forgetPwdRequest } from '@app/pages/auth/slice'

const FrogetPwdForm = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const onFinish = values => {
    dispatch(forgetPwdRequest(values))
  }

  const formRules = {
    email: [getRequiredRule('信箱'), EMAIL_RULE]
  }

  return (
    <Form name="basic" onFinish={onFinish}>
      <Form.Item name="email" rules={formRules.email}>
        <Input prefix={<MailOutlined />} placeholder="信箱" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" isLoading={isLoading}>
          送出
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FrogetPwdForm
