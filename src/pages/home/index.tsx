import { Container, Header, HeroSection, Button, AboutSection, EducationItem, TechnologiesSection, TechGrid, TechCard, ProjectsSection, ProjectGrid, ProjectCard, ContactSection, Footer } from "./styles";

import { TbBrandCSharp } from "react-icons/tb";
import { SiJavascript, SiTypescript, /*SiDart*/ SiDotnet, /*SiFlutter*/ SiDelphi, SiMysql, SiSqlite, SiLinkedin, SiGmail } from "react-icons/si";
import { FaNode, FaReact, FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

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
            <h2>Web, Mobile e Desktop</h2>
            <p>Transformando ideias em soluções digitais inovadoras com React, Node.js e .NET</p>
            <div className="cta-buttons">
              <Button>Download CV</Button>
              <Button variant="secondary">Entrar em contato</Button>
            </div>
          </div>
          <div className="hero-image">
            {/* Placeholder para imagem - substitua por sua foto */}
            <div style={{ 
              width: "300px", 
              height: "300px", 
              borderRadius: "50%", 
              backgroundColor: "#2d2d2d", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: "4rem"
            }}>
              Foto perfil
            </div>
          </div>
        </div>
      </HeroSection>

      <AboutSection id="about">
        <div className="container">
          
          <div className="section-title">
            <h2>Sobre Mim</h2>
            <div className="divider"></div>
          </div>
          
          <p style={{ textAlign: "center", marginBottom: "3rem", fontSize: "1.1rem", maxWidth: "800px", margin: "0 auto 3rem" }}>
            Desenvolvedor Web Fullstack e estudante de Ciência da Computação com previsão de formatura para 06/2026. 
            Tenho cerca de 1 ano de experiência com desenvolvimento Web por meio de projetos pessoais e acadêmicos. 
            Além disso, hoje atuo profissionalmente como desenvolvedor Web, Mobile e Desktop. Dessa forma, busco aprender constantemente novas tecnologias para me profissionalizar como desenvolvedor.
          </p>
          
          <div className="section-title">
            <h3>Formações em andamento e concluídas</h3>
            <div className="secondDivider"></div>
          </div>
          
          <EducationItem>
            <h3>Bacharelado - Ciência da Computação</h3>
            <div className="institution">Instituto de Educação Superior de Brasília</div>
            <div className="period">Início: Agosto/2021 | Previsão de conclusão: Junho/2025</div>
          </EducationItem>
          
          <EducationItem>
            <h3>Curso de Inglês</h3>
            <div className="institution">Casa Thomas Jefferson - Brasília/DF</div>
            <div className="period">Inglês Avançado - Classe Expert 5B</div>
          </EducationItem>
          
          <EducationItem>
            <h3>Formação Explorer Fullstack</h3>
            <div className="institution">Rocketseat</div>
            <div className="period">Início: Fevereiro/2024 | Conclusão: Fevereiro/2025</div>
          </EducationItem>
          
          <EducationItem>
            <h3>Formação C# / .NET</h3>
            <div className="institution">Rocketseat</div>
            <div className="period">Início: maio/2025 | Conclusão: Junho/2025</div>
          </EducationItem>

        </div>
      </AboutSection>

      <TechnologiesSection id="tech">
        <div className="container">
          <div className="section-title">
            <h2>Tecnologias</h2>
            <div className="divider"></div>
          </div>
          
          <TechGrid>

            <TechCard>
              <div className="tech-icon-csharp" style={{ color: "#9B4F96" }}><TbBrandCSharp /></div>
              <h3>C#</h3>
              <p>Desenvolvimento de aplicações backend com .NET</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-js" style={{ color: "#F7DF1E" }}><SiJavascript /></div>
              <h3>JavaScript</h3>
              <p>Experiência em desenvolvimento frontend e backend com JavaScript</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-ts" style={{ color: "#3178C6" }}><SiTypescript /></div>
              <h3>TypeScript</h3>
              <p>Desenvolvimento de aplicações tipadas e mais robustas</p>
            </TechCard>

            {/*<TechCard>
              <div className="tech-icon-dart" style={{ color: "#0175C2" }}><SiDart /></div>
              <h3>Dart</h3>
              <p>Desenvolvimento de aplicações mobile e web com Flutter</p>
            </TechCard>*/}

            <TechCard>
              <div className="tech-icon-pascal" style={{ color: "#E76F00" }}>Pascal</div>
              <h3>Pascal</h3>
              <p>Linguagem de programação estruturada e didática</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-dotnet" style={{ color: "#512BD4" }}><SiDotnet /></div>
              <h3>.NET</h3>
              <p>Framework para desenvolvimento de aplicações enterprise</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-node" style={{ color: "#339933" }}><FaNode /></div>
              <h3>Node.js</h3>
              <p>Runtime JavaScript para desenvolvimento backend</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-react" style={{ color: "#61DAFB" }}><FaReact /></div>
              <h3>React</h3>
              <p>Biblioteca para construção de interfaces modernas</p>
            </TechCard>

            {/*<TechCard>
              <div className="tech-icon-flutter" style={{ color: "#02569B" }}><SiFlutter /></div>
              <h3>Flutter</h3>
              <p>Framework para desenvolvimento multiplataforma</p>
            </TechCard>*/}

            <TechCard>
              <div className="tech-icon-delphi" style={{ color: "#EE1F35" }}><SiDelphi /></div>
              <h3>Delphi</h3>
              <p>Desenvolvimento de aplicações desktop e enterprise</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-postgres" style={{ color: "#336791" }}><BiLogoPostgresql /></div>
              <h3>PostgreSQL</h3>
              <p>Banco de dados relacional open-source avançado</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-mysql" style={{ color: "#4479A1" }}><SiMysql /></div>
              <h3>MySQL</h3>
              <p>Sistema de gerenciamento de banco de dados relacional popular</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-firebird" style={{ color: "#D34332" }}>Firebird</div>
              <h3>Firebird</h3>
              <p>Banco de dados relacional open-source de alta performance</p>
            </TechCard>

            <TechCard>
              <div className="tech-icon-sqlite" style={{ color: "#003B57" }}><SiSqlite /></div>
              <h3>SQLite</h3>
              <p>Banco de dados embutido, leve e autônomo</p>
            </TechCard>

          </TechGrid>
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
                
              </div>
              <div className="project-content">
                <h3>Food Explorer</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>SQLite</span>
                </div>
                <p>Projeto frontend para pedidos em um restaurante. Desenvolvido com React e utilizando localStorage para armazenamento de dados.</p>
                <Button variant="secondary">Repositório Frontend</Button>
                <Button variant="secondary">Repositório Backend</Button>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-image">
                
              </div>
              <div className="project-content">
                <h3>Rocket Notes</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>SQLite</span>
                </div>
                <p>Projeto frontend para pedidos em um restaurante. Desenvolvido com React e utilizando localStorage para armazenamento de dados.</p>
                <Button variant="secondary">Repositório Frontend</Button>
                <Button variant="secondary">Repositório Backend</Button>
              </div>
            </ProjectCard>
            
            <ProjectCard>
              <div className="project-image">
                
              </div>
              <div className="project-content">
                <h3>CashFlow</h3>
                <div className="project-tech">
                  <span>C#</span>
                  <span>.NET</span>
                  <span>MySQL</span>
                </div>
                <p>Projeto pessoal de aplicação backend desenvolvido com ASP.NET Core para gerenciamento de fluxo de caixa.</p>
                {/*<Button variant="secondary">Repositório Frontend</Button>*/}
                <Button variant="secondary">Repositório Backend</Button>
              </div>
            </ProjectCard>
        
            <ProjectCard>
              <div className="project-image">
                
              </div>
              <div className="project-content">
                <h3>Stock Manager</h3>
                <div className="project-tech">
                  <span>Delphi</span>
                  <span>Pascal</span>
                  <span>Firebird</span>
                </div>
                <p>Projeto pessoal de aplicação desktop desenvolvida com Delphi para gerenciamento e controle de estoque.</p>
                <Button variant="secondary">Ver Projeto</Button>
              </div>
            </ProjectCard>

            <ProjectCard>
              <div className="project-image">
                
              </div>
              <div className="project-content">
                <h3>Site Pessoal</h3>
                <div className="project-tech">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Styled Components</span>
                </div>
                <p>Projeto de site com portfólio pessoal e informações de contato. Desenvolvido com React e TypeScript.</p>
                <Button variant="secondary">Ver Projeto</Button>
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
              <a href="#" title="GitHub"><FaGithub/></a>
              <a href="#" title="LinkedIn"><SiLinkedin/></a>
              <a href="#" title="E-mail"><SiGmail/></a>
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