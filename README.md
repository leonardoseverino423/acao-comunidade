# Ação Comunidade

Site institucional de uma organização não governamental (ONG) dedicada a promover ações sociais. Projeto simples acadêmico desenvolvido com HTML, CSS e JavaScript, com foco em **acessibilidade**, **desempenho** e **boas práticas de versionamento** (GitFlow, Conventional Commits e versionamento semântico).

**Site publicado:** [URL_DO_SITE]

## Sumário

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Build de produção](#build-de-produção)
- [Testes](#testes)
- [Fluxo de trabalho e versionamento](#fluxo-de-trabalho-e-versionamento)
- [Deploy](#deploy)
- [Autor](#autor)

## Funcionalidades

- **Página inicial** com as seções "Quem somos" e "Entre em contato", em layout de grade responsivo (12 colunas).
- **Acessibilidade (WCAG):**
  - estrutura semântica com landmarks (`header`, `nav`, `main`, `footer`, `aside`);
  - link "Saltar para o conteúdo" para navegação por teclado;
  - `aria-label`, `aria-labelledby` e `aria-current` nos elementos de navegação e seções;
  - foco visível (`:focus-visible`) em todos os elementos interativos.
- **Temas de cor:** modo escuro automático (`prefers-color-scheme`) e versão de alto contraste (`prefers-contrast`), construídos com variáveis CSS e contrastes mínimos de 4,5:1 para texto.
- **Imagens otimizadas:** formato WebP em três larguras (480, 800 e 1000 px) com `srcset` e `sizes`, e JPEG como alternativa.
- **Build otimizada:** minificação de HTML, CSS e JavaScript com o Vite.

## Tecnologias

| Área | Tecnologia |
|---|---|
| Estrutura | HTML5 |
| Estilos | CSS3 (variáveis, Grid, Flexbox, media queries) |
| Interatividade | JavaScript com módulos ES |
| Bundler | Vite |
| Imagens | WebP (conversão com `cwebp`) e JPEG |
| Versionamento | Git e GitHub |
| Hospedagem | [PLATAFORMA_DE_DEPLOY] |

## Estrutura do projeto

```
acao-comunidade/
├── index2.html              # Página inicial
├── acaocomunidade.css       # Estilos, temas e acessibilidade
├── Imagens/                 # Imagem original (JPEG) e versões WebP
├── javascript/
│   ├── estudo.js            # Ponto de entrada (importa navegacao.js)
│   ├── navegacao.js         # Navegação
│   ├── formulario.js        # Validação do formulário
│   └── armazenamento.js     # Armazenamento de dados
├── package.json             # Dependências e scripts
├── vite.config.js           # Configuração do Vite
└── .gitignore               # Ignora node_modules/ e dist/
```

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 20 ou superior) com npm
- Um navegador moderno (Chrome, Firefox ou Edge)

Os módulos ES não funcionam abrindo o HTML diretamente (`file://`), por isso é necessário um servidor local, que o Vite já fornece.

## Instalação e execução

```bash
# 1. Clonar o repositório
git clone https://github.com/leonardoseverino423/acao-comunidade.git
cd acao-comunidade

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

Abra o endereço indicado no terminal (normalmente `http://localhost:5173/index2.html`).

## Build de produção

```bash
npm run build      # gera a pasta dist/ com os arquivos minificados
npm run preview    # serve a versão compilada em http://localhost:4173/
```

### Resultados da otimização

| Recurso | Antes | Depois | Variação |
|---|---|---|---|
| CSS | 9903 B | 5875 B | -40,7% |
| HTML | 2995 B | 1921 B | -35,9% |
| JavaScript | 5894 B | 6196 B | +5,1% |
| **Total (CSS, HTML e JS)** | 18 792 B | 13 992 B | **-25,5%** |

O JavaScript aumenta ligeiramente porque o Vite acrescenta código de suporte a módulos, que em arquivos tão pequenos supera a poupança da minificação.

| Imagem (original JPEG: 188 155 B) | Tamanho | Redução |
|---|---|---|
| `voluntarios-480.webp` | 36 486 B | -80,6% |
| `voluntarios-800.webp` | 84 372 B | -55,2% |
| `voluntarios-1000.webp` | 116 624 B | -38,0% |

## Testes

O projeto é estático e não possui testes automatizados. A validação é manual, no navegador:

1. **Carregamento:** a página, os estilos e a imagem carregam sem erros no console nem respostas 404.
2. **Teclado:** com a tecla `Tab`, o primeiro foco vai para o link "Saltar para o conteúdo", seguido do menu, sempre com contorno visível.
3. **Temas:** nas ferramentas de desenvolvedor (Rendering), emular `prefers-color-scheme: dark` e `prefers-contrast: more`.
4. **Imagens responsivas:** no modo dispositivo móvel (largura de 360 px), o navegador deve pedir a imagem de 480 px.
5. **Contraste:** verificação dos pares de cores com o WebAIM Contrast Checker.

## Fluxo de trabalho e versionamento

### GitFlow

| Branch | Função |
|---|---|
| `main` | Versões estáveis e de lançamento (recebe as tags `vX.Y.Z`) |
| `develop` | Integração contínua das funcionalidades concluídas |
| `feature/*` | Uma branch por funcionalidade, criada a partir da `develop` |
| `hotfix/*` | Correções urgentes criadas a partir da `main` |

Toda integração é feita por **pull request**, com descrição do motivo e da implementação da alteração.

### Conventional Commits

As mensagens seguem o formato `tipo(escopo): descrição`:

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de erro |
| `perf` | Melhoria de desempenho |
| `build` | Alterações na build ou nas dependências |
| `docs` | Documentação |
| `chore` | Tarefas de manutenção |

### Versionamento semântico

Versões no formato `MAJOR.MINOR.PATCH`: `feat` incrementa o MINOR, `fix` incrementa o PATCH e alterações incompatíveis incrementam o MAJOR. A primeira versão estável é a `v1.0.0`.

## Deploy

A publicação é feita na [PLATAFORMA_DE_DEPLOY], ligada ao repositório do GitHub:

- **Comando de build:** `npm run build`
- **Pasta publicada:** `dist`
- **Branch de produção:** `main` (cada release integrada gera um deploy automático)

## Autor

**Leonardo Severino**: [@leonardoseverino423](https://github.com/leonardoseverino423)
