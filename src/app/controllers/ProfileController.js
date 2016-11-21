import View from '../views/profileView';
import Facade from './Facade';

export default class FactoryController {
  constructor (container) {
    this.view = new View(container);
    this.facade = Facade; // redundunt
    this.render();
    this.initEvents();
  }

  initEvents() {
    document.getElementById('vkBtn').addEventListener('click', this.getVkName.bind(this));
    document.getElementById('fbBtn').addEventListener('click', this.getFbName.bind(this));
  }

  render () {
    return this.view.render();
  }

  getVkName () {
    const id = document.getElementById('vk').value;
    this.facade.facade({vkId: id});
  }

  getFbName () {
    const id = document.getElementById('fb').value;
    this.facade.facade({fbId: id});
  }
}