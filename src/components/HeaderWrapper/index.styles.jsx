import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-block-start: 12px;
  padding-block-end: 12px;
  padding-inline-end: 55px;
  box-shadow: 0 1px 2px rgb(56 65 74 / 15%);

  p {
    margin-inline-end: 12px;
    margin-block-end: 0;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
