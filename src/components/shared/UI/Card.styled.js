import styled, { css } from 'styled-components';
import { flexMixin } from '../mixins';

const maxCard = css`
  height: 100%;
  width: 100%;
`;

const standardCard = css`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;

const imageCard = css`
  ${flexMixin('center', 'center', 'row')}

  width: 100%;
  height: 100%;
  max-height: 25rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    /* transform: scale(1.1); */
    box-shadow: 3px 5px 5px 5px;
    color: ${({ theme }) => theme.colors.cardSelect};
  }
  & > img {
    min-width: 65%;
    width: content-width;
    height: 90%;
    margin: auto;
    border-radius: 1rem;
  }
`;

const isImageCard = ({ imageCont }) => imageCont && imageCard;

const getCardStyling = ({ max }) => {
  if (max) {
    return maxCard;
  } else {
    return standardCard;
  }
};

const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  ${getCardStyling}
  ${isImageCard}
`;

export default Card;
