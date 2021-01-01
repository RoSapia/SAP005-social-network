import { actions } from "./indexFunctions.js"

export const Login = () => {
        // Coloque sua página
    const rootElement = document.createElement('form');
    rootElement.id = 'login-user'
    rootElement.innerHTML = `
    <h1>LOGIN</h1>

    <fieldset>
    <label for="email"></label>
    <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>
    <label for="senha"></label>
    <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="4" title="Digite uma senha de no mínimo 4 dígitos!" required><br><br>
    <input type="submit" name="loginButton" value="Sign in">
    <p class='register'>Não tem conta,
    <a class='link-register' href='#register' id='register'>Registre-se</a>
    </p>
    </fieldset>
`;

    rootElement.loginButton.addEventListener("click", (event) => {
      const email = rootElement.email.value
      const password = rootElement.password.value
      actions.loginUser(email, password)
    });

    return rootElement;
}
