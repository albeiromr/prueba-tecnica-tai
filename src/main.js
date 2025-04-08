import './styles/styles.js';
import { RequestService } from "./http/request.service.js";
import { Card } from './components/card.component.js';
import {data } from './mockdata.js';

//const data = await RequestService.fetchLoadTFunction();

const mainContent = document.querySelector('#app').querySelector('#main-content');
mainContent.innerHTML = '';

for (let i = 0; i < data.Payload.length; i++) {
  const card = new Card(data.Payload[i]);
  mainContent.innerHTML += card.render();
}
