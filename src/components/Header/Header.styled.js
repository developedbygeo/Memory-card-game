import styled from 'styled-components';
import { flexMixin } from '../shared/mixins';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.headerBg};
  position: relative;
  & > button {
    position: absolute;
    right: 2%;
    top: 30%;
  }
  & > div {
    user-select: none;
    width: 90%;
    height: 100%;
    margin: auto;
    color: ${({ theme }) => theme.colors.white};
    ${flexMixin('flex-start', 'center', 'row')};
    & > img {
      height: 100%;
    }
    & > h1 {
      margin-left: 1rem;
    }
  }
`;

export default StyledHeader;
