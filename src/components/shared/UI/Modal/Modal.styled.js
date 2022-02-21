import styled, { css } from 'styled-components';

import { devices } from '../../breakpoints';
import { flexMixin } from '../../mixins';
import { starAnimations, houdiniAct } from '../../animations';

const max = css`
  width: 100%;
  height: 100%;
`;

const responsiveWin = css`
  @media ${devices.mobileSS} {
    width: 90vw;
    padding: 2rem;
  }
  @media ${devices.tablet} {
    justify-content: space-around;
    & > svg {
      height: 60%;
    }
  }
  @media ${devices.laptopM} {
    height: 75vh;
    width: 60vw;
  }
  @media ${devices.landscapeMobileSS} {
    width: 70vw;
    height: 80vh;
  }
`;

const getModalStyle = ({ purpose }) => {
  if (purpose === 'intro') {
    return flexMixin('space-between', 'flex-start', 'column');
  }
  return flexMixin('center', 'flex-start', 'column');
};

const getWinResponsiveStyle = ({ purpose }) => {
  if (purpose === 'win') {
    return responsiveWin;
  }
};

const backdropStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  ${max};
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.65);
`;

const modalStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 30;
  background-color: white;
  transform: translate(-50%, -50%);
  padding: ${({ modPadding }) => modPadding || '2rem'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  min-height: 25vh;
  animation: ${houdiniAct} 400ms ease-in-out;
  ${getModalStyle};
  & > button {
    align-self: flex-end;
  }
  & > div {
    width: 100%;
    ${flexMixin('flex-end', 'flex-end', 'row')}
    gap: 2rem;
  }
  span {
    color: ${({ theme }) => theme.colors.headerBg};
    font-weight: bold;
    text-decoration: underline;
  }
  h2 {
    color: ${({ theme }) => theme.colors.headerBg};
  }
  p {
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    margin-block: 1rem;
  }
  svg {
    align-self: center;
    width: 75%;
    height: 50%;
    #fwTertiary {
      animation: ${houdiniAct} 6s ease-in-out infinite alternate-reverse;
    }
    #fwSecondary {
      animation: ${houdiniAct} 5s ease-in-out infinite alternate-reverse;
    }
    #mainStar {
      animation: ${starAnimations} 7s linear infinite;
    }
  }
  @media ${devices.mobileSS} {
    min-height: 50vh;
    width: 80vw;
    padding: 3rem;
    ${getWinResponsiveStyle};
    p {
      line-height: 3rem;
    }
  }
  @media ${devices.mobileS} {
    min-height: 30vh;
  }
  @media ${devices.laptop} {
    width: 60vw;
  }
`;

const getDivStyle = (props) => {
  if (props.backdrop) {
    return backdropStyle;
  }
  return modalStyle;
};

const DynamicDiv = styled.div`
  ${getDivStyle}
`;

export default DynamicDiv;
