export const Publish = () => {
    const rootElement = document.createElement('form');
    rootElement.id = 'publish'
    rootElement.innerHTML = `
    
    <label for="title">Criar Publicação</label>
    <div>
        <textarea id="text-post" cols="40" rows="15" placeholder="Seu texto aqui..."></textarea>
     </div>
    <div>
        <button id="send-post">Publicar</button>
    </div>
    <div class="about-post">
        <button id="edit-post">Editar Publicação</p>
        <button id="delete-post">Excluir Publicação</p>
        <button id="likes-post">Likes</p>
    </div>       
`;
return rootElement;
};

