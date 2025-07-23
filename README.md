# ProjetoFinal_Ford - Ford<Enter> Gamificação

Este é o repositório do projeto final para o programa Ford<Enter>, uma aplicação web gamificada desenvolvida em Angular. O objetivo principal é engajar futuros talentos de Front-end, incentivando-os a conhecer e se candidatar ao programa Ford<Enter> através de uma experiência interativa e divertida.

A aplicação combina elementos de jogo, um quiz de conhecimentos técnicos e um sistema de premiação com troféus, tudo para proporcionar uma jornada envolvente ao usuário.

## 🚀 Tecnologias Utilizadas

* **Angular:** Framework principal para o desenvolvimento da Single Page Application (SPA).
* **TypeScript:** Linguagem de programação para garantir um código mais robusto e escalável.
* **HTML5 & CSS3:** Para a estrutura e estilização da interface do usuário.
* **Local Storage:** Utilizado para persistência de dados essenciais da sessão (status de login, carro escolhido, pontuação do quiz).
* **Angular Router:** Para gerenciamento de navegação e proteção de rotas.
* **Forms (Template-driven):** Para a criação do formulário de login.

## ✨ Funcionalidades

O projeto oferece um fluxo gamificado que inclui:

1.  **Login Simulado:**
    * Um formulário de login simples para acesso à aplicação.
    * **Credenciais de Teste:** Usuario: `ford` | Senha: `ford123`
    * Utiliza `localStorage` para simular o status de autenticação.
2.  **Seleção de Carro:**
    * Permite ao usuário escolher um carro antes de iniciar a experiência principal.
    * O botão de "Iniciar Jogo" é desabilitado até que um carro seja selecionado, garantindo um fluxo guiado.
    * O carro escolhido é salvo no `localStorage` para ser recuperado posteriormente.
3.  **Jogo Interativo (Base):**
    * Uma base para um jogo onde o usuário pode interagir.
    * A pontuação do jogo é calculada e armazenada.
    * **(Detalhar aqui brevemente a mecânica do seu jogo se já estiver mais desenvolvida, ex: "Um jogo de desvio de cones com pontuação baseada no tempo de sobrevivência.")**
4.  **Quiz de Conhecimentos Front-end:**
    * Após o jogo, o usuário é direcionado a um quiz com perguntas relevantes sobre Front-end.
    * A pontuação final do quiz é crucial para a próxima etapa.
5.  **Dashboard de Progresso e Troféus:**
    * Uma tela de dashboard que exibe a pontuação final do quiz.
    * A pontuação determina o tipo de troféu conquistado:
        * **Troféu de Ouro:** Pontuação acima de 300
        * **Troféu de Prata:** Pontuação entre 101 e 300
        * **Troféu de Bronze:** Pontuação até 100
    * O troféu e a pontuação são persistidos no `localStorage`.
6.  **Proteção de Rotas:**
    * Implementação de Guards de Rota (`CanActivate`) para garantir que o usuário siga o fluxo correto da aplicação.
    * Páginas como o Dashboard e a seleção de jogo só podem ser acessadas após o login e a conclusão das etapas anteriores (quiz).
7.  **Redirecionamento Inteligente:**
    * O componente de login, sendo reutilizável, redireciona para diferentes destinos (Dashboard ou a página do Jogo) dependendo de onde foi chamado, utilizando parâmetros de rota (`queryParams`).
8.  **Página 404 (Não Encontrada):**
    * Uma rota wildcard (`**`) garante que o usuário seja direcionado a uma página de erro amigável caso tente acessar uma URL inválida.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [Angular CLI](https://angular.io/cli) (instale via npm: `npm install -g @angular/cli@19.2.15`)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/caamarante/ProjetoFinal_Ford.git](https://github.com/caamarante/ProjetoFinal_Ford.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd ProjetoFinal_Ford
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```

### Executando a Aplicação

1.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve -o
    ```
    Isso abrirá a aplicação automaticamente no seu navegador padrão (`http://localhost:4200/`).

## 🗺️ Estrutura de Rotas Principal

* `/login`: Página de login da aplicação.
* `/game`: Página onde o jogo interativo é executado.
* `/quiz`: Página com o quiz de conhecimentos Front-end.
* `/select-game`: Página de seleção de carro (protegida).
* `/dashboard`: Dashboard do usuário com pontuação e troféu (protegida).
* `/user`: Página de perfil do usuário (protegida).
* `**` (qualquer outra rota): Redireciona para a página 404 (Não Encontrada).

## 💡 Próximos Passos e Melhorias Potenciais

* **Implementação de Backend:** Substituir o `localStorage` por uma API RESTful para persistência de dados mais segura e escalável (autenticação, pontuação, informações de usuário).
* **Expansão do Jogo:** Adicionar mais fases, obstáculos, mecânicas de jogo e power-ups.
* **Quiz Dinâmico:** Carregar perguntas de uma API e permitir diferentes níveis de dificuldade.
* **Responsividade:** Aprimorar o design para garantir uma ótima experiência em diversos dispositivos (mobile, tablet, desktop).
* **Animações e Efeitos Visuais:** Adicionar mais animações para tornar a experiência ainda mais imersiva.
* **Testes Unitários e de Integração:** Implementar testes para garantir a estabilidade e a qualidade do código.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar algum bug, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

Feito por Ana Amarante
