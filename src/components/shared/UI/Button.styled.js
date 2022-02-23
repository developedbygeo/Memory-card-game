import styled, { css } from 'styled-components';
import { flexMixin } from '../mixins';

const commonBtnStyling = css`
  letter-spacing: 0.125rem;
  padding: 0 3rem;
  text-align: center;
  max-width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.ctaText};
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};
`;

export const CtaButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.offwhite};
  border: 2px solid #111;
  border-radius: 1rem;
  box-sizing: border-box;
  font-weight: bold;
  display: flex;
  height: 5rem;
  justify-content: center;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  ${commonBtnStyling}

  &:after {
    background-color: ${({ theme }) => theme.colors.headerBg};
    border-radius: 8px;
    content: '';
    display: block;
    height: 5rem;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #fff;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
`;

export const SecondaryButton = styled.button`
  ${commonBtnStyling}
  border: none;
  background: none;
  outline: none;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.headerBg};
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-width: 3.5px;
  }
`;

export const ThemeButton = styled.button`
  height: 3rem;
  width: 3rem;
  padding: 3rem;
  margin-right: 2rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 2.5rem;
  background: transparent;
  transition: all 200ms ease-in-out;
  text-align: center;
  cursor: pointer;
  ${flexMixin('center', 'center', 'row')};

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.15);
    }
  }
  & > svg {
    pointer-events: none;
  }
`;
