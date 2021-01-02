import { onNavigate } from '../../utils/history.js';

export const returnPosts = (response) => {
        if (response) {
          const username = document.querySelector('#username')
          username.innerHTML = 'Olá ' + response.email + ', seja bem vindo novamente!'
        } else {
          onNavigate('/login');
          const divError = document.querySelector('#error-msg')
          divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
        }
      }
