import { onNavigate } from '../../utils/history.js';

export const returnFirebase = (response) => {
        if (response instanceof Error) {
          const divError = document.querySelector('#div-msg')
          divError.innerHTML = "Usuário já existeste.";
        } else {
          onNavigate('/login');
          const divmsg = document.querySelector('#div-msg')
          divmsg.innerHTML = "Usuário cadastrado com sucesso. Faça o login abaixo para entrar";
        }
      }
