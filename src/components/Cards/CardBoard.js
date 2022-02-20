import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { dogSliceActions } from '../../store/dogData-slice';
import { scoreSliceActions } from '../../store/score-slice';

import { StyledSection } from '../shared/UI/Container.styled';
import LoadingSpinner from '../shared/UI/LoadingSpinner';
import MemoryCard from './MemoryCard';

const sectionGridSettings = {
  cols: 'repeat(3, 1fr)',
  rows: 'repeat(3, 1fr)',
};

const sectionFlexSettings = {
  justify: 'space-evenly',
  align: 'center',
  direction: 'row',
};

const CardBoard = () => {
  const { fetched, data } = useSelector((state) => state.dogData);
  const dispatch = useDispatch();

  const dogCardHandler = useCallback(
    (id) => {
      const hasCardBeenClicked = data.find((dog) => dog.key === id).clicked;
      dispatch(dogSliceActions.clickOnCard({ id }));
      if (!hasCardBeenClicked) {
        dispatch(scoreSliceActions.increment());
      } else {
        dispatch(scoreSliceActions.lost());
        dispatch(dogSliceActions.resetFlags());
      }
    },
    [data, dispatch]
  );

  const dogCards = data.map((element) => (
    <MemoryCard onDogSelection={dogCardHandler.bind(null, element.key)} key={element.key} imageCont="true">
      <img
        src={element.path}
        draggable="false"
        alt={`a lovely dog that was found online - ${element.key}/${data.length}`}
      />
    </MemoryCard>
  ));

  const loadingSuccess = (
    <StyledSection width="70%" customGap="1rem" gridSettings={sectionGridSettings}>
      {fetched && dogCards}
    </StyledSection>
  );

  const loadingError = (
    <StyledSection flexSettings={sectionFlexSettings} width="50%" customGap="1rem" minHeight="75vh">
      <LoadingSpinner />
      <p>Could not load data. Please refresh the page and try again.</p>
    </StyledSection>
  );

  return <>{fetched ? loadingSuccess : loadingError}</>;
};

export default CardBoard;
