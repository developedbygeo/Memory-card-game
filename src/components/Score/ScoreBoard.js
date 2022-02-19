import { useSelector } from 'react-redux';

import { StyledSection } from '../shared/UI/Container.styled';
import Score from './Score';

const sectionFlexSettings = {
  align: 'center',
  justify: 'space-between',
  dir: 'row',
};

const ScoreBoard = () => {
  const { currentScore, savedBestScore } = useSelector((state) => state.score);

  return (
    <StyledSection flexSettings={sectionFlexSettings} width="70%">
      <Score BgClr="#6482a6" type="Current" score={currentScore} />
      <Score BgClr="#ef4444" type="Best" score={savedBestScore} />
    </StyledSection>
  );
};

export default ScoreBoard;
