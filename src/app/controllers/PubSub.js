export default function PubSub() {

  var topics = {};

  return {

    subscribe: (topic, listener) => {
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