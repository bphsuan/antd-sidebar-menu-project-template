import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import HeaderWrapper from '@app/components/HeaderWrapper'
import ContentWrapper from '@app/components/ContentWrapper'
import { Result, Button } from 'antd'

const Home = () => {
  return (
    <PageContainer>
      <HeaderWrapper>
        <p>Welcome Home!</p>
      </HeaderWrapper>
      <ContentWrapper>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={<Button type="primary">Back Home</Button>}
        />
      </ContentWrapper>
    </PageContainer>
  )
}

export default Home
