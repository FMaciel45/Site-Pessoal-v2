import styled from "styled-components";
import { PROFILE } from "../data/profile";

const Wrapper = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLORS.TEXT_MUTED};

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
  }

  a:hover { color: ${({ theme }) => theme.COLORS.ACCENT}; }
`;

export function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </Wrapper>
  );
}
