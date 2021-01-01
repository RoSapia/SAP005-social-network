export const Register = () => {

  const rootElement = document.createElement('form');
  rootElement.id='register-user'
  rootElement.innerHTML =`
  <h1>REGISTRE_SE</h1>

        <label for="name">Nome</label>
        <input id="user-name" type="text" name="user-name" required>
        <label for="email">E-mail</label>
        <input type="email" class="email" name="email" placeholder="Email" autocomplete="on" required>
        <label for="password">Senha</label>
        <input class="password" type="password" name="password" minlength="6" required>
        <label class="repeat-password" for="repeat-password">Confirmar senha</label>
        <input class="repeat-password" type="password" name="confirm-password" minlength="6" required>
        <button id="register-button" type="submit">Registrar-se</button>
  `;
  rootElement.innerHTML = templateRegister
  return rootElement;
};
