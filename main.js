import { renderHome } from './src/pokedex/views';
import './style.css';

document.querySelector('#app').innerHTML = `
  
`;

const app = document.querySelector('#app');

renderHome(app);
