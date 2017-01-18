export default class PubSub {

  constructor() {

    if(!PubSub.instance) {

      PubSub.instance = this;

    }

    this.topics = {};

    return PubSub.instance;

  }

  subscribe (topic, listener) {
    if (!this.topics[topic]) this.topics[topic] = { queue: [] };
    var index = this.topics[topic].queue.push(listener) -1;
    return {
      remove: () => {
        delete this.topics[topic].queue[index];
      }
    };
  };

  unsubscribe (topic, listener) {
    const index = this.topics[topic].queue.indexOf(listener);
    delete this.topics[topic].queue[index];
  };

  publish (topic, info) {
    if(!this.topics[topic] || !this.topics[topic].queue.length) return;

    var { queue } = this.topics[topic];
    queue.forEach((item) => {
      item(info || {});
    });
  };

};