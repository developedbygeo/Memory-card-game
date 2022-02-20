import useInitial from './hooks/useInitial';
import useWinner from './hooks/useWinner';

import { getDogData } from './store/dogData-actions';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/shared/globalStyle';
import { lightTheme, darkTheme } from './components/shared/themeSettings';
import Header from './components/Header/Header';
import Notification from './components/shared/UI/Notification/Notification';
import ScoreBoard from './components/Score/ScoreBoard';
import CardBoard from './components/Cards/CardBoard';

function App() {
  const { theme, intro, shouldNotificationRender, notificationData, introModal } = useInitial(getDogData);
  const { showWinnerDialogue, winnerModal } = useWinner();

  return (
    <ThemeProvider theme={theme.status ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onThemeChange={theme.handler} darkThemeEnabled={theme.status} />
      {intro.status && introModal}
      {showWinnerDialogue && winnerModal}
      <main>
        <ScoreBoard />
        <CardBoard />
        {shouldNotificationRender && <Notification {...notificationData} />}
      </main>
    </ThemeProvider>
  );
}

export default App;
