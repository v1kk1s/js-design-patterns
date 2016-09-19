import View from '../views/factoryView.js';
import Router from '../router/router';

export default class RecentController {
  constructor (container) {
    this.view = new View(container);
    this.router = new Router(document.getElementById('app'));
    this.render();
  }

  initEvents() {
  }

  render () {
    return this.view.render();
  }
}