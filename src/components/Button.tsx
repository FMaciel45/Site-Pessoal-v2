import styled, { css } from "styled-components";

type Variant = "primary" | "ghost";

export const Button = styled.a<{ $variant?: Variant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.65rem 1.4rem;
  border-radius: ${({ theme }) => theme.RADIUS.PILL};
  font-size: 0.95rem;
  font-weight: 600;
  border: 1px solid transparent;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  ${({ $variant = "primary", theme }) =>
    $variant === "primary"
      ? css`
          background: ${theme.COLORS.ACCENT};
          color: ${theme.COLORS.ON_ACCENT};

          &:hover { background: ${theme.COLORS.ACCENT_STRONG}; transform: translateY(-1px); }
        `
      : css`
          border-color: ${theme.COLORS.BORDER};
          color: ${theme.COLORS.TEXT};

          &:hover { border-color: ${theme.COLORS.ACCENT}; color: ${theme.COLORS.ACCENT}; }
        `}
`;
