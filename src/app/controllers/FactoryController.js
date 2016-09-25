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
    const place1 = {hd: 4, d: 4, att: 2};
    const place2 = {hd: 4, d: 5, att: 1};
    const place3 = {hd: 4, d: 3, att: 3};

    document.getElementById('place1').addEventListener('click',  () => this.getPlace(place1));
    document.getElementById('place2').addEventListener('click',  () => this.getPlace(place2));
    document.getElementById('place3').addEventListener('click',  () => this.getPlace(place3));
  }

  getPlace (place) {
    const team = this.playersMaker.makeTeam(place);
  };

  render () {
    return this.view.render();
  }
}