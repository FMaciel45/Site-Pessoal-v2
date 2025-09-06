import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
  padding: 1.5rem 0rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};

  .header-content nav{
    display: flex;
    justify-content: center;
    gap: 2.5rem;
  }

  nav {
    display: flex;
    gap: 2rem;
  } 
`;

export const HeroSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 4rem;
  background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.BACKGROUND_COLOR} 0%, ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2} 100%);
  
  .hero-content {
    display: flex;
    align-items: center;
    gap: 4rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
  }

  .hero-text {
    flex: 1;
    
    h1 {
      font-size: 2rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 2.5rem;
      }
    }

    h2 {
      font-size: 1rem;
      font-weight: 500;
    }
    
    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.8;
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    
    img {
      width: 100%;
      max-width: 400px;
      border-radius: 50%;
      border: 4px solid ${({ theme }) => theme.COLORS.ACCENT};
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      flex-direction: column;
    }
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  border: ${({ variant, theme }) => 
    variant === 'secondary' ? `1px solid ${theme.COLORS.ACCENT}` : 'none'};
  background: ${({ variant, theme }) => 
    variant === 'secondary' ? 'transparent' : theme.COLORS.BUTTON_BACKGROUND};
  color: ${({ variant, theme }) => 
    variant === 'secondary' ? theme.COLORS.ACCENT : theme.COLORS.FONT_COLOR};
  
  &:hover {
    background: ${({ variant, theme }) => 
      variant === 'secondary' ? 'rgba(59, 130, 246, 0.1)' : theme.COLORS.BUTTON_HOVER};
  }
`;

export const Section = styled.section`
  padding: 4rem 0;

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }
    
    .divider {
      width: 100px;
      height: 4px;
      background: ${({ theme }) => theme.COLORS.ACCENT};
      margin: 0 auto;
    }

    .secondDivider {
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.COLORS.ACCENT};
      margin: 0 auto;  
    }
  }
`;

export const AboutSection = styled(Section)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
`;

export const EducationItem = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid ${({ theme }) => theme.COLORS.ACCENT};

  h3 {
    color: ${({ theme }) => theme.COLORS.ACCENT};
    margin-bottom: 0.5rem;
  }

  .institution {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .period {
    opacity: 0.8;
    font-size: 0.9rem;
  }
`;

export const TechnologiesSection = styled(Section)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const TechCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .tech-icon-csharp, .tech-icon-js, .tech-icon-ts, .tech-icon-dart, .tech-icon-pascal, .tech-icon-dotnet, .tech-icon-node, .tech-icon-react, .tech-icon-flutter, .tech-icon-delphi, .tech-icon-postgres, .tech-icon-mysql, .tech-icon-firebase, .tech-icon-firebird, .tech-icon-sqlite {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .tech-icon-pascal, .tech-icon-firebird {
    font-size: 3rem;
  }

  .tech-icon-dotnet {
    margin-bottom: 0rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`;

export const ProjectsSection = styled(Section)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .project-image {
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-content {
    padding: 1.5rem;
    
    h3 {
      margin-bottom: 0.5rem;
    }
    
    p {
      margin-bottom: 1rem;
      opacity: 0.9;
    }
  }

  .project-tech {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    
    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
      padding: 0.25rem 0.5rem;
      border-radius: 1rem;
      font-size: 0.8rem;
    }
  }

  .project-buttons {
    display: flex;
    flex-direction:column;
    gap: .7rem;
  }
`;

export const ContactSection = styled(Section)`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR};
  text-align: center;

  .contact-content {
    max-width: 600px;
    margin: 0 auto;
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2rem;

    a {
      font-size: 3rem;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR2};
  padding: 2rem 3rem;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.COLORS.BORDER_COLOR};

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;