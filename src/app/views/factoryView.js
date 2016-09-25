export default class FactoryView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class='fact' >

			  <div class='fact-choose'>
			    <p>Вибери розстановку</p>
			    <div class='fact-place' id='place1'>4-4-2 </div>
			    <div class='fact-place' id='place2'>4-5-1</div>
			    <div class='fact-place' id='place3'>3-4-3</div>
			  </div>

        <div class='fact-field'>
          <div class='fact-center'></div>
          <div class='fact-gate left'></div>
          <div class='fact-circle left-c'></div>
          <div class='fact-gate right' id='gate'></div>
          <div class='fact-attack right' id='attackR'></div>
          <div class='fact-halfD right' id='halfDR'></div>
          <div class='fact-defense right' id='defR'></div>
          <div class='fact-circle right-c'></div>
        </div>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}