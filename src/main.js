import './styles/styles.js';
import { RequestService } from "./http/request.service.js";
import { Card } from './components/card.component.js';


const mainContent = document.querySelector('#app').querySelector('#main-content');
const loader = document.querySelector('#app').querySelector('#loader-parent');

loader.classList.remove('loader-parent-hidden');
loader.classList.add('loader-parent-visible');

const data = await RequestService.fetchLoadTFunction();

loader.classList.remove('loader-parent-visible');
loader.classList.add('loader-parent-hidden');

mainContent.classList.remove('main-content-hidden');
mainContent.classList.add('main-content-visible');
mainContent.innerHTML = '';

for (let i = 0; i < data.Payload.length; i++) {
  const card = new Card(data.Payload[i]);
  mainContent.innerHTML += card.render();
}
