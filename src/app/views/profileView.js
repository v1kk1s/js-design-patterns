export default class ProfileView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }

  render () {

    this.content = `
			<div class='prof' >

        <h1>Enter vk id</h1>
        <input type='text' id='vk'/>
        <button id='vkBtn'>Get vk name</button>
        <h3 id='vkName'></h3>

        <h1>Enter fb id</h1>
        <input type='text' id='fb'/>
        <a href='http://findmyfbid.com/' target='_blank' rel='noopener noreferrer'>Don\`t know your facebook id?</a>
        <button id='fbBtn'>Get fb name</button>
        <h3 id='fbName'></h3>
			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}