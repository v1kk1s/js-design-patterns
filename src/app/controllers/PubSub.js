export default class PubSub {

  constructor() {

    if(!PubSub.instance) {

      PubSub.instance = this;

    }

    this.topics = {};

    return PubSub.instance;

  }

  subscribe (topic, listener) {

    if(!topic || !listener) return;

    if (!this.topics[topic]) this.topics[topic] = { queue: [] };

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