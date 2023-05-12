import React from 'react'

import { history } from '@vitjs/runtime'
import { ArrowLeftOutlined } from '@ant-design/icons'
import * as S from './index.styles'

const HeaderWrapper = ({ children, showGoBack = false }) => {
  return (
    <S.Section style={{ paddingInlineStart: showGoBack ? 20 : 40 }}>
      {showGoBack && (
        <ArrowLeftOutlined onClick={() => history.go(-1)} style={{ marginRight: 20 }} />
      )}
      {children}
    </S.Section>
  )
}

export default HeaderWrapper
