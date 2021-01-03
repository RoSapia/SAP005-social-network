import { onNavigate } from '../../utils/history.js';

export const returnFirebase = (response) => {
        if (response instanceof Error) {
          const divError = document.querySelector('#div-msg')
          divError.innerHTML = "Dados inválidos. Senha incorreta ou usuário não existe.";
        } else {
          onNavigate('/posts');
          const divError = document.querySelector('#login')
        }
      }
