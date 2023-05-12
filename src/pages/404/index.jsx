import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { history } from '@vitjs/runtime'
import { Result, Button } from 'antd'
import './index.styles'

const PageNotFound = () => {
  return (
    <PageContainer>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您造訪的頁面並不存在"
        extra={<Button onClick={() => history.push('/')}>回到首頁</Button>}
      />
    </PageContainer>
  )
}

export default PageNotFound
