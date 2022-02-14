import styled, { keyframes } from 'styled-components/macro';
const spinning = keyframes`
from{
    transform: rotate(0deg)
}to{
    transform: rotate(360deg);
}
`;

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
