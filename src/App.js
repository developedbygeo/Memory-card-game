import { ThemeProvider } from 'styled-components/macro';
import themeSettings from './components/shared/themeSettings';
import GlobalStyle from './components/shared/globalStyle';
import Header from './components/Header/Header';

function App() {
  return (
    <ThemeProvider theme={themeSettings}>
      <GlobalStyle />
      <Header />
      <main></main>
    </ThemeProvider>
  );
}

export default App;
