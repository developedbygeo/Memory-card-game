import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getDogData } from '../store/dogData-actions';
import { scoreSliceActions } from '../store/score-slice';
import { WinDialogue } from '../components/shared/UI/Modal/Dialogues';
import Modal from '../components/shared/UI/Modal/Modal';

const useWinner = () => {
  const [showWinnerDialogue, setShowWinnerDialogue] = useState(false);
  const { currentScore } = useSelector((state) => state.score);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentScore === 9) {
      setShowWinnerDialogue(true);
    }
  }, [currentScore]);

  const disableWinModal = useCallback(() => {
    setShowWinnerDialogue((prevState) => !prevState);
    dispatch(scoreSliceActions.reset());
  }, [dispatch]);

  const keepPlayingHandler = useCallback(() => {
    setShowWinnerDialogue(false);
    dispatch(getDogData());
    dispatch(scoreSliceActions.reset());
  }, [dispatch]);

  const winnerModal = (
    <Modal onDisable={disableWinModal} purpose="win">
      <WinDialogue onDisable={disableWinModal} onPlay={keepPlayingHandler} />
    </Modal>
  );

  return { showWinnerDialogue, winnerModal };
};
export default useWinner;
