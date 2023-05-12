import React from 'react'
import { useSelector } from 'react-redux'
import { history } from '@vitjs/runtime'
import LoginForm from '../components/LoginForm'
import Title from '../components/common/Title'
import * as S from './index.styles'

const Login = () => {
  const { isLoading } = useSelector(state => state.auth)
  return (
    <>
      <Title>Welcome Back!</Title>
      <LoginForm />
      {/* <S.GobackBtn
        disabled={isLoading}
        onClick={() => !isLoading && history.push('/auth/forgot-password')}
      >
        忘記密碼?
      </S.GobackBtn> */}
    </>
  )
}

export default Login
