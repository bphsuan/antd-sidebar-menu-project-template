import styled from 'styled-components'
import { BASE_COLORS, BORDER_RADIUS, media } from '@app/styles/themes/constants'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #e7f3fe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const BackgroundWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media only screen and (${media.lg}) {
    flex-direction: column;
  }
`

export const LoginWrapper = styled.div`
  background-image: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 390px;
  margin-top: 16px;
  padding: 43px 21px;
  background-color: ${BASE_COLORS.white};
  border-radius: ${BORDER_RADIUS};

  form {
    width: 100%;
  }

  form button {
    width: 100%;
    margin-top: -30px;
    border-radius: ${BORDER_RADIUS};
  }

  @media screen and (${media.lg}) {
    padding: 21px;
  }

  @media only screen and (${media.md}) {
    width: calc(60% + 10px);
  }

  @media only screen and (${media.sm}) {
    width: calc(95% + 10px);
  }
`

export const LoginImage = styled.img`
  width: 342px;
  height: 230px;
  margin: 0 65px 0 0;

  @media only screen and (${media.lg}) {
    margin: 0;
  }

  @media only screen and (${media.md}) {
    width: 310px;
    height: 200px;
  }
`
