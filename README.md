# Site para a disciplina Construção de Páginas Web (CPW)

Repositório do projeto desenvolvido para a disciplina **Construção de Páginas
Web (CPW)** do curso de Tecnologia em Sistemas de Computação da Fundação
CECIERJ no período 2025-1.

## Objetivo

Este projeto tem como finalidade a construção de um site estático para uma
queijaria fictícia chamada *Canastrão Queijos*, com o objetivo de aplicar os
conhecimentos introdutórios de desenvolvimento web, conforme proposto nas
atividades avaliativas ([AD1](./ads/AD1_CPW_2025_1.pdf) e
[AD2](./ads/AD2_CPW_2025_1.pdf)) da disciplina.

O site foi levantado na plataforma Netlify, permitindo acesso fácil e
rápido ao projeto. Abaixo, você encontrará o link para acessar a aplicação:

<p align="center">
<a href="https://cederjcpw2025-1.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/-Launch%20app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="launch app" target="_blank"></a> 
</p>

A CPW é uma disciplina introdutória que apresenta os fundamentos de construção
de páginas web, abrangendo HTML5, CSS3 e JavaScript, com foco em boas práticas e
organização estrutural.

## Descrição do Projeto

O site da queijaria simula um ambiente de comércio eletrônico simples, com as
seguintes seções:

* **Página Inicial**: layout com HTML5 e CSS externo.
* **Harmonização**: lista de queijos com sugestões de vinhos, incluindo links com janelas modais em JavaScript.
* **Queijos**: tabela com imagens e preços, interação dinâmica usando JS para exibir detalhes.
* **Pedidos**: formulário com validação de CPF, seleção de produtos e cálculo automático do valor total.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Google Fonts (Karla, Stoke)

## Funcionalidades JS

* Janelas modais para harmonizações
* Renderização dinâmica de imagens e preços dos queijos
* Validação de CPF com cálculo dos dígitos verificadores
* Lógica de seleção de produtos e soma de valores no formulário

## Organização de Arquivos

```
├── index.html
├── style.css
├── imagens/
│   └── *.png
├── js/
│   ├── cpf.js
│   ├── harmonizacao.js
│   ├── pedidos.js
│   └── queijos.js
├── paginas/
│   ├── CanastraoQueijos.html
│   ├── Queijos.html
│   ├── Harmonizacao.html
│   └── Pedidos.html
```

## Execução Local

1. Clone o repositório:

   ```
   git clone https://github.com/graduacao-cederj/site-cpw-2025-1.git
   ```
2. Abra o arquivo `index.html` no navegador.

## Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](./LICENSE) para mais detalhes.

## Citando o projeto

Se você utilizar este projeto em uma publicação científica, em aulas ou outros
contextos, considere citar como:

    F. L. S. Bustamante, Site CPW, 2025. Disponível em:
    https://github.com/graduacao-cederj/site-cpw-2025-1

---

Veja meu perfil e portfólio:

[![portfolio](https://img.shields.io/badge/portfolio-00A98F?style=for-the-badge&logo=About.me&logoColor=white)](https://franciscobustamante.com.br)
[![linkedin](https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/flsbustamante/)
