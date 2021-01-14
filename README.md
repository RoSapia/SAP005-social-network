#  Rede Social 

## Rede Mulheres Musicistas 

- [1. Resumo do Projeto ](#1-resumo-do-projeto)
- [2. Pesquisa de Usuarios ](#2-pesquisa-de-usuario )
- [3. Definição de Usuário](#3-definição-de-usuário)
- [4. Definição do Produto ](#4-definição-de-produto)
- [5. Desenho da Interface](#5-desenho-interface)
- [6. Fluxograma](#6-Fluxograma)
- [7. Interface](#7-interface)
- [8. Funcionamento da Interface](#8-Funcionamento-da-interface)
- [9. Autoras](#9-Autoras)

## 1. Resumo do Projeto 

Esse projeto trata-se de uma Rede Social voltada somente para Mulheres Musicistas 
onde elas teram acesso a contato de outras Musicistas troca de informações como partituras, teorias, tecnias e procurar grupos para ingressar em uma Banda etc.

## 2. Pesquisa de Usuários 

Trabalhamos com um formulario de pesquisa , e apartir das infromações foram elaboradas o perfil de usuários e detalhes que seram utilizados da plataforma.

![Pesquisa de usuario](imagem-Rede-Sociais-(1).jpg)


## 3. Definição de Usuário e História 
![Perfil de Usuárias](imagem-Rede-Sociais-(2).jpg)



## 4. Definição do Produto 

•	1 - Criamos uma interface com a implementação de “Home” e “Login”  e  “Cadastro” utilizando a função “onNavigante” que ira registrar cada tela e histórico de navegação .

•	2- Em Cadastro o usuário poderá efetuar o cadastro inserindo nome , email e senha . 

•	3- em Login implementamos Firebase Authentication e Cloud Firestore onde o usuário já cadastrado poderá acessar a pagina inserindo no campo email e senha ou utilizando sua conta do Google .

•	4 -Após inserir sua email e senha a usuária terá acesso a  pagina Home , onde poderá postar mensagens, terá acesso aos botões de editar e excluir sua mensagem postada.

•	5- Terá acesso também postagens publicadas por outras usuárias onde poderá curti-las utilizando o botão “Like”.

- **Definição de pronto:**
  - Utilizamos uma SPA.
  - Interface _responsivo_.
  - Fazemos _code review_ .
  - Foram efetuados _tests_ unitários.
  - Foram efetuados testes manuais buscando erros e imperfeições simples.
  - Foram efetuados testes de usabilidade e incorporar o _feedback_ dos usuários como
    melhorias.

  - Quem são os principais usuários do produto.
Os pricipais Usuários são Mulheres que trabalham na areá musical e admiradoras.
 Exemplo : 
 Estudande de Música
 Professoras
 Musiscistas proficionais
 Musicoterapeitas
 Protutoras 
 Hobistas

 - Qual problema o produto resolve/para que ele serve para esses usuários.

## 5. Desenho da Interface
 ![Protótipo](imagem-Rede-Sociais.jpg)


 
### 5.3 Histórias de usuário

Depois de entender as necessidades de seus usuários, escreva as Histórias de
Usuário. Elas representam tudo o que ele precisa fazer/ver na Rede Social. Cada
uma de suas histórias de usuário deve possuir:


## 6. Fluxograma 
![Fluxograma](imagem-Fluxograma-Mulheres-Musicistas.jpg)

## 7. Interface 


## 8. Funcinamento da Interface

.Como a Interface Funciona
A Usuária poderá acessar a rede social fazendo cadastro na menu Login ou através da sua conta Google, utilizando os demais menus com seguintes opções :
•	Home 
•	Perfil (Criar um Perfil com nome)
•	Publicar (compartilhar texto e informações com as usuárias) 
•	Acessar mensagem e publicações de outras usuárias
* Curtir mensagem do outras usuárias 
•	Clicando em (Sair) o usuário retornar ao inicio do site

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

## 9. Autoras :
Roberta Sapia / Sara Silva / Roberta Kelly 






