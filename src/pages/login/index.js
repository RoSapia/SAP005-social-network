import { firebaseActions } from "../../services/index.js"
import { returnFirebase } from "./utils.js"

export const Login = () => {
    // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.id = 'div-principal'
  rootElement.innerHTML = `
    <div class='conteiner'>
      <div class='second-content'>
        <div class='second column'>
          <h2 class='title'>Entrar no WoPlay</h2>
          <div class='social-media'>
            <ul class='list-social-media'>
              <a href='' class='link-social-media'>
                <li class='item-social-media' id='google-button'>
                  <i class="fab fa-google" id='google-button'></i>
                </li>
              </a>
            </ul>
          </div>
          <p class='description'>ou use seu email:</p>
          <form class='form'>
            <label class='label-input'>
              <i class="far fa-envelope icon-modify"></i>
              <input type='email' class='email' placeholder='Email' autocomplete='on' required></input>
            </label>
            <label class='label-input'>
              <i class="fas fa-lock icon-modify"></i>
              <input type='password' class='password' placeholder='Senha' autocomplete='off' minlength='6' title='Digite uma senha de no mínimo 4 dígitos!' required></input>
            </label>

            <a href='#'>esqueci minha senha</a>
            <button class='btn' type='submit'>entrar</button>
          </form>
        </div>
      </div>

    </div>
  `;

    firebase.auth()
    .signOut()
    .then(function() {
      console.log('Sign-out successful.')
    })
    .catch(function(error) {
      console.log('An error happened.')
    });

    // Faz login utilizando e-mail e senha
    rootElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = rootElement.querySelector('.email').value
      const password = rootElement.querySelector('.password').value
      firebaseActions.loginUser(email, password, returnFirebase)
    })

    // Login via Google
    const googleButton = rootElement.querySelector('#google-button')
    googleButton.addEventListener('click', (event) => {
      event.preventDefault();
      firebaseActions.loginGoogle(returnFirebase)
    })
    return rootElement;
};
