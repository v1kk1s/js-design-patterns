export default function PubSub() {

  const event = () => {

    var topics = {};

    return {

      subscribe: function (topic, listener) {
        if (!topics[topic]) topics[topic] = { queue: [] };

        var index = topics[topic].queue.push(listener) -1;

        return {
          remove: () => {
            delete topics[topic].queue[index];
          }
        };
      },

      publish: (topic, info) => {
        if(!topics[topic] || !topics[topic].queue.length) return;

        var { queue } = topics[topic];
        queue.forEach((item) => {
          item(info || {});
        });
      },
    };
  };

  const ev = new event();

  ev.subscribe('showSamePositionPlayers', (obj) => {
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

  return {
    publish: (topic, info) => {
      ev.publish(topic, info);
    },
  }

};