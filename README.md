# M&M — Filmes & Músicas

> Um projeto que começou no Ensino Médio Técnico em Informática e evoluiu junto com o meu aprendizado em desenvolvimento de software.

O **M&M — Filmes & Músicas** é um site desenvolvido para reunir filmes de diferentes gêneros e suas trilhas sonoras em uma experiência simples e organizada.

Este projeto tem um significado especial para mim por ter sido o meu **primeiro projeto oficial de desenvolvimento**. Ele começou durante o **Ensino Médio integrado ao curso Técnico em Informática**, como um trabalho desenvolvido em grupo por **três alunos**.

Ao longo do tempo, continuamos aprimorando o site, adicionando conteúdos, corrigindo problemas e implementando novas ideias. O projeto passou por diversas versões e acabou se tornando também um registro da minha evolução na programação.

## Sobre o projeto

A proposta do M&M é permitir que o usuário explore filmes de diferentes gêneros e encontre informações relacionadas a cada produção, incluindo suas trilhas sonoras.

O projeto possui conteúdos de categorias como:

- Ação
- Animação
- Aventura
- Comédia
- Romance
- Terror

Além do catálogo, o projeto trabalha com pesquisa, filtros e páginas de detalhes para tornar a navegação mais simples.

## Evolução do M&M

A primeira versão foi construída principalmente com **HTML, CSS e JavaScript**. Como estávamos aprendendo desenvolvimento web, cada filme chegou a possuir sua própria página HTML.

Com o crescimento do projeto, essa estrutura se tornou muito grande: a versão antiga chegou a possuir **mais de 90 páginas individuais de filmes**.

Posteriormente, o projeto passou por uma grande modernização. A estrutura foi reorganizada utilizando **React e Vite**, substituindo dezenas de páginas repetidas por componentes reutilizáveis e rotas dinâmicas.

### Antes

```text
Romance - Titanic.html
Animação - Coraline.html
A_freira_Terror.html
...
```

### Atualmente

```text
/filme/titanic
/filme/coraline
/filme/a-freira
```

Todos os filmes passam a utilizar a mesma estrutura de componentes, enquanto seus dados são organizados de forma centralizada.

## Tecnologias

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## Funcionalidades

- Catálogo com dezenas de filmes
- Organização por gênero
- Pesquisa de filmes por título
- Filtros de categorias
- Página dinâmica de detalhes
- Informações e sinopse dos filmes
- Conteúdos relacionados às trilhas sonoras
- Links para plataformas disponíveis quando cadastrados
- Interface responsiva
- Navegação construída com React Router

## Estrutura atual

```text
filmes-e-musicas/
├── src-react/
│   ├── data/
│   │   └── movies.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── src/
├── index.html
├── package.json
└── netlify.toml
```

## Por que este projeto é importante para mim?

Mais do que um projeto acadêmico, o M&M representa o início da minha trajetória prática com desenvolvimento web.

Foi nele que tive uma das primeiras experiências construindo um projeto completo em equipe, organizando páginas, estilizando interfaces, trabalhando com JavaScript e transformando uma ideia em algo funcional.

Revisitar o projeto anos depois e modernizar sua arquitetura também me permitiu aplicar conhecimentos que adquiri desde então, principalmente em **React, componentização, organização de código e manutenção de aplicações**.

Por isso, este repositório preserva não apenas um projeto, mas também parte da minha evolução como desenvolvedora.

## Desenvolvimento

Projeto iniciado durante o **Ensino Médio Técnico em Informática**, desenvolvido originalmente em uma equipe de três alunos e aprimorado ao longo do tempo.

Modernização e manutenção atual realizadas por **Emily Nivea Ribeiro da Silva**.

---


<p align="center">
  <a href="https://moviesandmusic.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🎬_Acessar_o_M&M-725CFF?style=for-the-badge" alt="Acessar o M&M">
  </a>
</p>

### M&M — Filmes & Músicas

**Do primeiro projeto em HTML a uma aplicação moderna em React.**
