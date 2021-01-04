export const Register = () => {

  const rootElement = document.createElement('form');
  rootElement.id='register-user'
  rootElement.innerHTML =`
  <h1>REGISTRE_SE</h1>
        <div class="email-register">
        <label for="email">E-mail</label>
        <input type="email" class="email" name="email" placeholder="Email" autocomplete="on" required>
        </div>
        <div class="password-register">
        <label for="password">Senha</label>
        <input class="password" type="password" name="password" minlength="6" required>
        </div>
        <div class="register-btn">
        <button id="register-button" type="submit">Registrar-se</button>
        </div>
  `;
  return rootElement;
};
