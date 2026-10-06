import styled from "styled-components";
import { Button } from "../components/Button";
import { PROFILE } from "../data/profile";
import profilePicture from "../assets/profile.webp";

const Wrapper = styled.section`
  padding: 7.5rem 0 4rem;
  background:
    radial-gradient(60rem 28rem at 85% -10%, rgba(124, 196, 255, 0.08), transparent 70%),
    ${({ theme }) => theme.COLORS.BG};

  .hero-content {
    display: grid;
    gap: 2.5rem;
    align-items: center;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  .eyebrow::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.ACCENT};
  }

  h1 {
    margin: 1rem 0;
    font-size: clamp(2.25rem, 7vw, 4rem);
    line-height: 1.05;

    span { color: ${({ theme }) => theme.COLORS.ACCENT}; }
  }

  .lead {
    max-width: 34rem;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1.5rem 0 2rem;

    li {
      padding: 0.25rem 0.75rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
      border-radius: ${({ theme }) => theme.RADIUS.PILL};
      font-size: 0.82rem;
      color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
    }
  }

  .cta {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .side-note {
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};

    a {
      color: ${({ theme }) => theme.COLORS.TEXT};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};
      transition: border-color 0.2s ease;
    }

    a:hover { border-color: ${({ theme }) => theme.COLORS.ACCENT}; }
  }

  .photo {
    justify-self: start;
    width: min(15rem, 62vw);
    aspect-ratio: 640 / 708;
    border-radius: ${({ theme }) => theme.RADIUS.MD};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    overflow: hidden;
    box-shadow: 0 0 0 6px ${({ theme }) => theme.COLORS.SURFACE};

    img { width: 100%; height: 100%; object-fit: cover; }
  }

  @media (min-width: 480px) {
    .cta { flex-direction: row; }
  }

  @media (min-width: 900px) {
    padding: 9.5rem 0 6rem;

    .hero-content { grid-template-columns: 1.25fr 0.75fr; gap: 4rem; }
    .photo { justify-self: end; width: min(22rem, 100%); }
  }
`;

const TECHS = [".NET", "C#", "Angular", "TypeScript", "Flutter", "PostgreSQL"];

export function Hero() {
  return (
    <Wrapper id="inicio">
      <div className="container hero-content">
        <div>
          <p className="eyebrow">Desenvolvedor Full Stack · Web e Mobile</p>
          <h1>
            {PROFILE.name}
            <br />
            <span>construo software</span> que funciona em produção.
          </h1>
          <p className="lead">
            Desenvolvo aplicações web e mobile para o mercado corporativo: APIs em .NET, interfaces em Angular e apps em Flutter.
          </p>

          <ul className="tech-list" aria-label="Tecnologias principais">
            {TECHS.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="cta">
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" $variant="ghost">Entrar em contato</Button>
          </div>
        </div>

        <div className="photo">
          <img
            src={profilePicture}
            alt={`Retrato de ${PROFILE.name}`}
            width={640}
            height={708}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </Wrapper>
  );
}
