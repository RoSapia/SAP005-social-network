import { onNavigate } from '../../utils/history.js';

export const returnFirebase = (response) => {
    if (response instanceof Error) {
        const divError = document.querySelector('.conteiner')
        divError.innerHTML = "Usuário existente. Faça login ou cadastre-se com outro e-mail.";
    } else {
        onNavigate('/login');
        const divmsg = document.querySelector('.conteiner')
        divmsg.innerHTML = "Usuário cadastrado com sucesso. Faça o login para entrar.";
    }
}