import styled from 'styled-components';
import { flexMixin } from '../mixins';

export const CtaButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.offwhite};
  border: 2px solid #111;
  border-radius: 1rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.ctaText};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  height: 5rem;
  justify-content: center;
  letter-spacing: 0.125rem;
  max-width: 100%;
  padding: 0 3rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  align-self: ${({ alignSelf }) => alignSelf || 'inherit'};

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

export const ThemeButton = styled.button`
  padding: 2rem;
  height: 5rem;
  width: 5rem;
  color: white;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 2.5rem;
  background: transparent;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  ${flexMixin('center', 'center', 'row')};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
  & > svg {
    pointer-events: none;
  }
`;
