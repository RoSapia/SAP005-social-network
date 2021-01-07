import { firebaseActions } from "../../services/index.js"
import { returnFirebase } from "./utils.js"

export const Register = () => {

  const rootElement = document.createElement('div');
  rootElement.id='register-user'
  rootElement.innerHTML =`
  <h1>REGISTRE_SE</h1>
    <form id="form-register">
    <div id="div-msg"></div>
        <div class="username-register register-padding">
        <label for="username">Nome de Usuário: </label>
        <input id="username" class="username" name="username" autocomplete="on" required>
        </div>
        <div class="email-register register-padding">
        <label for="email">E-mail: </label>
        <input type="email" id="email" class="email" name="email" autocomplete="on" required>
        </div>
        <div class="password-register register-padding">
        <label for="password">Senha: </label>
        <input class="password" id="password" type="password" minlength="6" required>
        </div>
        <div class="register-btn register-padding">
        <button id="register-button" type="submit">Registrar-se</button>
        </div>
    </form>
  `;


  // Cria login utilizando e-mail e senha
  const registerButton = rootElement.querySelector('#register-button')
  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = rootElement.querySelector('#username').value
    const email = rootElement.querySelector('#email').value
    const password = rootElement.querySelector('#password').value
    firebaseActions.createUser(username, email, password, returnFirebase)
  })

  return rootElement;
};

