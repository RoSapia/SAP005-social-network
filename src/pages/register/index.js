import { firebaseActions } from "../../services/index.js"
import { returnFirebase } from "./utils.js"

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.id='div-principal'
  rootElement.innerHTML =`
    <div class='conteiner'>
      <div class='first-content'>
        <div class='first column'>
          <h2 class='title'>Criar conta</h2>
          <div class='social-media'>
            <ul class='list-social-media'>
              <a href='#' class='link-social-media'>
                <li class='item-social-media' id='google-button'>
                  <i class="fab fa-google"></i>
                </li>
              </a>
            </ul>
          </div>
          <p class='description'>ou use seu email:</p>
          <form class='form'>
            <label class='label-input'>
              <i class="far fa-user icon-modify"></i>
              <input type='text' placeholder='Nome de Usuário' id='username' autocomplete='on' required></input>
            </label>

            <label class='label-input'>
              <i class="far fa-envelope icon-modify"></i>
              <input type='email' id='email' autocomplete='on' placeholder='Email' required></input>
            </label>

            <label class='label-input'>
              <i class="fas fa-lock icon-modify"></i>
              <input type='password' id='password' minlength="6" required placeholder='Senha'></input>
            </label>

            <button class='register-button' type='submit'>Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  `;
  
  // Cria login utilizando e-mail e senha
  const registerButton = rootElement.querySelector('.register-button')
  registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    const username = rootElement.querySelector('#username').value
    const email = rootElement.querySelector('#email').value
    const password = rootElement.querySelector('#password').value
    firebaseActions.createUser(username, email, password, returnFirebase)
  })

  return rootElement;
};
