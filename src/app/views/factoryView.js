export default class FactoryView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class='fact' >
        <div class='fact-field'>
          <div class='fact-center'></div>
          <div class='fact-gate left'></div>
          <div class='fact-circle left-c'></div>
          <div class='fact-gate right'></div>
          <div class='fact-circle right-c'></div>
        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}