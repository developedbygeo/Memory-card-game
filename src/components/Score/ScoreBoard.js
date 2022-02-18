import { StyledSection } from '../shared/UI/Container.styled';
import Score from './Score';

const sectionFlexSettings = {
  align: 'center',
  justify: 'space-between',
  dir: 'row',
};

const ScoreBoard = () => {
  return (
    <StyledSection flexSettings={sectionFlexSettings} width="70%">
      <Score BgClr="#6482a6" type="Current" />
      <Score BgClr="#ef4444" type="Best" />
    </StyledSection>
  );
};

export default ScoreBoard;
