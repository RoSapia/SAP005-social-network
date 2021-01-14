import { onNavigate } from '../../utils/history.js';
import { EditPosts } from './index.js';


export const returnCheckUser = (response) => {
        if (!response) {
          onNavigate('/login');
          const divError = document.querySelector('#div-msg')
          divError.innerHTML = "Você não pode acessar esta pagina sem estar logado. Por favor, efetue o login abaixo!";
          return "não logado"
        } else {
          return response.email
        }
      }

export const returnUserPosts = (response) => {
        console.log(response)
        if (response) {
          const divPost = document.querySelector('#publish-post')
          const post = document.createElement('div');
          post.id = response.id
          post.className = 'publish-box'
          divPost.appendChild(post)
          let idPost = document.getElementById(response.id) 
          idPost.innerHTML = '<div id="user">' + response.username + '</div>' +
         '<div id="createDate">' + response.createDate + '</div>' +
         '<div id="publishText">' + response.publishText + '</div>' +
         '<button id="likes-button">Like</button>'+
         '<button id="exclude-button">Excluir</button>' + 
         '<button id="edit-' + response.id +'">Editar</button>' ;
        idPost.querySelector(`#edit-${response.id}`).addEventListener("click", () => {
          console.log(response.id) 
         });
          idPost.querySelector(`#exclude-button`).addEventListener("click", () => {
            console.log(response.id) 
           });
           idPost.querySelector(`#Likes-button`).addEventListener("click", () => {
            console.log(response.id) 
           });
        } 
      }

      // Editar publicação 
       /* const editPostsButtonArray = rootElement.querySelectorAll('.post');
        editPostsButtonArray.forEach(button => {
         button.addEventListener('click',(event) => { 
          publishBox (evento); 
        });
        });
        const publishbox = (event) =>{
        const Posts = event.target.parentNode;
        togglepostBox(Posts, true);
        const buttonEnviarpost = Posts .querySelector('.Enviar-post');

        buttonEnviarpost.addEventListener('click', () => {
          executepost(Posts);
          sendpost(Posts);
        });
      }
      const executepost = (Posts) => {
        const sendpost = (Posts) => {
          const textareapost = Post.querySelector('.post-text');
          const holderpostBlock = Post.querySelector('.on-post');

       Post(textareapost.value)
      .then(() => {
        const textPValue = document.createElement("p");
        textPValue.textpost = textareapost.value;
        Posts.insertBefore(textPValue, holderpostBlock);
        togglepostBox(Posts, false);
        textareapost.value = "";
      })
      .catch(() => {
        alert('não editou');
      })
  }
  const togglepostBox = (Posts, show) => {
    const holderpostBlock = Post.querySelector('.on-post');
    if(show) {
      holderpostBlock.classList.add('display');
    } else {
      holderpostBlock.classList.remove('display');
    }
  }
  return rootElement;
};
       
        //Clik likes 
        const LikesPostsButtonArray = rootElement.querySelectorAll('.response.like');
        LikesPostsButtonArray.forEach(button => {
          button.addEventListener('click',(e) => { 
           executelike(e);
           sendlike(e);

        })
      });
      const executeLike = (e) => {
        const sendLike = (e) => {
          likedPost()
          .then((retorno) => {
            console.log(retorno);
            e.target.classList.add('liked');
          })

          .catch(() => {
            alert('não curtiu');
          });
        };
        return rootElement;
      };*/
