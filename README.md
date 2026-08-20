# Site Pessoal v2

Portfólio pessoal de **Felipe Maciel**, desenvolvedor Fullstack (Web e Mobile). É uma aplicação de página única (SPA) construída com **React 19**, **TypeScript** e **Vite 7**, com estilização via **styled-components**.

A página contém as seguintes seções:

- **Sobre** — breve apresentação e formação (Ciência da Computação);
- **Experiência** — histórico profissional (Conceito Tecnologia LTDA.);
- **Tecnologias** — stack e linguagens utilizadas;
- **Projetos** — projetos pessoais e acadêmicos;
- **Contato** — formas de contato (GitHub, LinkedIn, e-mail).

## Pré-requisitos

- **Node.js** 20.19+ ou 22.12+ (necessário para o Vite 7)
- **npm** (instalado junto com o Node.js)

Para verificar sua versão:

```bash
node -v
npm -v
```

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/FMaciel45/Site-Pessoal-v2.git
```

2. Entre na pasta do projeto:

```bash
cd Site-Pessoal-v2
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse no navegador o endereço exibido no terminal (por padrão, `http://localhost:5173`).

## Scripts disponíveis

| Comando           | Descrição                                              |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento (com hot reload) |
| `npm run build`   | Gera a versão de produção (`tsc -b && vite build`)     |
| `npm run preview` | Previsualiza a build de produção localmente            |
| `npm run lint`    | Executa o ESLint no projeto                            |

## Estrutura de pastas

```
├── public/                 # Arquivos públicos estáticos
├── src/
│   ├── assets/             # Imagens (foto, logos e prints de projetos)
│   ├── pages/home/         # Página principal (index.tsx) e estilos
│   ├── styles/             # Tema, estilos globais e breakpoints
│   └── main.tsx            # Ponto de entrada da aplicação
├── index.html              # HTML base
└── vite.config.ts          # Configuração do Vite
```