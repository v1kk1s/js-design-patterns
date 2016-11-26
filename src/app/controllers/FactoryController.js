import View from '../views/factoryView.js';
import PlayersMaker from './Factory';

export default class FactoryController {
  constructor (container) {
    this.view = new View(container);
    this.playersMaker = new PlayersMaker;
    this.render();
    this.initEvents();
  }

  initEvents() {
    const place1 = {hd: 4, d: 4, att: 2};
    const place2 = {hd: 3, d: 5, att: 1};
    const place3 = {hd: 4, d: 3, att: 3};

    document.getElementById('place1').addEventListener('click',  () => this.getPlace(place1));
    document.getElementById('place2').addEventListener('click',  () => this.getPlace(place2));
    document.getElementById('place3').addEventListener('click',  () => this.getPlace(place3));
  }

  getPlace (place) {
    const team = this.playersMaker.makeTeam(place);
    const losers = this.playersMaker.getLosers(team);
    this.addPlayers(team);
    this.addLosers(losers);
  };

  addPlayersToDocument(players, parent, clearParent = true) {

    if(clearParent) {
      document.getElementById(parent).innerHTML = '';
    }

    players.forEach((player) => {

      let div = document.createElement('div');
      div.className = "player";
      div.innerHTML = `
      <img src='../public/img/${player.img}'/>
      <p>${player.name}</p>
    `;

      document.getElementById(parent).appendChild(div);

    });
  }

  addLosers(losers) {
    this.addPlayersToDocument(losers.g, 'losers');
    this.addPlayersToDocument(losers.def, 'losers', false);
    this.addPlayersToDocument(losers.hDef, 'losers', false);
    this.addPlayersToDocument(losers.attack, 'losers', false);
  }

  addPlayers(team) {
    this.addPlayersToDocument(team.g, 'gate');
    this.addPlayersToDocument(team.def, 'defR');
    this.addPlayersToDocument(team.hDef, 'halfDR');
    this.addPlayersToDocument(team.attack, 'attackR');
  }

  render () {
    return this.view.render();
  }
}