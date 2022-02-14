import { ThemeProvider } from 'styled-components';
import themeSettings from './components/shared/themeSettings';
import GlobalStyle from './components/shared/globalStyle';

function App() {
  return (
    <ThemeProvider theme={themeSettings}>
      <GlobalStyle />
      <h1>HELLO THERE</h1>
    </ThemeProvider>
  );
}

export default App;
