import View from '../views/factoryView.js';
import PlayersMaker from './Factory';
import Observer from './Observer';
import PubSub from './PubSub';

export default class FactoryController {
  constructor (container) {
    this.view = new View(container);
    this.playersMaker = new PlayersMaker;
    this.observer = new Observer;
    this.pubSub = new PubSub();
    this.render();
    this.initEvents();
  }

  initEvents() {
    const place1 = {hd: 4, d: 4, att: 2};
    const place2 = {hd: 3, d: 5, att: 1};
    const place3 = {hd: 4, d: 3, att: 3};

    this.addPubSubSubscription();

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
      div.className = "player " + player.position;
      div.innerHTML = `
      <img src='../public/img/${player.img}'/>
      <p>${player.name}</p>
    `;

      if (parent === 'losers') {
        div.onmouseover = () => {
          //this.addObservers(player.position);
          this.publishToPubSub(player.position);
        };
      }

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

  addObservers(position) {
    this.observer.notifyObservers(position);
  }

  addPubSubSubscription(position) {

    this.pubSub.subscribe('showSamePositionPlayers', (obj) => {
      const { playerType } = obj;
      const highlitedPlayers = document.getElementById('field').getElementsByClassName(playerType);
      const allPlayers = document.getElementById('field').getElementsByClassName('player');

      for(let i=0; i<allPlayers.length; i++) {
        allPlayers[i].classList.remove('highlight');
      }

      for(let i=0; i<highlitedPlayers.length; i++) {
        highlitedPlayers[i].classList.add('highlight');
      }
    });

  }

  publishToPubSub(position) {
    this.pubSub.publish('showSamePositionPlayers', { playerType: position });
  }

  render () {
    return this.view.render();
  }
}