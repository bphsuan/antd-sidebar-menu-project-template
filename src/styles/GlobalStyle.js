import { createGlobalStyle } from 'styled-components'
import { resetCss } from './resetCss'
import { FONT_WEIGHT, media } from './themes/constants'
import {
  lightThemeVariables,
  commonThemeVariables,
  antOverrideCssVariables
} from './themes/themeVariables'

export default createGlobalStyle`

  ${resetCss}

  [data-theme='light'],
  :root {
    ${lightThemeVariables}
  }

  :root {
    ${commonThemeVariables};
    ${antOverrideCssVariables};
  }

  // --- antd-pro ---

  .ant-pro-global-header-right-content {
    > div > div > span > div {
      padding: 0 15px;
    }
  }

  .ant-dropdown-menu-item {
    padding: 5px 20px;
    text-align: center;
  }

  .ant-page-header {
    display: none;
  }

  .ant-layout-header:first-child {
    display: none;
  }

  .ant-pro .ant-pro-layout .ant-pro-layout-content {
    padding-block: 0;
    padding-inline: 0;
  }

  .ant-pro .ant-pro-layout .ant-pro-layout-bg-list {
    background: none;
    background-color: #FAFAFA;
  }

  .ant-pro-page-container-children-content {
    padding-inline: 0;
    padding-block: 0;
    margin: 56px 0 0;
  }

  .ant-pro-page-container-warp-page-header~.ant-pro-grid-content .ant-pro-page-container-children-content {
    padding-block: 0 !important;
  }

  .ant-pro-global-header-header-actions-avatar{
    &:hover {
      cursor: pointer;
    }
    
    > div {
      &:hover {
        background-color: transparent;
      }
    }
  }

  .ant-pro-global-header-collapsed-button{
    font-size: 18px;
  }

  .ant-drawer-content {
    overflow: visible !important;
  }

  .ant-drawer-body {
    overflow: visible !important;
  }

  .ant-pro-layout .ant-pro-top-nav-header-base-menu.ant-menu-light .ant-menu-item-selected {
    font-weight: ${FONT_WEIGHT.semibold};
  }

  .ant-pro-global-header-collapsed-button {
    display: none;
  }

  .ant-pro-top-nav-header-main-left {
    min-width: 0
  }

  .ant-pro-top-nav-header-logo{
    min-width: 124px;
  }
  
  .ant-pro .ant-pro-layout .ant-pro-sider-actions {
    margin-block: 15px;
  }

  .ant-pro-sider-collapsed-button {
    visibility: hidden;
    @media only screen and (${media.md}) {
      visibility: visible !important;
    }
  }

  .ant-layout-sider-children {
    background-color: #FBFCFD !important;
    ${'' /* overflow: auto !important; */}
  }

  .ant-pro-global-header-logo img {
    height: 35px;
    @media only screen and (${media.xs}) {
      height: 28px;
    }
  }

  // --- antd ---

  .ant-table-tbody{
    padding: 5 !important;
  }
  .ant-table-tbody > tr > td{
    padding: 10px ;
  }
  .ant-table-tbody > tr:first > td {
    padding: 0 !important;
  }

  .ant-card-type-inner .ant-card-head {
    background: rgba(1, 80, 154, 0) !important;
  }

  .ant-dropdown-menu-item {
    text-align: center;
  }

  .ant-card-type-inner .ant-card-head-title {
    font-size: 16px;
    font-weight: 600;
  }
  .ant-card-type-inner .ant-card-body {
    padding: 25px 24px 5px;
  }

  .ant-card {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
  }

  .ant-back-top {
    width: 120px;
    bottom: 0px;
    left: 50%;
    position: fixed;
    padding: 4.66667px 25.3333px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    border-radius: 50px 50px 0px 0px;
    background-color: rgba(226, 226, 226, 0.67);
    margin-bottom: 0px;

    .ant-back-top-content {
      background-color: transparent !important;
      color: rgba(0, 0, 0, 0.85) !important;
      &:hover {
        background-color: transparent  !important;
        color: rgba(0, 0, 0, 0.85) !important;
      }
    }
  }

  .ant-notification-notice{
    width: 255px !important;
  }
`
