export default class ProfileView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class='prof' >


			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}