import { StyledSection } from '../shared/UI/Container.styled';
import MemoryCard from './MemoryCard';

const sectionGridSettings = {
  cols: 'repeat(3, 1fr)',
  rows: 'repeat(3, 1fr)',
};

const CardBoard = () => {
  return (
    <StyledSection
      width="90%"
      gridSettings={sectionGridSettings}
    ></StyledSection>
  );
};

export default CardBoard;
