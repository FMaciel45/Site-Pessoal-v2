import styled from "styled-components";
import { Section } from "../components/Section";
import { EDUCATION } from "../data/profile";

const Layout = styled.div`
  display: grid;
  gap: 2.5rem;

  .about-text {
    max-width: 38rem;
    font-size: 1.05rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
    font-weight: 500;
  }

  .education li {
    padding: 1rem 0;
    border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  }

  .education strong { display: block; font-weight: 600; }

  .education span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
  }
`;

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre" title="Código limpo, foco no valor para o negócio">
      <Layout data-reveal>
        <p className="about-text">
          Desenvolvedor Full Stack com experiência profissional em aplicações web e mobile para o mercado corporativo. Atualmente atuo com .NET, Angular e Flutter, construindo soluções escaláveis e performáticas. Graduado em Ciência da Computação (IESB, 2026), busco aprimorar continuamente arquitetura de software e boas práticas para entregar código limpo e de valor para o negócio.
        </p>

        <div>
          <h3>Formação</h3>
          <ul className="education">
            {EDUCATION.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>
                  {item.place}
                  {item.period && ` · ${item.period}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </Section>
  );
}
