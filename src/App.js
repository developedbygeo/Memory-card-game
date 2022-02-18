import useInitial from './hooks/useInitial';

import { getDogData } from './store/dogData-actions';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import { lightTheme, darkTheme } from './components/shared/themeSettings';
import Modal from './components/shared/UI/Modal/Modal';
import { IntroDialogue } from './components/shared/UI/Modal/Dialogues';
import Header from './components/Header/Header';
import Notification from './components/shared/UI/Notification/Notification';
import ScoreBoard from './components/Score/ScoreBoard';
import CardBoard from './components/Cards/CardBoard';

function App() {
  const { theme, intro, disableModalHandler, shouldNotificationRender, notificationData } =
    useInitial(getDogData);

  const introModal = (
    <Modal onDisable={disableModalHandler} purpose="intro">
      <IntroDialogue onDisable={disableModalHandler} />
    </Modal>
  );

  return (
    <ThemeProvider theme={theme.status ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onThemeChange={theme.handler} darkThemeEnabled={theme.status} />
      {intro.status && introModal}
      <main>
        <ScoreBoard />
        <CardBoard />
        {shouldNotificationRender && <Notification {...notificationData} />}
      </main>
    </ThemeProvider>
  );
}

export default App;
