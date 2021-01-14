import { firebaseActions } from "../../services/index.js"
import { returnFirebase } from "./utils.js"

export const Login = () => {
    // Coloque sua página
    const rootElement = document.createElement('form');
    rootElement.id = 'form-principal'
    rootElement.innerHTML = `
    <h1>LOGIN</h1>
    <div id="div-msg"></div>
    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>
    <label for="senha"></label>
    <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="6" title="Digite uma senha de no mínimo 6 dígitos!" required><br><br>
    <input type="submit" id="login-button" value="Sign in">
    <p class='register'>Não possui conta?
    <a class='link-register' name="register" href='/register' id='register'> Registre-se</a>
    </p>
    <div class="google-login">
    Entrar com:
    <button class="google-button" id="google-button"><span class="icon-google"></span></button>
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
      const email = rootElement.querySelector('#email').value
      const password = rootElement.querySelector('#password').value
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
