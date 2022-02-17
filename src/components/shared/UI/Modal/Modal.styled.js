import styled, { css, keyframes } from 'styled-components';
import { flexMixin } from '../../mixins';

const max = css`
  width: 100%;
  height: 100%;
`;

const houdiniAct = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

const getModalStyle = ({ purpose }) => {
  if (purpose === 'intro') {
    return flexMixin('space-between', 'flex-start', 'column');
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
  ${getModalStyle}
  &>button {
    align-self: flex-end;
  }
  span {
    color: ${({ theme }) => theme.colors.headerBg};
    font-weight: bold;
    text-decoration: underline;
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
