import React from 'react'
import { history } from '@vitjs/runtime'
import tempImgUrl from '@app/assets/login_decorate.png'
import { readAccToken } from '@app/services/localStorage.service'
import * as S from './index.styles'

const AuthLayout = ({ children }) => {
  const token = readAccToken()
  return token ? (
    history.push('/')
  ) : (
    <S.Wrapper>
      <S.BackgroundWrapper>
        <S.LoginImage src={tempImgUrl} />
        <S.LoginWrapper>{children}</S.LoginWrapper>
      </S.BackgroundWrapper>
    </S.Wrapper>
  )
}

export default AuthLayout
