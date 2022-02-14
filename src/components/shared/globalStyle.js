import { createGlobalStyle } from 'styled-components';

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
    height: 87vh;
    width: 100vw;
    background: ${({ theme }) => theme.colors.main}
}

footer{
    height: 3vh;
    width: 100%;
}

h1 {
  font-size: 2.8rem;
  font-family: 'Abril Fatface', cursive;


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
  font-family: 'Roboto', sans-serif;
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
  font-family: 'Open Sans', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyle;
