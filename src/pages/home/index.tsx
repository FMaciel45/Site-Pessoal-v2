import { Container, Header, HeroSection, Button, AboutSection, AboutDescription, EducationItem, TechnologiesSection, TechsSection, TechsSectionLineOne, TechsSectionLineTwo, TechCard, TechIcon, ProjectsSection, ProjectGrid, ProjectCard, ContactSection, Footer } from "./styles";

import { TbBrandCSharp } from "react-icons/tb";
import { SiDart, SiDotnet, SiFlutter, SiLinkedin, SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";


import profilePicture from "../../assets/profile.jpeg";
import IESBLogo from "../../assets/iesb_logo.jpeg";
import RocketseatLogo from "../../assets/rocket.jpg";
import CTJLogo from "../../assets/ctj.jpg";
import FoodEx from "../../assets/FoodEx.png";
import RocketN from "../../assets/RocketN.png";
import Site from "../../assets/site.png";
import CashFlow from "../../assets/cashflowprint.png";

export function Home() {
  return (
    <Container>
      <Header>
        <div className="container header-content">
          <nav>
            <a href="#about">Sobre</a>
            <a href="#tech">Tecnologias</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </Header>

      <HeroSection>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Felipe Maciel - Desenvolvedor Fullstack</h1>
            <h2>Web e Mobile</h2>
            <p>Transformando ideias em soluções digitais inovadoras com o desenvolvimento de software</p>
            <div className="cta-buttons">
              <Button>Download CV</Button>
              <Button variant="secondary">Entrar em contato</Button>
            </div>
          </div>
          <div className="hero-image">
            <img src={profilePicture} alt="Felipe Maciel" />
          </div>
        </div>
      </HeroSection>

      <AboutSection id="about">
        <div className="container">

          <div className="section-title">
            <h2>Sobre Mim</h2>
            <div className="divider"></div>
          </div>

          <AboutDescription>
            Desenvolvedor Web Fullstack e estudante de Ciência da Computação com previsão de formatura para 06/2026.
            Tenho cerca de 1 ano de experiência com desenvolvimento Web por meio de projetos pessoais e acadêmicos.
            Além disso, hoje atuo profissionalmente como desenvolvedor Web e Mobile. Dessa forma, busco aprender constantemente novas tecnologias para me profissionalizar como desenvolvedor.
          </AboutDescription>

          <div className="section-title">
            <h3>Formações em andamento e concluídas</h3>
            <div className="secondDivider"></div>
          </div>

          <EducationItem>
            <div className="container">
              <div className="educationItem-information">
                <h3>Bacharelado - Ciência da Computação</h3>
                <div className="institution">Instituto de Educação Superior de Brasília - IESB</div>
                <div className="period">Início: Agosto/2021 | Previsão de conclusão: Junho/2026</div>
              </div>
              <div className="educationItem-img">
                <img src={IESBLogo} alt="" />
              </div>
            </div>
          </EducationItem>

          <EducationItem>
            <div className="container">
              <div className="educationItem-information">
                <h3>Curso de Inglês</h3>
                <div className="institution">Casa Thomas Jefferson - Brasília/DF</div>
                <div className="period">Inglês Avançado - Class Expert 5B</div>
              </div>
              <div className="educationItem-img">
                <img src={CTJLogo} alt="" />
              </div>
            </div>
          </EducationItem>

          <EducationItem>
            <div className="container">
              <div className="educationItem-information">
                <h3>Formação Explorer Fullstack</h3>
                <div className="institution">Rocketseat</div>
                <div className="period">Início: Fevereiro/2024 | Conclusão: Fevereiro/2025</div>
              </div>
              <div className="educationItem-img">
                <img src={RocketseatLogo} alt="" />
              </div>
            </div>
          </EducationItem>

          <EducationItem>
            <div className="container">
              <div className="educationItem-information">
                <h3>Formação C# / .NET</h3>
                <div className="institution">Rocketseat</div>
                <div className="period">Início: maio/2025 | Conclusão: Junho/2025</div>
              </div>
              <div className="educationItem-img">
                <img src={RocketseatLogo} alt="" />
              </div>
            </div>
          </EducationItem>

        </div>
      </AboutSection>

      <TechnologiesSection id="tech">
        <div className="container">
          <div className="section-title">
            <h2>Tecnologias com que trabalho atualmente</h2>
            <div className="divider"></div>
          </div>

          <TechsSection>
            <TechsSectionLineOne>
              <TechCard>
                <TechIcon color="#512BD4"><SiDotnet /></TechIcon>
                <h3>.NET</h3>
                <p>Framework para desenvolvimento de aplicações enterprise</p>
              </TechCard>

              <TechCard>
                <TechIcon color="#02569B"><SiFlutter /></TechIcon>
                <h3>Flutter</h3>
                <p>Framework para desenvolvimento multiplataforma</p>
              </TechCard>

              <TechCard>
                <TechIcon color="#336791"><BiLogoPostgresql /></TechIcon>
                <h3>PostgreSQL</h3>
                <p>Banco de dados relacional open-source avançado</p>
              </TechCard>
            </TechsSectionLineOne>

            <TechsSectionLineTwo>
              <TechCard>
                <TechIcon color="#9B4F96"><TbBrandCSharp /></TechIcon>
                <h3>C#</h3>
                <p>Desenvolvimento de aplicações backend com .NET</p>
              </TechCard>

              <TechCard>
                <TechIcon color="#0175C2"><SiDart /></TechIcon>
                <h3>Dart</h3>
                <p>Desenvolvimento de aplicações mobile e web com Flutter</p>
              </TechCard>

              <TechCard>
                <TechIcon color="#FFFFFF"><BsFiletypeSql /></TechIcon>
                <h3>SQL</h3>
                <p>Manipulação de banco de dados</p>
              </TechCard>
            </TechsSectionLineTwo>
          </TechsSection>
        </div>
      </TechnologiesSection>

      <ProjectsSection id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Projetos</h2>
            <div className="divider"></div>
          </div>

          <ProjectGrid>

            <ProjectCard>
              <div className="project-image">
                <img src={FoodEx} alt="" />
              </div>
              <div className="project-content">
                <h3>Food Explorer</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>SQLite</span>
                </div>
                <p>Projeto pessoal fullstack Web para pedidos em um restaurante fictício. Desenvolvido com NodeJS, ReactJS e JavaScript, com a utilização de SQLite para armazenamento local de dados.</p>
                <div className="project-buttons">
                  <Button variant="secondary">Repositório Frontend</Button>
                  <Button variant="secondary">Repositório Backend</Button>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-image">
                <img src={RocketN} alt="" />
              </div>
              <div className="project-content">
                <h3>Rocket Notes</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>SQLite</span>
                </div>
                <p>Projeto pessoal fullstack Web para armazenamento de notas/lembretes pessoais. Desenvolvido com NodeJS, ReactJS e JavaScript e utilizado SQLite para armazenamento local de dados.</p>
                <div className="project-buttons">
                  <Button variant="secondary">Repositório Frontend</Button>
                  <Button variant="secondary">Repositório Backend</Button>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-image">
                <img src={CashFlow} alt="" />
              </div>
              <div className="project-content">
                <h3>CashFlow</h3>
                <div className="project-tech">
                  <span>C#</span>
                  <span>.NET</span>
                  <span>MySQL</span>
                  <span>Dart</span>
                  {/*<span>Flutter</span>
                  <span>Firebase</span>*/}

                </div>
                <p>Projeto pessoal de aplicação backend para gerenciamento de fluxo de caixa. Desenvolvido com ASP.NET Core (C#) e utilizado MySQL para o armazenamento de dados.</p>
                {/*<p>Projeto pessoal fullstack mobile para controle de despesas pessoais e fluxo de caixa. Desenvolvido com ASP.NET Core (C#) e Flutter e utilizado MySQL para armazenamento de dados.</p>*/}
                <div className="project-buttons">
                  {/*<Button variant="secondary">Repositório Frontend</Button>*/}
                  <Button variant="secondary">Repositório Backend</Button>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-image">
                <img src={Site} alt="" />
              </div>
              <div className="project-content">
                <h3>Site Pessoal</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Styled Components</span>
                </div>
                <p>Projeto de site com meu histórico acadêmico e profissional, portfólio pessoal e minhas informações de contato. Desenvolvido com React, TypeScript e a biblioteca Styled Components para estilização.</p>
                <div className="project-buttons">
                  <Button variant="secondary">Ver projeto</Button>
                </div>
              </div>
            </ProjectCard>

          </ProjectGrid>
        </div>
      </ProjectsSection>

      <ContactSection id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Entre em Contato</h2>
            <div className="divider"></div>
          </div>

          <div className="contact-content">
            <p>Estou animado para ser o próximo desenvolvedor do time da sua empresa. Entre em contato comigo!</p>

            <div className="social-links">
              <a href="https://github.com/FMaciel45" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/f-maciel/" target="_blank" rel="noreferrer" title="LinkedIn"><SiLinkedin /></a>
              <a href="mailto:fesoaresma@gmail.com" title="E-mail"><SiGmail /></a>
            </div>
          </div>
        </div>
      </ContactSection>

      <Footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Felipe Maciel</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </Footer>
    </Container>
  );
}