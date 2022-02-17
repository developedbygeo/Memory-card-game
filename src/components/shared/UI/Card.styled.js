import styled, { css } from 'styled-components';

const maxCard = css`
  height: 100%;
  width: 100%;
`;

const standardCard = css`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
`;

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
  background: ${({ theme, BgClr }) => BgClr || theme.colors.secondary};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.45);
  ${getCardStyling}
`;

export default Card;
