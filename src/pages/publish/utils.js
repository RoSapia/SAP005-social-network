import { onNavigate } from '../../utils/history.js';

export const returnPublish = (response) => {
  if (!response) {
    onNavigate('/login');
    const divError = document.querySelector('.conteiner')
    divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
  }
}