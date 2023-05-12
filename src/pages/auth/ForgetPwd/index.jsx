import React from 'react'
import { history } from '@vitjs/runtime'
import FrogetPwdForm from '../components/ForgetpwdForm'
import Title from '../components/common/Title'
import * as S from './index.styles'

import { useSelector } from 'react-redux'

const ForgetPwd = () => {
  const { isLoading } = useSelector(state => state.auth)

  return (
    <>
      <Title>忘記密碼?</Title>
      <FrogetPwdForm />
      <S.GobackBtn disabled={isLoading} onClick={() => history.goBack()}>
        回到登入
      </S.GobackBtn>
    </>
  )
}

export default ForgetPwd
