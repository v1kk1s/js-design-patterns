import Factory from '../controllers/FactoryController';
import Profile from '../controllers/ProfileController.js';

export default class Router {
	constructor (container) {
		this.container = container;
		this.content = null;
		this.routes = [];
	}

	route (path, content) {
		this.routes[path] = {content: content};
	}

	getCurrentRoute() {
		return location.pathname || '/';
	}

	run () {
		let currentURL = this.getCurrentRoute();
		this.render(currentURL);
	}

	go(route, convId) {
		let stateObj = convId ? {convId: convId} : {};
		this.container.innerHTML= '';

		history.pushState(stateObj, route, route);

		this.routes[route].content.forEach( (el) => {
			return (new el(this.container));
		} );
	}

	render (currentURL, convId) {
		this.route('/', [Factory]);
		//this.route('/', [Profile]);

		this.go(currentURL, convId);
	}
}