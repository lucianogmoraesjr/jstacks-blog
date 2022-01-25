import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from './styles';

export function Footer({ onToggleTheme, selectedTheme }) {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  )
}