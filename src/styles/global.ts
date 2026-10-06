import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 5rem;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-family: ${({ theme }) => theme.FONTS.BODY};
    font-size: 1rem;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.FONTS.HEADING};
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul { list-style: none; }

  img { display: block; max-width: 100%; }

  button { font: inherit; color: inherit; cursor: pointer; }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.COLORS.ACCENT};
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::selection {
    background: ${({ theme }) => theme.COLORS.ACCENT};
    color: ${({ theme }) => theme.COLORS.ON_ACCENT};
  }

  .container {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.25rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  .skip-link {
    position: fixed;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 2000;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.ACCENT};
    color: ${({ theme }) => theme.COLORS.ON_ACCENT};
    font-weight: 600;
    transform: translateY(-200%);

    &:focus { transform: none; }
  }

  [data-reveal] {
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  [data-reveal].is-visible {
    opacity: 1;
    transform: none;
  }

  @media (min-width: 768px) {
    .container { padding: 0 2rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }

    [data-reveal] { opacity: 1; transform: none; }
  }
`;
