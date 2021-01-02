// Callback para o firebase. Verifica se houve erro no login.
export const returnFirebase = (response) => {
        if (response instanceof Error) {
          const divError = document.querySelector('#error-msg')
          divError.innerHTML = "Dados inválidos. Senha incorreta ou usuário não existe.";
        } else {
          window.location.assign(window.location.origin + '/posts');
          console.log("redireciona")
        }
      }
