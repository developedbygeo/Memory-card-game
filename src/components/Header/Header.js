import StyledHeader from './Header.styled';
import dogImage from '../../assets/shiba-dog.png';

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={dogImage} alt="colorful-sketch-of-a-dog" />
        <h1>Memory Card Game</h1>
      </div>
    </StyledHeader>
  );
};

export default Header;
