import View from '../views/profileView';
import Facade from './Facade';

export default class FactoryController {
  constructor (container) {
    this.view = new View(container);
    this.facade = Facade;
    this.render();
    this.initEvents();
  }

  initEvents() {
    this.facade.facade();
  }

  render () {
    return this.view.render();
  }
}