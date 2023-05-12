import React from 'react'
import { history, Link, Redirect, useLocation } from '@vitjs/runtime'
import { ProLayout } from '@ant-design/pro-layout'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import AvatarDropdown from './components/AvatarDropdown'
import { readAccToken, readUser, deleteAccToken } from '@app/services/localStorage.service'
import Logo from '@app/assets/logo.png'
import { message, BackTop } from 'antd'

const MainLayout = props => {
  const location = useLocation()
  const isLogin = readAccToken()
  const settings = {
    fixSiderbar: true,
    layout: 'mix'
  }

  const getRoleMenuData = menuData => {
    if (!readUser()?.role || readUser()?.role === 'user') {
      message.warn('登入帳號權限有誤，請重新登入')
      deleteAccToken()
      history.push('/auth/login')
    }
    let mainLayer = menuData?.filter(element => element?.authority?.includes(readUser()?.role))
    const secondMenu = mainLayer.map(element => ({
      ...element,
      children: element?.children
        ? element?.children.filter(childElement =>
            childElement?.authority?.includes(readUser()?.role)
          )
        : null
    }))
    const recentMenu = secondMenu.map(element => ({
      ...element,
      children: element?.children
        ? element?.children
            .filter(childElement => childElement?.authority?.includes(readUser()?.role))
            .map(innerElement => ({
              ...innerElement,
              children: innerElement?.children?.filter(childElement =>
                childElement?.authority?.includes(readUser()?.role)
              )
            }))
        : null
    }))
    return recentMenu
  }

  return isLogin ? (
    <ProLayout
      {...props}
      {...settings}
      logo={Logo}
      title=""
      onMenuHeaderClick={() => history.push('/')}
      fixedHeader={true}
      headerContentRender={props => {
        const { collapsed, onCollapse, isMobile } = props
        return (
          <span
            onClick={() => onCollapse?.(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '20px',
              marginLeft: isMobile ? '16px' : 0
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        )
      }}
      rightContentRender={() => (
        <AvatarDropdown
          currentUser={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            ...readUser()
          }}
        />
      )}
      menuDataRender={menuData => getRoleMenuData(menuData)}
      menuItemRender={(menuItemProps, defaultDom, props) => {
        const { collapsed, onCollapse, isMobile } = props
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom
        }
        return (
          <Link to={menuItemProps.path} onClick={() => isMobile && onCollapse(!collapsed)}>
            {defaultDom}
          </Link>
        )
      }}
    >
      <BackTop />
      {props.children}
    </ProLayout>
  ) : (
    <Redirect to="/auth/login" />
  )
}

export default MainLayout
