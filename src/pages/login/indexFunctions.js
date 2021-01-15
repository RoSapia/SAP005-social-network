import { firebaseActions } from '../../services/index.js'

export const actions = {
  loginUser(email, password) {
    event.preventDefault();
    let loginResponse = firebaseActions.loginUserFirebase(email, password)
    console.log(loginResponse)
    if (loginResponse) {
      'redireciona pra outra pagina'
    } else {
      'não logou, exibe mensagem de erro'
    }
  }
}
