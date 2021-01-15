import { firebaseActions } from "../../services/index.js"

export const loginActions = {
    createUser(el) {
        el.registerButton.addEventListener("click", (event) => {
            event.preventDefault();
            firebaseActions.createUser(el.email.value, el.password.value, errorFirebase)
        })
    }
}

const errorFirebase = (error) => {
    if (error instanceof Error) {
        invalidFirebaseLogin.push(error);
        validationLogin.innerHTML = invalidFirebaseLogin.join('')
    } else {
        window.location.assign(window.location.origin);
    }
}