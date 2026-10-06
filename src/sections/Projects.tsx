import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { PROJECTS } from "../data/projects";

const List = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const Card = styled.article<{ $featured?: boolean }>`
  display: grid;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.MD};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover { border-color: ${({ theme }) => theme.COLORS.ACCENT}; transform: translateY(-2px); }

  .thumb {
    aspect-ratio: 16 / 10;
    background: ${({ theme }) => theme.COLORS.SURFACE_2};
    overflow: hidden;

    img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
  }

  .body { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }

  .badge {
    align-self: flex-start;
    padding: 0.15rem 0.6rem;
    border-radius: ${({ theme }) => theme.RADIUS.PILL};
    background: rgba(124, 196, 255, 0.12);
    color: ${({ theme }) => theme.COLORS.ACCENT};
    font-size: 0.75rem;
    font-weight: 600;
  }

  h3 { font-size: 1.4rem; }

  dl { display: grid; gap: 0.75rem; }

  dt {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.ACCENT};
  }

  dd { color: ${({ theme }) => theme.COLORS.TEXT_MUTED}; }

  .tech { display: flex; flex-wrap: wrap; gap: 0.5rem; }

  .tech li {
    padding: 0.2rem 0.65rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    border-radius: ${({ theme }) => theme.RADIUS.PILL};
    font-size: 0.8rem;
    color: ${({ theme }) => theme.COLORS.TEXT_MUTED};
  }

  .links { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: auto; }

  @media (min-width: 900px) {
    grid-template-columns: ${({ $featured }) => ($featured ? "1.1fr 1fr" : "1fr 1fr")};
    .body { padding: 2rem; }
  }
`;

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos selecionados"
      intro="Projetos pessoais e acadêmicos, com o código disponível no GitHub."
    >
      <List>
        {PROJECTS.map((project) => (
          <Card key={project.title} $featured={project.featured} data-reveal>
            <div className="thumb">
              <img src={project.image} alt={project.imageAlt} width={800} height={500} loading="lazy" decoding="async" />
            </div>

            <div className="body">
              {project.featured && <span className="badge">Destaque</span>}
              <h3>{project.title}</h3>

              <dl>
                <div>
                  <dt>Objetivo</dt>
                  <dd>{project.goal}</dd>
                </div>
                <div>
                  <dt>O que foi desenvolvido</dt>
                  <dd>{project.built}</dd>
                </div>
                {project.highlight && (
                  <div>
                    <dt>Destaque</dt>
                    <dd>{project.highlight}</dd>
                  </div>
                )}
              </dl>

              <ul className="tech" aria-label="Tecnologias">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>

              <div className="links">
                {project.demo && (
                  <Button href={project.demo} target="_blank" rel="noreferrer">
                    Ver demonstração <HiOutlineExternalLink aria-hidden />
                  </Button>
                )}
                {project.repo && (
                  <Button href={project.repo} target="_blank" rel="noreferrer" $variant="ghost">
                    <FaGithub aria-hidden /> {project.repoLabel ?? "Código no GitHub"}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </List>
    </Section>
  );
}
