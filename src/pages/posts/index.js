export const Posts = () => {
    const rootElement = document.createElement('section');
    rootElement.id = 'posts'
    rootElement.innerHTML = `

                <div class="user">
                    <p>Nome Usuário</p>
                </div>
                <div id="text-post">
                    <p> Postagem aqui</p>  
                </div>
                <div id="like">
                    <p> Dar like </p> 
                </div>
`;
return rootElement;
};
