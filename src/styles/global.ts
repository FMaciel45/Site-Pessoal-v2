import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
    color: ${({theme}) => theme.COLORS.FONT_COLOR};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    outline: none;
  }

  a, button {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    color: ${({theme}) => theme.COLORS.FONT_COLOR};

    text-decoration: none;
    cursor: pointer;
    transition: filter 0.3s;
  }

  a:hover, button:hover {
    filter: brightness(0.8);
  }
`;