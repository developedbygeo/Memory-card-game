import { createGlobalStyle } from 'styled-components';
import { devices } from './breakpoints';
import { flexMixin } from './mixins';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    @media ${devices.mobileSS}{
      font-size: 27%;
    }
    @media ${devices.mobileS}{
      font-size: 35%;
    }
    @media ${devices.mobileM}{
      font-size: 40%;
    }
    @media ${devices.mobileL}{
      font-size: 50%;
    }
    @media ${devices.tablet}{
      font-size: 60%;
    }
    @media ${devices.laptopL}{
      font-size: 65.5%;
    }
    @media ${devices.desktop}{
      font-size: 70%;
    }
    @media ${devices.landscapeMobileSS}{
      font-size: 22%;
    }
    @media ${devices.landscapeMobileS}{
      font-size: 30%;
    }
    @media ${devices.landscapeMobileL}{
      font-size: 45%;
    }
    @media ${devices.desktop4K}{
      font-size: 110%;
    }
}

body{
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
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
    @media ${devices.laptop} {
    gap: 0;
  }
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
