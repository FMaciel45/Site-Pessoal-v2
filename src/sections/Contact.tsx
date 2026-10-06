import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { PROFILE } from "../data/profile";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.COLORS.SURFACE};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  p { max-width: 34rem; color: ${({ theme }) => theme.COLORS.TEXT_MUTED}; }

  .links { display: flex; flex-wrap: wrap; gap: 0.75rem; }

  @media (min-width: 768px) { padding: 3rem; }
`;

export function Contact() {
  const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Contato pelo portfólio")}`;

  return (
    <Section id="contato" eyebrow="Contato" title="Vamos conversar?">
      <Box data-reveal>
        <p>
          Aberto a oportunidades profissionais e a conversas sobre projetos web. Respondo por e-mail ou LinkedIn.
        </p>
        <div className="links">
          <Button href={mailto}><SiGmail aria-hidden /> {PROFILE.email}</Button>
          <Button href={PROFILE.linkedin} target="_blank" rel="noreferrer" $variant="ghost">
            <SiLinkedin aria-hidden /> LinkedIn
          </Button>
          <Button href={PROFILE.github} target="_blank" rel="noreferrer" $variant="ghost">
            <FaGithub aria-hidden /> GitHub
          </Button>
        </div>
      </Box>
    </Section>
  );
}
