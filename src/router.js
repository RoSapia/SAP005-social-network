// Este é seu ponto de entrada da sua aplicação
import { onNavigate } from './utils/history.js';
import { Home } from './pages/home/index.js';
import { Login } from './pages/login/index.js';
import { Register } from './pages/register/index.js';
import { Posts } from './pages/posts/index.js';
import { EditPosts } from './pages/editPosts/index.js';

const routeRender = () => {
    const rootDiv = document.getElementById('root');
    const routes = {
        '/': Home,
        '/login': Login,
        '/register': Register,
        '/posts': Posts,
        '/editPosts': EditPosts

    };

    rootDiv.innerHTML = '';
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.addEventListener('popstate', routeRender);
window.addEventListener('load', () => {
    document
        .getElementById('home')
        .addEventListener('click', (e) => {
            e.preventDefault();
            onNavigate('/')
        });
    document
        .getElementById('login')
        .addEventListener('click', (e) => {
            e.preventDefault();
            onNavigate('/login')
        });
    document
        .getElementById('cadastro')
        .addEventListener('click', (e) => {
            e.preventDefault();
            onNavigate('/register')
        });
    routeRender();
});
