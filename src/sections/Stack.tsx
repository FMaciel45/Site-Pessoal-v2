import styled from "styled-components";
import { Section } from "../components/Section";
import { STACK } from "../data/stack";

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 600px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(4, 1fr); }
`;

const Group = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => theme.COLORS.SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.MD};
  transition: border-color 0.2s ease;

  &:hover { border-color: ${({ theme }) => theme.COLORS.ACCENT}; }

  h3 {
    margin-bottom: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  li { padding: 0.3rem 0; font-size: 1.05rem; }
`;

export function Stack() {
  return (
    <Section id="stack" eyebrow="Stack" title="Tecnologias com que trabalho">
      <Grid>
        {STACK.map((group) => (
          <Group key={group.title} data-reveal>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Group>
        ))}
      </Grid>
    </Section>
  );
}
