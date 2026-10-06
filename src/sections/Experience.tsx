import styled from "styled-components";
import { Section } from "../components/Section";
import conceitoLogo from "../assets/logo-conceito.webp";

const Item = styled.article`
  padding: 1.5rem;
  background: ${({ theme }) => theme.COLORS.SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  header {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .logo {
    flex: none;
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    padding: 0.5rem;
    background: #fff;
    border-radius: ${({ theme }) => theme.RADIUS.SM};

    img { width: 100%; height: 100%; object-fit: contain; }
  }
  h3 { font-size: 1.3rem; }

  .meta {
    margin-top: 0.35rem;
    font-size: 0.92rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  ul { display: grid; gap: 0.85rem; }

  li {
    position: relative;
    padding-left: 1.1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.ACCENT};
  }

  strong { color: ${({ theme }) => theme.COLORS.TEXT}; font-weight: 600; }

  @media (min-width: 768px) { padding: 2rem 2.25rem; }
`;

export function Experience() {
  return (
    <Section id="experiencia" eyebrow="Experiência" title="Experiência profissional">
      <Item data-reveal>
        <header>
          <div className="logo">
            <img src={conceitoLogo} alt="Logo da Conceito Tecnologia" width={184} height={163} loading="lazy" decoding="async" />
          </div>
          <div>
          <h3>Desenvolvedor Full Stack</h3>
          <p className="meta">
            Conceito Tecnologia LTDA. · Remoto (Bahia, Brasil) · Jun/2025 – Presente · Tempo integral
          </p>
          </div>
        </header>
        <ul>
          <li>Desenvolvimento e manutenção de sistemas corporativos em um ecossistema diversificado de tecnologias.</li>
          <li><strong>Web (.NET + Angular):</strong> construção e evolução de funcionalidades, com APIs em C# (ASP.NET Core) e interfaces em Angular e TypeScript.</li>
          <li><strong>Mobile (Flutter):</strong> desenvolvimento de aplicativos multiplataforma, integração com APIs REST e gerenciamento de estado.</li>
          <li><strong>Legado (Delphi):</strong> correção e evolução de sistemas críticos, garantindo a continuidade dos serviços durante a transição para novas arquiteturas.</li>
          <li><strong>Metodologia ágil:</strong> trabalho remoto com times multidisciplinares, usando Scrum para planejamento e entrega de sprints.</li>
        </ul>
      </Item>
    </Section>
  );
}
