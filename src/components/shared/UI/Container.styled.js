import styled from 'styled-components';
import { flexMixin, gridMixin } from '../mixins';

const getLayout = ({ flexSettings, gridSettings }) => {
  if (flexSettings) {
    return flexMixin(flexSettings.justify, flexSettings.align, flexSettings.dir);
  }
  if (gridSettings) {
    return gridMixin(gridSettings.cols, gridSettings.rows);
  }
};

export const StyledSection = styled.section`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  margin: auto;
  ${getLayout}
  gap: ${({ customGap }) => customGap || 'inherit'};

  h2 {
    color: ${({ theme }) => theme.colors.offwhite};
    & > span {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 700;
    }
  }
`;

export const StyledContainer = styled.div`
  width: ${({ width }) => width || '90%'};
  height: ${({ height }) => height || '95%'};
  ${getLayout}
  overflow-wrap: anywhere;
`;
