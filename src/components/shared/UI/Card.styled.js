import styled, { css } from 'styled-components';

import { devices } from '../breakpoints';
import { flexMixin } from '../mixins';
import { bumpText } from '../animations';

const isImageCard = ({ imageCont }) => imageCont && imageCard;

const getCardStyling = ({ max }) => {
  if (max) {
    return maxCard;
  } else {
    return standardCard;
  }
};

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

  & > img {
    min-width: 65%;
    width: content-width;
    height: 90%;
    margin: auto;
    border-radius: 1rem;
  }
  @media (hover: hover) {
    &:hover {
      box-shadow: 3px 5px 5px 5px;
      color: ${({ theme }) => theme.colors.cardSelect};
    }
  }
  @media ${devices.mobileSS} {
    place-self: center;
    max-width: 32vw;
    max-height: 25vh;
    padding: 1rem;
  }
  @media ${devices.mobileS} {
    max-height: 25vh;
    & > img {
      height: 75%;
    }
  }
  @media ${devices.mobileSS} {
    & > img {
      height: 70%;
    }
  }
`;

const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme, BgClr }) => BgClr || theme.colors.cardBgClr};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  ${getCardStyling}
  ${isImageCard}

  &>.bump {
    animation: ${bumpText} 400ms ease-out;
  }
`;

export default Card;
