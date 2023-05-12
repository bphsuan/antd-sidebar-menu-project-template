import React, { useCallback } from 'react'
import { history } from '@vitjs/runtime'
import { Avatar, Menu } from 'antd'
import { LogoutOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import HeaderDropdown from '../HeaderDropdown'
import { logoutRequest } from '@app/pages/auth/slice'

const AvatarDropdown = ({ currentUser }) => {
  const dispatch = useDispatch()

  const onMenuClick = useCallback(event => {
    const { key } = event
    switch (key) {
      case 'logout': {
        dispatch(logoutRequest())
        break
      }
      case 'profile': {
        history.push('/users/profile')
        break
      }
      case 'role': {
        history.push('/users/role-management')
        break
      }
      default: {
        break
      }
    }
  }, [])

  const menuItems = [
    // {
    //   key: 'profile',
    //   icon: <UserOutlined />,
    //   label: '編輯個人資料',
    //   authority: ['admin']
    // },
    // {
    //   key: 'role',
    //   icon: <UsergroupAddOutlined />,
    //   label: '權限管理',
    //   authority: ['admin']
    // },
    // {
    //   authority: ['admin'],
    //   type: 'divider'
    // },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '登出',
      authority: ['admin']
    }
  ]

  const getRoleMenuData = () => {
    return currentUser?.role
      ? menuItems.filter(element => element.authority.includes(currentUser?.role))
      : menuItems.filter(element => element.key === 'logout')
  }

  const menuHeaderDropdown = (
    <Menu selectedKeys={[]} onClick={onMenuClick} items={getRoleMenuData()} />
  )
  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className="ant-pro-global-header-header-actions-avatar">
        <div>
          <Avatar size="small" src={currentUser?.src} alt="avatar" />
          <span
            style={{
              marginInlineStart: 8
            }}
          >
            {currentUser?.name}
          </span>
        </div>
      </span>
    </HeaderDropdown>
  )
}

export default AvatarDropdown
