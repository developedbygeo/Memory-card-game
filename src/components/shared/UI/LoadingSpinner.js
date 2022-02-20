import styled from 'styled-components/macro';
import { spinning } from '../animations';

const Spinner = styled.div`
  display: inline-block;
  width: 55px;
  height: 55px;
  &:after {
    content: ' ';
    display: block;
    width: 40px;
    height: 40px;
    margin: 0.4rem;
    border-radius: 50%;
    border: 6px solid ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary} transparent
      ${({ theme }) => theme.colors.secondary} transparent;
    animation: ${spinning} 2s linear infinite;
  }
`;
Spinner.displayName = 'Spinner';

const LoadingSpinner = () => {
  return <Spinner></Spinner>;
};

export default LoadingSpinner;
