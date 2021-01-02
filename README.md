#  Rede Social

## Mulheres Musicistas 

- [1. Resumo do projeto](#2-resumo-do-projeto)
- [3. Pesquisa de Usuarios ](#3-pesquisa-de-usuario )
- [4. Definição de Usuário](#4-definição-de-usuário)
- [5. Critérios de aceitação mínimos doprojeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Entrega](#7-entrega)
- [8. Guias, dicas e leiturascomplementares](#8-guias-dicas-e-leituras-complementares)


## 1. Resumo do projeto

Esse projeto trata-se de uma Rede Social voltada somente para Mulheres Musicistas 
onde elas teram acesso a contato de outras Musicistas troca de informações como partituras, teorias, tecnias e procurar grupos para ingressar em uma Banda etc.

## 3. Pesquisa de Usuarios 

Trabalhamos com um formulario de pesquisa , e apartir das infromações foram elaboradas o perfil de usúrios e detalhes que seram utilizados da plataforma.

![Pesquisa de usuario](imagem-pesquisa-RD-png)


## 4. Definição de Usuário 


## 5. Critérios de aceitação mínimos do projeto


### 5.2 Definição do produto

No `README.md`, conte-nos brevemente como você mapeou as necessidades dos seus
usuários e como você chegou à definição final do seu produto. É importante que
detalhe:

- Quem são os principais usuários do produto.
- Qual problema o produto resolve/para que ele serve para esses usuários.

### 5.3 Histórias de usuário

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:



- **Critérios de aceitação:** tudo o que deve acontecer para satisfazer as
  necessidades do usuário.

- **Definição de pronto:** todos os aspectos técnicos que devem ser atendidos
  para que, como equipe, saibam que essa história está finalizada e pronta para
  ser publicada. **Todas** suas histórias de usuário (com exceções), devem
  incluir esses aspectos em sua definição de pronto (além de tudo o que precisa
  adicionar):

  - Ser uma SPA.
  - Ser _responsivo_.
  - Receber _code review_ de pelo menos uma parceira de sua equipe.
  - Fazer _tests_ unitários.
  - Fazer testes manuais buscando erros e imperfeições simples.
  - Fazer testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.

### 5.4 Desenho da Interface de Usuário (protótipo de baixa fidelidade)

Você deve definir qual será o fluxo que o usuário seguirá dentro do seu
aplicativo e, com isso, criar a interface do usuário (UI) que siga este fluxo.

### 5.5 Responsivo

Deve funcionar bem em dispositivos de tela grande (computadores, laptops etc.) e
pequena (_tablets_, telefones celulares etc.). Sugerimos seguir a técnica
_`mobile first`_ (mais detalhes sobre essa técnica ao final).

### 5.6 Considerações sobre o comportamento da Interface do Usuário (UI)

Essas considerações ajudarão você a escrever as definições de pronto de sua
H.U.:

#### Criação e login de conta de usuário

- _Login_ com Firebase:
  - Para o _login_ e postagens na timeline, você pode usar
    [Firebase Authentication](https://firebase.google.com/docs/auth) e [Cloud Firestore](https://firebase.google.com/docs/firestore)
  - O usuário deve poder criar uma conta de acesso ou autenticar-se com conta de
    e-mail e senha e também com uma conta do Google.
- Validações:
  - Somente usuários com contas válidas têm acesso permitido.
  - Não haver usuários repetidos.
  - A conta do usuário deve ser um email válido.
  - O que o usuário digita no campo de senha (_input_) deve ser secreto.
- Comportamento:
  - Quando o formulário de registro ou login é enviado, ele deve ser validado.
  - Se houver erros, mensagens descritivas devem ser exibidas para ajudar o
    usuário.

#### Timeline/linha do tempo

- Validações:
  - Ao publicar, deve ser validado se há conteúdo no _input_.
- Comportamento:
  - Ao recarregar o aplicativo, é necessário verificar se o usuário está
    _logado_ antes de exibir o conteúdo,
  - Conseguir publicar um _post_.
  - Poder dar e remover _likes_ em uma publicação. Máximo de um por usuário.
  - Visualizar contagem de _likes_.
  - Poder excluir uma postagem específica.
  - Solicitar confirmação antes de excluir um _post_.
  - Ao clicar em editar um _post_, você deve alterar o texto para um _input_ que
    permite editar o texto e salvar as alterações.
  - Ao salvar as alterações, você deve voltar ao texto normal, mas com a
    informação editada.
  - Ao recarregar a página, poder ver os textos editados.

### 5.7 Considerações técnicas sobre front-end

- Separar a manipulação do DOM da lógica (separação de responsabilidades).
- Ter várias telas. Para isso, seu aplicativo deve ser um [Single Page
  Application
  (SPA)](https://pt.wikipedia.org/wiki/Aplicativo_de_p%C3%A1gina_%C3%BAnica)
- Alterar e persistir dados. Os dados que você adiciona ou modifica devem
  persistir por todo o aplicativo. Recomendamos que você use o
  [Firebase](https://firebase.google.com/) para isso também.

#### Testes unitários

- Lembre-se de que não há _setup_ de **testes** definido, isso dependerá da
  estrutura do seu projeto. Você não deve esquecer de pensar sobre os testes.
  Eles podem ajudar a definir a estrutura e sua lógica.

- Os testes de unidade devem cobrir no mínimo 70% de _statements_, _functions_,
  _lines_ e _branches_.

### 5.8 Considerações técnicas UX

- Faça pelo menos 2 entrevistas com os usuários.
- Faça um protótipo de baixa fidelidade.
- Verifique se a implementação do código segue as diretrizes do protótipo.
- Faça sessões de teste de usabilidade com o produto em HTML.

## 6. Hacker Edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se **você terminou** e
cumpriu todos os requisitos acima e sobrou tempo, tente concluí-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem do
projeto.

- Criar posts com imagens.
- Procurar usuários, adicionar e excluir "amigos".
- Definir a privacidade de _posts_ (público ou apenas para amigos).
- Permitir ver na linha do tempo de usuários "não amigos" apenas os posts
  públicos.
- Permitir comentar ou responder a uma postagem.
- Editar perfil.

## 7. Entrega

O projeto será entregue subindo seu código no GitHub (`commit` /`push`) e a
interface será hospedada usando o [Firebase Hosting](https://firebase.google.com/docs/hosting).

---

## 8. Guias, dicas e leituras complementares

### Primeiros passos

Para começar, você precisará criar um _fork_ e _clone_ deste repositório.

### Instalação de Firebase

Este projeto está configurado para rodar por meio do servidor do Firebase. Para isso, será necessário possuir o [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) instalado globalmente em sua máquina. Utilize o comando `npm install -g firebase-tools`

Inicie um novo projeto web no [console do Firebase](https://console.firebase.google.com/) (pode desabilitar o analytics).

Caso apareça a opção de habilitar o Hosting na tela seguinte, selecionar.

Clique no menu lateral `Cloud Firestore` para criar uma nova database como `production mode` e escolher a região `us-east1`.

**IMPORTANTE** rodar todos os comandos do Firebase no terminal a partir da pasta raiz do projeto.

Executar o comando `firebase login` e realizar o [login](https://firebase.google.com/docs/cli#sign-in-test-cli) por meio de uma conta Google - deve abrir uma janela automaticamente, se não abrir pode clicar no link que vai aparecer no console.

Executar o comando `firebase init` para iniciar o setup do projeto.

Selecionar Hosting (aperte espaço para selecionar essa opção e depois enter).

Selecionar `Use an existing project` (o terminal vai mostrar o nome do projeto que você acabou de criar no site do Firebase).

Escrever `src` para definir como `public directory` (o padrão vai estar como `public`).

Escrever `y` para selecionar como SPA.

Escrever `N` para não fazer builds e deploys automáticos com GitHub.

O Firebase vai dizer que `src/index.html` já existe e pergunta se quer sobrescrever. Nesse momento não tem problema fazer isso, ele vai sobrescrever o que veio no boilerplate da Lab com uma página padrão do Firebase. Sugerimos dar `N`, para não sobrescrever o `index.html`.

Se der tudo certo, o Firebase vai criar o arquivo `.firebaserc` de configuração na pasta do projeto e estamos prontas pra continuar.

Instale as dependências do projeto rodando o comando `npm install`.

Para iniciar sua aplicação web, use o comando `npm start` que usamos nos projetos anteriores. Com esse comando, você deve ver em `http://localhost:5000` uma página padrão do Firebase, que está sendo renderizada de `src/index.html`.

