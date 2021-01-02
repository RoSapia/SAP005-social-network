
/*import { loginGoogle } from "../../utils/history";*/
/*import { loginGoogle } from "../../services/index.js";*/

export const Login = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.id = 'form-login'
  rootElement.innerHTML = `
      <h1 class='LOGIN'>LOGIN</h1> 

      <form class='form'>
        <fieldset>
        <label for="email"></label>
        <input type="email" id="email" name="email" placeholder="Email" autocomplete="on" required><br><br>

        <label for="senha"></label>
        <input type="password" id="password" name="password" placeholder="Senha" autocomplete="off" inputmode="numeric" minlength="4" title="Digite uma senha de no mínimo 4 dígitos!" required><br><br>
        <input type="submit" name="loginButton" value="Sign in">
        <p class='register'>Não possui conta?  </p>
        <a class='link-register' name="register" href='/register' id='register'> Registre-se</a>
  	    </p>
      <a class="btn btn-outline-dark" href="/users/googleauth" role="button" style="text-transform:none">
      <img width="20px" style="margin-bottom:3px; margin-right:5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
      <p class="google-login">Entre pela conta Google</p>

       </fieldset>
          </form>
          
  `;

     //Bottom Google 
     const bottomGoogle = rootElement.querySelector ('google-btn');
      bottomGoogle.addEventListener('click',(event)=>{
      event.preventDefault();
      loginGoogle();
      })


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
