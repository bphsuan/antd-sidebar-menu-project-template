import styled from 'styled-components'
import { Button } from 'antd'
import { BASE_COLORS } from '@app/styles/themes/constants'

export const GobackBtn = styled(Button)`
  border-width: 0;
  box-shadow: none;
  color: ${BASE_COLORS.gray};

  :disabled {
    background: transparent !important;
  }
`
