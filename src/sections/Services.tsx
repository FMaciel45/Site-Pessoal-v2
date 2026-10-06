import styled from "styled-components";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;

const Item = styled.div`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  h3 { margin-bottom: 0.5rem; font-size: 1.2rem; }
  p { color: ${({ theme }) => theme.COLORS.TEXT_MUTED}; }
`;

const Cta = styled.div`
  margin-top: 2rem;
`;

const SERVICES = [
  { title: "Landing pages", text: "Páginas objetivas, rápidas e responsivas, pensadas para apresentar uma oferta e gerar contato." },
  { title: "Sites institucionais", text: "Presença online clara e profissional para o seu negócio, com estrutura simples de manter." },
  { title: "Interfaces web", text: "Interfaces modernas e acessíveis, do layout à implementação em código." },
];

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Sites e interfaces sob medida"
      intro="Além do trabalho com sistemas, atendo pequenos negócios que precisam de uma presença web bem feita."
    >
      <Grid>
        {SERVICES.map((s) => (
          <Item key={s.title} data-reveal>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Item>
        ))}
      </Grid>
      <Cta>
        <Button href="#contato" $variant="ghost">Conversar sobre seu projeto</Button>
      </Cta>
    </Section>
  );
}
