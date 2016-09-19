import Router from './router/router';

export default function start () {
	let router = new Router(document.getElementById('app'));
	router.run();
}