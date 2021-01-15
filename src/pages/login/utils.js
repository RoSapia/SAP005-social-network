import { onNavigate } from '../../utils/history.js';

export const returnFirebase = (response) => {
    if (response instanceof Error) {
        const divError = document.querySelector('.conteiner')
        divError.innerHTML = "Dados inválidos. Senha incorreta ou usuário não existente.";
    } else {
        onNavigate('/posts');
    }
}