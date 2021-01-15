import { firebaseActions } from "../../services/index.js"
import { returnPublish } from "./utils.js"

export const Publish = () => {
    firebaseActions.loginCheck(returnPublish)
    const rootElement = document.createElement('form');
    rootElement.id = 'publish'
    rootElement.innerHTML = `
        <label for="title">Criar Publicação</label>
        <div>
            <textarea 
                id="text-post" 
                cols="40" rows="15" 
                placeholder="Seu texto aqui..." 
                required
            </textarea>
        </div>
        <div>
            <button id="send-post">Enviar</button>
        </div>
    `;

    // Salva uma publicação
    const createPost = rootElement.querySelector('#send-post')
    createPost.addEventListener('click', (event) => {
        event.preventDefault();
        const text = rootElement.querySelector('#text-post').value
        firebaseActions.createPost(text, returnPublish)
    })
    return rootElement;
};
