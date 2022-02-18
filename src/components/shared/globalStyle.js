import { createGlobalStyle } from 'styled-components';
import { flexMixin } from './mixins';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    height: 100vh;
    width: 100vw;
}

header{
    height: 10vh;
    width: 100%;
}

main{
    position: relative;
    height: 90vh;
    width: 100vw;
    background: ${({ theme }) => theme.colors.main};
    ${flexMixin('center', 'center', 'column')};
    gap: 1rem;
}

h1 {
  font-size: 3.7rem;
  font-family: 'Indie Flower', cursive;
}

h2 {
  font-size: 2.4rem;
  font-weight: 600
}

h3 {
  font-size: 2rem;
  font-weight: 500;
}

h2, h3{
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.1rem;;
  font-weight: 700;
}

p,
button,
select,
input,
textarea,
label,
div,
li,
a {
  font-size: 1.8rem;
  font-family: 'Lato', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
