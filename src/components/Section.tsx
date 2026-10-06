import type { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4.5rem 0;

  @media (min-width: 1024px) {
    padding: 6.5rem 0;
  }
`;

const Heading = styled.header`
  max-width: 40rem;
  margin-bottom: 2.5rem;

  .eyebrow {
    display: block;
    margin-bottom: 0.75rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
  }

  p {
    margin-top: 0.75rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }
`;

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <Wrapper id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Heading data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </Heading>
        {children}
      </div>
    </Wrapper>
  );
}
