import { firebaseActions } from "../../services/index.js"

export const loginActions = {
  loginUser(el) {
    el.loginButton.addEventListener("click", (event) => {
      event.preventDefault();
      firebaseActions.loginUser(el.email.value, el.password.value, errorFirebase)
    });
  }
}

const errorFirebase = (error) => {
        if (error instanceof Error) {
          invalidFirebaseLogin.push(error);
          validationLogin.innerHTML = invalidFirebaseLogin.join('');
        } else {
          window.location.assign(window.location.origin);
        } }