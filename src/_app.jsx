import React from 'react'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import store from './store/store'
import GlobalStyle from './styles/GlobalStyle'
import { themeObject } from './styles/themes/themeVariables'

export default function CustomApp(props) {
  const { Component } = props
  return (
    <Provider store={store}>
      <meta name="theme-color" content={themeObject['light'].primary} />
      <GlobalStyle />
      <ConfigProvider>
        <Component />
      </ConfigProvider>
    </Provider>
  )
}
