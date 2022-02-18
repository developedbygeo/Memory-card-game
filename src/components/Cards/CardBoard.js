import { useSelector } from 'react-redux';

import { StyledSection } from '../shared/UI/Container.styled';
import { LoadingSpinner } from '../shared/UI/LoadingSpinner';
import MemoryCard from './MemoryCard';

const sectionGridSettings = {
  cols: 'repeat(3, 1fr)',
  rows: 'repeat(3, 1fr)',
};

const CardBoard = () => {
  const { fetched, data } = useSelector((state) => state.dogData);

  // TODO use fetched to either render dogCards or the loading spinner & err msg

  const dogCards = data.map((element) => (
    <MemoryCard key={element.key} imageCont="true">
      <img src={element.path} alt={`a lovely dog fetched online - ${element.key}/${data.length}`} />
    </MemoryCard>
  ));

  return (
    <StyledSection width="70%" customGap="1rem" gridSettings={sectionGridSettings}>
      {dogCards}
    </StyledSection>
  );
};

export default CardBoard;
