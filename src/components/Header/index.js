import React from "react";

import { ThemeContext } from "../../contexts/ThemeContext"; 

import { Container } from './styles';

export class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({theme, handleToggleTheme}) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleToggleTheme}>
              {theme === 'dark' ? '🌞' : '🌚'}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    )
  }
}
