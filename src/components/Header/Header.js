import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun as LightIcon, faMoon as DarkIcon } from '@fortawesome/free-solid-svg-icons';
import StyledHeader from './Header.styled';
import { ThemeButton } from '../shared/UI/Button.styled';
import dogImage from '../../assets/shiba-dog.png';

const Header = ({ onThemeChange, darkThemeEnabled }) => {
  const futureTheme = darkThemeEnabled ? 'light' : 'dark';
  const themeIcon = darkThemeEnabled ? LightIcon : DarkIcon;

  return (
    <StyledHeader>
      <div>
        <img src={dogImage} alt="colorful-sketch-of-a-dog" />
        <h1>Memory Card Game</h1>
      </div>
      <ThemeButton onClick={onThemeChange} title={`Change to ${futureTheme} theme`}>
        <FontAwesomeIcon icon={themeIcon} />
      </ThemeButton>
    </StyledHeader>
  );
};

export default React.memo(Header);
