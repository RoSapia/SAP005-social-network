export const Login = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
      <h1>LOGIN</h1>

      <form>
        <fieldset>
        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>

        <label for="senha"></label>
        <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="4" title="Digite uma senha de no mínimo 4 dígitos!" required><br><br>
        <input type="submit" value="Sign in">
        </fieldset>
      </form>
  `;
    //const email = rootElement.getElementById("email")
    //const password = rootElement.getElementById("password")

    firebase.auth().createUserWithEmailAndPassword('a@a.com.br', '123123')
        .then((user) => {
            // Signed in
            // ...
            console.log("Usuario cadastrado")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorMessage)
        });



    firebase.auth().signInWithEmailAndPassword('a@a.com.br', '123123')
        .then((user) => {
            console.log('login deu certo')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        });


    return rootElement;
};