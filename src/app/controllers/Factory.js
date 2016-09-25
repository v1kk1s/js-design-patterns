import DefensePlayers from '../models/Defense';
import HalfDefensePlayers from '../models/HalfDefense';
import AttackPlayers from '../models/Attack';
import GoalkeeperPlayers from '../models/Goalkeeper';
import _ from 'lodash';

export default function PlayersMaker() {
  const { defense } = new DefensePlayers;
  const { halfDefense } = new HalfDefensePlayers;
  const { attack } = new AttackPlayers;
  const { goalkeeper } = new GoalkeeperPlayers;

  function makePlayers(type, num) {
    let players = [];
    let player = {};

    while (num > 0) {

      switch (type) {
        case 'd': {
          player = getRandomPlayer(defense);
        }; break;

        case 'hd': {
          player = getRandomPlayer(halfDefense);
        }; break;

        case 'att': {
          player = getRandomPlayer(attack);
        }; break;

        default: {};
      };

      if(!_.some(players, player)) {
        players.push(player);
        num--;
      }
    }

    return players;

  };

  function getRandomPlayer(players) {
    let player = players[Math.floor(Math.random() * players.length)];
    return player;
  };

  return {

    makeTeam (position = {hd: 4, d: 4, att: 2}) {
      const {hd, d, att} = position;
      let team = {
        def: makePlayers('d', d),
        hDef: makePlayers('hd', hd),
        attack: makePlayers('att', att),
        g: [getRandomPlayer(goalkeeper)],
      };

      console.log(team, 'team');

      return team;
    },

  };

}