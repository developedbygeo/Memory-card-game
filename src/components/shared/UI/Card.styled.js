import styled, { css } from 'styled-components';

const maxCard = css`
  height: 100%;
  width: 100%;
`;

const standardCard = css`
  height: ${({ height }) => height || '2rem'};
  height: ${({ width }) => width || '2rem'};
`;

const getCardStyling = ({ max }) => {
  if (max) {
    return maxCard;
  } else {
    return standardCard;
  }
};

const Card = styled.div`
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);
  ${getCardStyling}
`;

export default Card;
