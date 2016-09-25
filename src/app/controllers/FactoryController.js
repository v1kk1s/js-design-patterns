import View from '../views/factoryView.js';
import Router from '../router/router';
import PlayersMaker from './Factory';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.router = new Router(document.getElementById('app'));
    this.playersMaker = new PlayersMaker;
    this.render();
    this.initEvents();
  }

  initEvents() {
    //this.playersMaker.makePlayer();
    this.playersMaker.makeTeam();
  }

  render () {
    return this.view.render();
  }
}