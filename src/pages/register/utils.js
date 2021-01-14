import { onNavigate } from '../../utils/history.js';

export const returnFirebase = (response) => {
  if (response instanceof Error) {
    const divError = document.querySelector('.conteiner')
    divError.innerHTML = "Usuário já existeste.";
  } else {
    onNavigate('/login');
    const divmsg = document.querySelector('.conteiner')
    divmsg.innerHTML = "Usuário cadastrado com sucesso. Faça o login abaixo para entrar";
  }
}
