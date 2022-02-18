import styled, { css } from 'styled-components';
import { flexMixin } from '../../mixins';
import { houdiniAct } from '../Modal/Modal.styled';

const errorBg = css`
  background-color: #690000;
`;

const successBg = css`
  background-color: #1ad1b9;
`;

const getDynamicStyle = ({ status }) => {
  if (status === 'error') {
    return errorBg;
  }
  return successBg;
};

const StyledNotification = styled.section`
  position: absolute;
  top: -1%;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 0.5rem 10%;
  color: ${({ theme }) => theme.colors.white};
  animation: ${houdiniAct} 200ms ease-in-out;
  ${flexMixin('center', 'center', 'row')};
  ${getDynamicStyle};

  & > h2 {
    margin-right: 2rem;
  }

  & > h2,
  & > p {
    font-size: 1.5rem;
  }
`;

export default StyledNotification;
