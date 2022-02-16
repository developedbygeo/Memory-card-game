import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogData } from './store/dogData-actions';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from './components/shared/globalStyle';
import themeSettings from './components/shared/themeSettings';
import Header from './components/Header/Header';
import ScoreBoard from './components/Score/ScoreBoard';
import CardBoard from './components/Cards/CardBoard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={themeSettings}>
      <GlobalStyle />
      <Header />
      <main>
        <ScoreBoard />
        <CardBoard />
      </main>
    </ThemeProvider>
  );
}

export default App;
