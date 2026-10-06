import cashflowImage from "../assets/project-cashflow.webp";
import siteImage from "../assets/project-site.webp";
import { SITE_URL } from "./profile";

export type Project = {
  title: string;
  featured?: boolean;
  image: string;
  imageAlt: string;
  goal: string;
  built: string;
  highlight?: string; // preencha com resultado/funcionalidade principal quando houver
  tech: string[];
  demo?: string;
  repo?: string;
  repoLabel?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "CashFlow API",
    featured: true,
    image: cashflowImage,
    imageAlt: "Captura de tela do projeto CashFlow",
    goal: "Gerenciar o fluxo de caixa por meio de uma API backend.",
    built: "Aplicação backend desenvolvida com ASP.NET Core (C#), com persistência de dados em MySQL.",
    tech: ["C#", ".NET", "MySQL"],
    repo: "https://github.com/FMaciel45/CashFlow-API-Backend",
    repoLabel: "Repositório Backend",
  },
  {
    title: "Site Pessoal",
    image: siteImage,
    imageAlt: "Captura de tela do site pessoal",
    goal: "Reunir histórico acadêmico e profissional, projetos e contatos em um só lugar.",
    built: "Portfólio em página única com React, TypeScript e Styled Components.",
    tech: ["React", "TypeScript", "Styled Components"],
    demo: SITE_URL,
    repo: "https://github.com/FMaciel45/Site-Pessoal-v2",
    repoLabel: "Repositório Frontend",
  },
];
