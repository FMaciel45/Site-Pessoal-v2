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
    line-height: 1.6;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    outline: none;
  }

  a, button {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    color: ${({theme}) => theme.COLORS.FONT_COLOR};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  a:hover, button:hover {
    opacity: 0.8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  section {
    padding: 4rem 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
  }
`;