import { StyledSection } from '../shared/UI/Container.styled';
import Score from './Score';

const sectionFlexSettings = {
  align: 'center',
  justify: 'space-evenly',
  dir: 'row',
};

const ScoreBoard = () => {
  return (
    <StyledSection flexSettings={sectionFlexSettings} width="80%">
      <Score type="Current" />
      <Score BgClr={'#ef4444'} type="Best" />
    </StyledSection>
  );
};

export default ScoreBoard;
