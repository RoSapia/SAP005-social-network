import { Register } from "../register/index.js"
import { loginActions } from "./indexFuncs.js"

export const Login = () => {
    const rootElement = document.createElement('form');
    rootElement.id = 'form-login'
    rootElement.innerHTML = `
    <h1 id="LOGIN" >LOGIN</h1>
    <div class="form"></div>
    <form>
    <fieldset>
    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>
    <label for="senha"></label>
    <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="6" title="Digite uma senha de no mínimo 4 dígitos!" required><br><br>
    <input type="submit" name="loginButton" value="Sign in">
    <p class='register'>Não possui conta?
    <a class='link-register' name="register" href='/register' id='register'> Registre-se</a>
    </p>
    </fieldset>
    <form>
`;

    loginActions.loginUser(rootElement)  
    
    return rootElement;
};
