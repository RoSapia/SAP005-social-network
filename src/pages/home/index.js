import { firebaseActions } from "../../services/index.js"
import { returnHome } from "./utils.js"

export const Home = () => {
  firebaseActions.loginCheck(returnHome)

  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
      <h1>Bem vinda a Rede Mulheres Musicistas</h1>

  `;
  return rootElement;
};
