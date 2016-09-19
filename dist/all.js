require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _viewsFactoryViewJs = require('../views/factoryView.js');

var _viewsFactoryViewJs2 = _interopRequireDefault(_viewsFactoryViewJs);

var _routerRouter = require('../router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

var RecentController = (function () {
  function RecentController(container) {
    _classCallCheck(this, RecentController);

    this.view = new _viewsFactoryViewJs2['default'](container);
    this.router = new _routerRouter2['default'](document.getElementById('app'));
    this.render();
  }

  _createClass(RecentController, [{
    key: 'initEvents',
    value: function initEvents() {}
  }, {
    key: 'render',
    value: function render() {
      return this.view.render();
    }
  }]);

  return RecentController;
})();

exports['default'] = RecentController;
module.exports = exports['default'];

},{"../router/router":3,"../views/factoryView.js":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginModel = function LoginModel() {
  _classCallCheck(this, LoginModel);

  this.credentials = [{
    username: "admin",
    password: "admin"
  }, {
    username: "vika",
    password: "vika"
  }, {
    username: "z",
    password: "z"
  }];
};

exports["default"] = LoginModel;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _controllersFactoryController = require('../controllers/FactoryController');

var _controllersFactoryController2 = _interopRequireDefault(_controllersFactoryController);

var Router = (function () {
	function Router(container) {
		_classCallCheck(this, Router);

		this.container = container;
		this.content = null;
		this.routes = [];
	}

	_createClass(Router, [{
		key: 'route',
		value: function route(path, content) {
			this.routes[path] = { content: content };
		}
	}, {
		key: 'getCurrentRoute',
		value: function getCurrentRoute() {
			return location.pathname || '/';
		}
	}, {
		key: 'run',
		value: function run() {
			var currentURL = this.getCurrentRoute();
			this.render(currentURL);
		}
	}, {
		key: 'go',
		value: function go(route, convId) {
			var _this = this;

			var stateObj = convId ? { convId: convId } : {};
			this.container.innerHTML = '';

			history.pushState(stateObj, route, route);

			this.routes[route].content.forEach(function (el) {
				return new el(_this.container);
			});
		}
	}, {
		key: 'render',
		value: function render(currentURL, convId) {
			this.route('/', [_controllersFactoryController2['default']]);

			this.go(currentURL, convId);
		}
	}]);

	return Router;
})();

exports['default'] = Router;
module.exports = exports['default'];

},{"../controllers/FactoryController":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Routes = function Routes() {
  _classCallCheck(this, Routes);

  this.routes = [{
    title: "Factory",
    link: '/'
  }];
};

exports["default"] = Routes;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FactoryView = (function () {
  function FactoryView(container) {
    _classCallCheck(this, FactoryView);

    this.container = container;
    this.content = null;
  }

  _createClass(FactoryView, [{
    key: 'render',
    value: function render() {

      this.content = '\n\t\t\t<div class="fact" >\n        <div class="fact-field">\n          <div class="fact-center"></div>\n          <div class="fact-gate left"></div>\n          <div class="fact-circle left-c"></div>\n          <div class="fact-gate right"></div>\n          <div class="fact-circle right-c"></div>\n        </div>\n\t\t\t</div>\n\t\t';

      this.container.insertAdjacentHTML('beforeend', this.content);
    }
  }]);

  return FactoryView;
})();

exports['default'] = FactoryView;
module.exports = exports['default'];

},{}],"start":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = start;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _routerRouter = require('./router/router');

var _routerRouter2 = _interopRequireDefault(_routerRouter);

function start() {
	var router = new _routerRouter2['default'](document.getElementById('app'));
	router.run();
}

module.exports = exports['default'];

},{"./router/router":3}]},{},[1,"start",2,3,4,5])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9jb250cm9sbGVycy9GYWN0b3J5Q29udHJvbGxlci5qcyIsIi92YXIvd3d3L2Rlc2lnbi1wYXR0ZXJucy1qcy9zcmMvYXBwL21vZGVscy9sb2dpbi5qcyIsIi92YXIvd3d3L2Rlc2lnbi1wYXR0ZXJucy1qcy9zcmMvYXBwL3JvdXRlci9yb3V0ZXIuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9yb3V0ZXIvcm91dGVzLmpzIiwiL3Zhci93d3cvZGVzaWduLXBhdHRlcm5zLWpzL3NyYy9hcHAvdmlld3MvZmFjdG9yeVZpZXcuanMiLCIvdmFyL3d3dy9kZXNpZ24tcGF0dGVybnMtanMvc3JjL2FwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O2tDQ0FpQix5QkFBeUI7Ozs7NEJBQ3ZCLGtCQUFrQjs7OztJQUVoQixnQkFBZ0I7QUFDdkIsV0FETyxnQkFBZ0IsQ0FDdEIsU0FBUyxFQUFFOzBCQURMLGdCQUFnQjs7QUFFakMsUUFBSSxDQUFDLElBQUksR0FBRyxvQ0FBUyxTQUFTLENBQUMsQ0FBQztBQUNoQyxRQUFJLENBQUMsTUFBTSxHQUFHLDhCQUFXLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN6RCxRQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7R0FDZjs7ZUFMa0IsZ0JBQWdCOztXQU96QixzQkFBRyxFQUNaOzs7V0FFTSxrQkFBRztBQUNSLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUMzQjs7O1NBWmtCLGdCQUFnQjs7O3FCQUFoQixnQkFBZ0I7Ozs7Ozs7Ozs7OztJQ0hoQixVQUFVLEdBRWxCLFNBRlEsVUFBVSxHQUVmO3dCQUZLLFVBQVU7O0FBRzNCLE1BQUksQ0FBQyxXQUFXLEdB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Q0FBQyxHQUFHLEVBQUUsQ0FBQztDQUNiIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBWaWV3IGZyb20gJy4uL3ZpZXdzL2ZhY3RvcnlWaWV3LmpzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vcm91dGVyL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY2VudENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoY29udGFpbmVyKTtcbiAgICB0aGlzLnJvdXRlciA9IG5ldyBSb3V0ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmlldy5yZW5kZXIoKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTW9kZWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBbXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiBcImFkbWluXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHVzZXJuYW1lOiBcInZpa2FcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwidmlrYVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB1c2VybmFtZTogXCJ6XCIsXG4gICAgICAgIHBhc3N3b3JkOiBcInpcIlxuICAgICAgfVxuICAgIF07XG4gIH1cbn0iLCJpbXBvcnQgRmFjdG9yeSBmcm9tICcuLi9jb250cm9sbGVycy9GYWN0b3J5Q29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yIChjb250YWluZXIpIHtcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xuXHRcdHRoaXMucm91dGVzID0gW107XG5cdH1cblxuXHRyb3V0ZSAocGF0aCwgY29udGVudCkge1xuXHRcdHRoaXMucm91dGVzW3BhdGhdID0ge2NvbnRlbnQ6IGNvbnRlbnR9O1xuXHR9XG5cblx0Z2V0Q3VycmVudFJvdXRlKCkge1xuXHRcdHJldHVybiBsb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG5cdH1cblxuXHRydW4gKCkge1xuXHRcdGxldCBjdXJyZW50VVJMID0gdGhpcy5nZXRDdXJyZW50Um91dGUoKTtcblx0XHR0aGlzLnJlbmRlcihjdXJyZW50VVJMKTtcblx0fVxuXG5cdGdvKHJvdXRlLCBjb252SWQpIHtcblx0XHRsZXQgc3RhdGVPYmogPSBjb252SWQgPyB7Y29udklkOiBjb252SWR9IDoge307XG5cdFx0dGhpcy5jb250YWluZXIuaW5uZXJIVE1MPSAnJztcblxuXHRcdGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlT2JqLCByb3V0ZSwgcm91dGUpO1xuXG5cdFx0dGhpcy5yb3V0ZXNbcm91dGVdLmNvbnRlbnQuZm9yRWFjaCggKGVsKSA9PiB7XG5cdFx0XHRyZXR1cm4gKG5ldyBlbCh0aGlzLmNvbnRhaW5lcikpO1xuXHRcdH0gKTtcblx0fVxuXG5cdHJlbmRlciAoY3VycmVudFVSTCwgY29udklkKSB7XG5cdFx0dGhpcy5yb3V0ZSgnLycsIFtGYWN0b3J5XSk7XG5cblx0XHR0aGlzLmdvKGN1cnJlbnRVUkwsIGNvbnZJZCk7XG5cdH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucm91dGVzID0gW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJGYWN0b3J5XCIsXG4gICAgICAgIGxpbms6ICcvJ1xuICAgICAgfSxcbiAgICBdO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjdG9yeVZpZXcge1xuICBjb25zdHJ1Y3RvciAoY29udGFpbmVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb250ZW50ID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG5cbiAgICB0aGlzLmNvbnRlbnQgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmFjdFwiID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY3QtZmllbGRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjdC1jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjdC1nYXRlIGxlZnRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjdC1jaXJjbGUgbGVmdC1jXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZhY3QtZ2F0ZSByaWdodFwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYWN0LWNpcmNsZSByaWdodC1jXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblxuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5jb250ZW50ICk7XG4gIH1cbn0iLCJpbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyL3JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0ICgpIHtcblx0bGV0IHJvdXRlciA9IG5ldyBSb3V0ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblx0cm91dGVyLnJ1bigpO1xufSJdfQ==

//# sourceMappingURL=all.js.map