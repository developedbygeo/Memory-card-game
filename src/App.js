import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getDogData } from './store/dogData-actions';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import { lightTheme, darkTheme } from './components/shared/themeSettings';
import Modal from './components/shared/UI/Modal/Modal';
import { IntroDialogue } from './components/shared/UI/Modal/Dialogues';
import Header from './components/Header/Header';
import ScoreBoard from './components/Score/ScoreBoard';
import CardBoard from './components/Cards/CardBoard';

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const themeChangeHandler = useCallback(() => setIsDarkTheme((prevState) => !prevState), []);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  useEffect(() => {
    dispatch(getDogData());
  }, [dispatch]);

  const disableModalHandler = useCallback(() => setShowIntro((prevState) => !prevState), []);

  const introModal = (
    <Modal onDisable={disableModalHandler} purpose="intro">
      <IntroDialogue onDisable={disableModalHandler} />
    </Modal>
  );

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onThemeChange={themeChangeHandler} darkThemeEnabled={isDarkTheme} />
      {showIntro && introModal}
      <main>
        <ScoreBoard />
        <CardBoard />
      </main>
    </ThemeProvider>
  );
}

export default App;
