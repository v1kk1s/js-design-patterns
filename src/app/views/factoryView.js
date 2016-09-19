export default class FactoryView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class="factory" >

			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}