import styled, { css } from 'styled-components';

import { flexMixin, gridMixin } from '../mixins';
import { devices } from '../breakpoints';

const constrainedScore = css`
  width: 70vw;
  justify-content: space-between;
  @media ${devices.landscapeMobileM} {
    width: 60vw;
  }
  @media ${devices.laptop} {
    width: 50vw;
  }
`;

const responsiveError = css`
  justify-content: center !important;
  & > div {
    ${flexMixin('center', 'center', 'column')};
    gap: 2rem;
    width: auto;
    height: auto;
  }
`;

const cardBoardStyling = css`
  flex: 6;
  max-height: 80vh;
  gap: 0.5rem;
  @media ${devices.tablet} {
    width: 100%;
    gap: 0.5rem;
    flex: 8;
  }
  @media ${devices.landscapeMobileS} {
    width: 70vw;
  }
  @media ${devices.landscapeMobileSS} {
    width: 70vw;
  }
  @media ${devices.landscapeMobileM} {
    width: 60vw;
  }
  @media ${devices.laptop} {
    width: 50vw;
    height: 80vh;
    gap: 0.5rem;
    flex: 8;
  }
`;
const scoreBoardStyling = css`
  flex: 1;
  @media ${devices.mobileSS} {
    justify-content: space-evenly;
  }
  @media ${devices.laptop} {
    ${constrainedScore}
  }
  @media ${devices.landscapeMobileS} {
    ${constrainedScore}
  }
  @media ${devices.landscapeMobileSS} {
    ${constrainedScore}
  }
  @media ${devices.landscapeMobileM} {
    ${constrainedScore}
  }
`;

const getLayout = ({ flexSettings, gridSettings }) => {
  if (flexSettings) {
    return flexMixin(flexSettings.justify, flexSettings.align, flexSettings.dir);
  }
  if (gridSettings) {
    return gridMixin(gridSettings.cols, gridSettings.rows);
  }
};

const getResponsiveErrorLayout = ({ hasError }) => hasError && responsiveError;

const getResponsiveLayout = ({ type }) => {
  if (type === 'cardboard') {
    return cardBoardStyling;
  }
  return scoreBoardStyling;
};

export const StyledSection = styled.section`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  min-height: ${({ minHeight }) => minHeight || 'initial'};
  margin: auto;
  ${getLayout}
  ${getResponsiveErrorLayout};
  gap: ${({ customGap }) => customGap || 'inherit'};

  h2 {
    color: ${({ theme }) => theme.colors.offwhite};
    & > span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
    }
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.05rem;
    color: ${({ theme }) => theme.colors.cardBgClr};
  }
  @media ${devices.mobileSS} {
    width: 100%;
    ${getResponsiveLayout}
  }
`;

export const StyledContainer = styled.div`
  width: ${({ customWidth }) => customWidth || '90%'};
  height: ${({ height }) => height || '95%'};
  ${getLayout}
  overflow-wrap: anywhere;
`;
