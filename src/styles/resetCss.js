import { css } from 'styled-components'
import { FONT_WEIGHT } from './themes/constants'

export const resetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: var(--scroll-color);
    border-radius: 1.25rem;
    border: 0.375rem solid transparent;
    background-clip: content-box;
  }

  body {
    position: relative;
    font-weight: ${FONT_WEIGHT.medium};
  }

  img {
    display: block;
  }
`
